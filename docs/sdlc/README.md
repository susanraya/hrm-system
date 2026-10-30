# HRM SYSTEM — SDLC Documentation

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start overview -->
Human resource management system

**Documentation version:** v2
<!-- sdlc:auto:end overview -->

## Contents

<!-- sdlc:auto:start contents -->
| Document | State |
|---|---|
| [Requirements](requirements/README.md) | v1 approved |
| [Architecture](architecture/README.md) | 14 entries |
| [Development](development/README.md) | 1 entry |
| [Testing](testing/README.md) | 1 entry |
| [Deployment](deployment/README.md) | 1 entry |
| [Maintenance](maintenance/README.md) | 1 entry |
| [Data model](architecture/data-model.md) | generated |
| [API (OpenAPI)](architecture/api/openapi.yaml) | generated |
| [Decisions (ADRs)](architecture/adr/README.md) | 4 decisions |
| [Sprint plan](development/sprint-plan.md) | not generated yet |
| [Developer guide](development/developer-guide.md) | generated |
| [API reference](development/api-reference.md) | 1 route |
| [Test report](testing/test-report.md) | not run yet |
| [Tests](testing/test-cases.md) | 0 tests |
| [Deployment guide](deployment/deployment-guide.md) | not deployed yet |
| [Runbook](deployment/runbook.md) | not deployed yet |
| [Release notes](deployment/release-notes.md) | 0 releases |
| [Traceability matrix](traceability-matrix.md) | 18 requirements |
| [Changelog](CHANGELOG.md) | 2 versions |
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

- Input does not map individual requirement ids (US-001..US-018) to specific architecture elements, so requirement-level traceability for this phase cannot be populated beyond this general summary.
- No detail given on how/where email failures are logged (e.g. which table or log sink) beyond the stated behavior that they don't block the workflow.
- privacy_notices table stores content/version but there is no field or table recording an individual employee's acknowledgement/acceptance of a given notice version -- flagged under DPDP compliance gaps as well.
- No endpoint listed for querying/exporting audit_logs, even though the audit_logs table exists and access-audit logging is a stated DPDP obligation -- unclear how HR/admin would review audit trails.
- Architecture does not state SendGrid's own data-residency/processing location for the email content it transmits (names, leave dates in notification emails) -- relevant to confirm against DPDP residency expectations.
- DPDP Act 2023: no endpoint exists to query/export audit_logs, so the audit-logging control is only partially evidenced (data is captured per the schema but review/reporting capability is not described).
- DPDP Act 2023: no mechanism described for recording an individual's acknowledgement of a specific privacy_notices version, only the notice's own content and version.
- DPDP Act 2023: data retention/erasure policy (e.g. how long employee_documents, attendance, or audit_logs are retained after an employee's employment_end_date) is not addressed anywhere in this architecture input.

### Development

- Development phase has not started -- no planning or implementation input is available.

### Testing

- Testing phase has not started -- no test input is available.

### Deployment

- No deployment recorded yet; data residency and other production configuration cannot be verified.

### Maintenance

- Maintenance phase has no notes -- system is not yet live.
<!-- sdlc:auto:end open-gaps -->
