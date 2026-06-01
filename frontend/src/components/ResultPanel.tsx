import { Card } from "./Card";
import { useRoomState } from "../state/roomStore";

export function ResultPanel() {
  const { room } = useRoomState();

  return (
    <Card title="Activity">
      {room?.guesses && room.guesses.length > 0 ? (
        <ul className="activity-list">
          {room.guesses.map((g) => (
            <li key={g.id}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: g.correct ? 700 : 500 }}>{g.text}</span>
                <span style={{ color: '#6b7280', fontSize: '0.85rem' }}>{new Date(g.createdAt).toLocaleTimeString()}</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>{g.correct ? 'Correct' : 'Guess'}</div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="placeholder-block" style={{ backgroundColor: '#f9fafb' }}>
          <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Game activity and guesses will appear here.</p>
        </div>
      )}
    </Card>
  );
}
