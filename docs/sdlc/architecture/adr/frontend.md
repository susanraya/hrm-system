<!-- sdlc:auto:start adr -->
# ADR-0001: Use React 19 for Frontend

Status: Accepted  
Date: 2026-10-30

## Context and Problem Statement

Which Frontend technology does the project use? Decided in architecture v1.

## Considered Options

- React 19
- Angular
- Vue

## Decision Outcome

Chosen option: React 19, because Delivers one responsive codebase serving the three role-specific audiences (employee self-service, manager approvals, HR/admin config and reports) on desktop and mobile browsers with no native app.

## Consequences

A SPA needs accessible, semantic components to meet the RPwD Act 2016 / WCAG-aligned accessibility expectation; this is a build discipline rather than a framework limitation.
<!-- sdlc:auto:end adr -->