# HRM SYSTEM — SDLC Documentation

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start overview -->
Human resource management system

**Documentation version:** v3
<!-- sdlc:auto:end overview -->

## Contents

<!-- sdlc:auto:start contents -->
| Document | State |
|---|---|
| [Requirements](requirements/README.md) | v1 approved |
| [Architecture](architecture/README.md) | 14 entries |
| [Development](development/README.md) | 12 entries |
| [Testing](testing/README.md) | 1 entry |
| [Deployment](deployment/README.md) | 1 entry |
| [Maintenance](maintenance/README.md) | 1 entry |
| [Data model](architecture/data-model.md) | generated |
| [API (OpenAPI)](architecture/api/openapi.yaml) | generated |
| [Decisions (ADRs)](architecture/adr/README.md) | 4 decisions |
| [Sprint plan](development/sprint-plan.md) | 5 sprints |
| [Developer guide](development/developer-guide.md) | generated |
| [API reference](development/api-reference.md) | 1 route |
| [Test report](testing/test-report.md) | not run yet |
| [Tests](testing/test-cases.md) | 0 tests |
| [Deployment guide](deployment/deployment-guide.md) | not deployed yet |
| [Runbook](deployment/runbook.md) | not deployed yet |
| [Release notes](deployment/release-notes.md) | 0 releases |
| [Traceability matrix](traceability-matrix.md) | 18 requirements |
| [Changelog](CHANGELOG.md) | 3 versions |
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

- No development execution data (ticket completion status, commits, code review outcomes, test run results) was provided for this phase — only the backlog/sprint plan is available.
- Sprint-to-story assignment is not an explicit field in the input; it is inferred per sprint from goal wording and point-total alignment with capacity (see individual Sprint entries) — recommend the team confirm these mappings are correct.
- Sprint-to-story mapping is inferred, not explicitly tagged in the input (see PLAN-001 open gap).
- This sprint's goal text explicitly says 'user provisioning', but the only provisioning story (US-003) was placed in Sprint 1 based on its point total fitting Sprint 1's capacity exactly — the two sprints' goal wording overlaps and should be clarified with the team.
- 5 of the 20 capacity points are not accounted for by any listed story in this sprint; may be task-level buffer or an unlisted item.
- Sprint-to-story mapping is inferred, not explicitly tagged in the input.
- 1 point of capacity is unaccounted for; likely minor buffer.
- 4 points of capacity (the largest gap among all sprints) are unaccounted for by listed stories — worth confirming whether additional scope was planned but omitted from this input.
- US-002-T4 (RBAC enforcement test suite) is assigned to qa-agent, but no test results or pass/fail status were included in this phase's input.
- DPDP compliance: privacy notice (US-017) and India data residency (US-018) are currently only planned backlog stories — no evidence of actual implementation, legal sign-off on notice content, or verification that data residency is enforced has been provided yet.
- No story in this input addresses DPDP breach-notification or data-principal grievance-redressal obligations — confirm whether these are out of scope or simply not yet planned.

### Testing

- Testing phase has not started -- no test input is available.

### Deployment

- No deployment recorded yet; data residency and other production configuration cannot be verified.

### Maintenance

- Maintenance phase has no notes -- system is not yet live.
<!-- sdlc:auto:end open-gaps -->
