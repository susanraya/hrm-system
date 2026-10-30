# HRM SYSTEM — SDLC Documentation

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start overview -->
Human resource management system

**Documentation version:** v1
<!-- sdlc:auto:end overview -->

## Contents

<!-- sdlc:auto:start contents -->
| Document | State |
|---|---|
| [Requirements](requirements/README.md) | v1 approved |
| [Architecture](architecture/README.md) | 1 entry |
| [Development](development/README.md) | 1 entry |
| [Testing](testing/README.md) | 1 entry |
| [Deployment](deployment/README.md) | 1 entry |
| [Maintenance](maintenance/README.md) | 1 entry |
| [Data model](architecture/data-model.md) | not generated yet |
| [API (OpenAPI)](architecture/api/openapi.yaml) | not generated yet |
| [Decisions (ADRs)](architecture/adr/README.md) | 0 decisions |
| [Sprint plan](development/sprint-plan.md) | not generated yet |
| [Developer guide](development/developer-guide.md) | not generated yet |
| [API reference](development/api-reference.md) | 0 routes |
| [Test report](testing/test-report.md) | not run yet |
| [Tests](testing/test-cases.md) | 0 tests |
| [Deployment guide](deployment/deployment-guide.md) | not deployed yet |
| [Runbook](deployment/runbook.md) | not deployed yet |
| [Release notes](deployment/release-notes.md) | 0 releases |
| [Traceability matrix](traceability-matrix.md) | 18 requirements |
| [Changelog](CHANGELOG.md) | 1 version |
<!-- sdlc:auto:end contents -->

## Open gaps

<!-- sdlc:auto:start open-gaps -->
### Requirements

- No architecture phase yet to confirm the stack has actually been designed/implemented as specified.
- Exact expiry duration for the password reset link is not specified.
- Full enumeration of which specific screens/endpoints are manager-only vs HR/admin-only beyond the examples given is not provided.
- Process for creating the very first/initial HR/admin account (bootstrapping) is not specified.
- Complete list of all mandatory fields beyond the three examples given is not specified.
- Which fields are directly self-editable versus which must be routed to HR/admin for review is not fully distinguished beyond 'phone or address' examples.
- Specific allowed file types and maximum file size limit values are not specified.
- The spreadsheet template's exact column layout/format is not specified.
- Specific accrual rule mechanics (e.g. monthly pro-rata vs lump-sum annual) are not detailed.
- Exact CSV/Excel column layout for exported reports is not specified.
- DPDP data-principal rights beyond view/correct (e.g. erasure, grievance redressal, consent withdrawal) are not addressed by this story -- confirm if in scope.
- Breach notification obligations (DPDP Act notification to the Data Protection Board and affected people; CERT-In 6-hour incident reporting and 180-day ICT log retention) are not addressed by any requirement -- confirm whether in scope.
- Specific expiry duration not defined.
- Allowed file types and max size values not specified.
- No deployment record yet to confirm the region is actually configured as ap-south-1 in practice.

### Architecture

- Architecture phase has not started -- no design input is available for HRM System beyond the approved tech stack/services.

### Development

- Development phase has not started -- no planning or implementation input is available.

### Testing

- Testing phase has not started -- no test input is available.

### Deployment

- No deployment recorded yet; data residency and other production configuration cannot be verified.

### Maintenance

- Maintenance phase has no notes -- system is not yet live.
<!-- sdlc:auto:end open-gaps -->
