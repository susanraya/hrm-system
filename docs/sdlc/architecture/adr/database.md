<!-- sdlc:auto:start adr -->
# ADR-0003: Use PostgreSQL 16 for Database

Status: Accepted  
Date: 2026-10-30

## Context and Problem Statement

Which Database technology does the project use? Decided in architecture v1.

## Considered Options

- PostgreSQL 16
- MySQL
- SQLite

## Decision Outcome

Chosen option: PostgreSQL 16, because Enforces the relationships and ACID transactions that keep leave balances accurate, and handles date ranges for attendance and holiday calendars well; JSONB stores accrual rules without a second store.

## Consequences

Needs managed hosting (RDS) and backups, acceptable for a single organisation and required for the India-region residency guarantee.
<!-- sdlc:auto:end adr -->