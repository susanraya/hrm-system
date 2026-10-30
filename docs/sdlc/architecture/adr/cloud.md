<!-- sdlc:auto:start adr -->
# ADR-0004: Use AWS for Cloud

Status: Accepted  
Date: 2026-10-30

## Context and Problem Statement

Which Cloud technology does the project use? Decided in architecture v1.

## Considered Options

- AWS
- Azure
- GCP

## Decision Outcome

Chosen option: AWS, because The Mumbai ap-south-1 region keeps the database and S3 documents in India for DPDP residency, and provides RDS, S3 and compute as one set of building blocks for a small internal system.

## Consequences

Ties operations to AWS tooling; mitigated by using portable, standard services (Postgres, S3-compatible object storage).
<!-- sdlc:auto:end adr -->