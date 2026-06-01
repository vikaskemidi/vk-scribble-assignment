<!--
Sync Impact Report
Version change: none → 0.1.0
Modified principles: none (initial constitution)
Added sections: Development Workflow, Review Practices
Removed sections: none
Templates requiring updates: no changes required; plan/spec/tasks templates remain generic and aligned
Follow-up TODOs: none
-->

# Scribble Starter Constitution

## Core Principles

### I. Code Quality First
All code MUST be clean, readable, and maintainable. Every change MUST preserve or improve the repository structure, use explicit TypeScript types, avoid unnecessary complexity, and eliminate dead code rather than hide it.

### II. Test Standards
Behavior changes MUST be accompanied by automated tests before the change is considered complete. Tests MUST exercise happy paths and meaningful edge cases, and test names MUST describe expected behavior clearly.

### III. Naming Discipline
Identifiers MUST be descriptive, consistent, and intentional. Variable names, function names, component names, and route names MUST express purpose clearly and avoid abbreviations or ambiguous terms.

### IV. Incremental Delivery
Work MUST be delivered in small, reviewable increments. Each commit or PR SHOULD implement one discrete behavior, preserve existing functionality, and link to an explicit acceptance criterion.

### V. Simplicity & In-Memory Safety
Implementations MUST remain simple and use only in-memory state for game rooms and gameplay. This repository MUST NOT introduce databases, WebSockets, or authentication. Prefer explicit state transitions, clear contracts, and minimal shared mutable state.

## Development Workflow
All feature work MUST begin from the current repository state, with refactors limited to the scope needed for the current behavior. Changes MUST be organized by feature, documented in PR descriptions, and verified with both automated tests and manual frontend/backend validation when applicable.

## Review Practices
Code review MUST verify compliance with this constitution. Reviewers MUST confirm that tests exist for behavior changes, naming is clear, error handling is explicit, and in-memory state assumptions are preserved. Violations MUST be fixed before merge.

## Governance
This constitution is the source of truth for development quality in this repository. Amendments MUST be documented in this file and described in PR rationale. Constitution versioning follows semantic rules:
- MAJOR for backward-incompatible or principle-level changes.
- MINOR for added principles, new governance requirements, or expanded mandatory expectations.
- PATCH for wording improvements, clarifications, or typo fixes.

Reviewers and contributors MUST consult this constitution during each PR. If a proposed change conflicts with these principles, it MUST be flagged and remediated before approval.

**Version**: 0.1.0 | **Ratified**: 2026-06-01 | **Last Amended**: 2026-06-01
