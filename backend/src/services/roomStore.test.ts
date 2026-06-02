import { describe, expect, it } from "vitest";
import { createRoom, joinRoom, startRound, submitGuess, restartRound } from "./roomStore.js";

describe("roomStore", () => {
  it("createRoom returns a room with a 4-character uppercase code", () => {
    const result = createRoom("Alice");

    expect(result.room.code).toMatch(/^[A-Z0-9]{4}$/);
    expect(result.room.participants).toHaveLength(1);
    expect(result.room.participants[0].name).toBe("Alice");
    expect(result.participantId).toBeDefined();
  });

  it("joinRoom returns null for an unknown room code", () => {
    const result = joinRoom("ZZZZ", "Bob");

    expect(result).toBeNull();
  });

  it("startRound, submitGuess awards points and moves to results, restartRound resets state", () => {
    const a = createRoom("Alice");
    const code = a.room.code;
    const hostId = a.participantId;

    const b = joinRoom(code, "Bob");
    expect(b).not.toBeNull();

    // Start round as host
    const started = startRound(code, hostId);
    expect(started).toBeDefined();
    expect(started.status).toBe("active");
    expect(started.round).toBeDefined();

    // Find a guesser id
    const guesser = started.participants.find((p: any) => p.id !== started.round.drawerId);
    expect(guesser).toBeDefined();

    // Submit a correct guess
    const secret = started.round.secretWord;
    const afterGuess = submitGuess(code, guesser.id, secret);
    expect(afterGuess.status).toBe("results");
    const updatedGuesser = afterGuess.participants.find((p: any) => p.id === guesser.id);
    expect(updatedGuesser.score).toBeGreaterThanOrEqual(100);

    // Restart as host
    const restarted = restartRound(code, hostId);
    expect(restarted.status).toBe("lobby");
    expect(restarted.round).toBeNull();
    expect(restarted.guesses).toHaveLength(0);
    restarted.participants.forEach((p: any) => expect(p.role).toBeUndefined());
  });
});
