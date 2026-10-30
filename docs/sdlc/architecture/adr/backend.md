<!-- sdlc:auto:start adr -->
# ADR-0002: Use Django 5.1 for Backend

Status: Accepted  
Date: 2026-10-30

## Context and Problem Statement

Which Backend technology does the project use? Decided in architecture v1.

## Considered Options

- Django 5.1
- FastAPI
- Spring Boot

## Decision Outcome

Chosen option: Django 5.1, because Its ORM, migrations, auth, password-reset tokens and admin accelerate a records-and-workflow HRMS, and DRF exposes the role-scoped REST API cleanly within one app.

## Consequences

Synchronous by default, which is fine at ~200 employees; email is dispatched inline with failure logging rather than a background queue to keep the lightweight scope simple.
<!-- sdlc:auto:end adr -->