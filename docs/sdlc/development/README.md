# Development

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
### PLAN-001 · approved · source: plan:v1

Approved Sprint Plan v1 for HRM SYSTEM, organized into 5 sprints covering 6 epics and 18 user stories plus supporting engineering tasks.

Plan status: approved, version 1. Sprint goals as stated:
- Sprint 1 (capacity 21): Stand up authentication, role-based access control, India data-residency configuration, and the DPDP privacy notice.
- Sprint 2 (capacity 20): Deliver user provisioning, core employee records, and leave policy configuration (leave types and the holiday/weekend calendar).
- Sprint 3 (capacity 20): Enable employee self-service profile correction, secure document upload, and spreadsheet bulk-import.
- Sprint 4 (capacity 20): Deliver the leave apply/approve workflow with automatic balance updates, plus attendance check-in/out and the personal dashboard.
- Sprint 5 (capacity 20): Deliver manager team attendance view, exportable reports, and leave email notifications.
Backlog comprises 6 epics (EPIC-001..006), 18 stories (US-001..018, 90 total story points), and 11 named sub-tasks across US-002, US-006, US-007, US-010, and US-015.

**Related:** US-001, US-002, US-003, US-004, US-005, US-006, US-007, US-008, US-009, US-010, US-011, US-012, US-013, US-014, US-015, US-016, US-017, US-018, EPIC-001, EPIC-002, EPIC-003, EPIC-004, EPIC-005, EPIC-006

- ⚠ No development execution data (ticket completion status, commits, code review outcomes, test run results) was provided for this phase — only the backlog/sprint plan is available.
- ⚠ Sprint-to-story assignment is not an explicit field in the input; it is inferred per sprint from goal wording and point-total alignment with capacity (see individual Sprint entries) — recommend the team confirm these mappings are correct.

### SPRINT-1 · approved · source: plan:Sprint 1

Sprint 1 (capacity 21) targets authentication, role-based access control, India data residency, and the DPDP privacy notice.

Goal (as stated): 'Stand up authentication, role-based access control, India data-residency configuration, and the DPDP privacy notice.'
Inferred scope (goal wording plus story points summing exactly to the 21-point capacity):
- EPIC-001 Authentication & Role-Based Access:
  - US-001 Email/password login (5 pts, backend-agent)
  - US-002 Role-based access control (8 pts, backend-agent); sub-tasks: US-002-T1 permission middleware, US-002-T2 manager direct-report scoping, US-002-T3 employee self-scoping restrictions, US-002-T4 RBAC enforcement test suite (qa-agent)
  - US-003 User account provisioning and deactivation (3 pts, backend-agent)
- EPIC-006 Data Protection & Privacy (DPDP Act 2023):
  - US-017 Privacy notice under DPDP employment legitimate-use (2 pts, frontend-agent)
  - US-018 Data residency in India (3 pts, devops-agent)

**Related:** EPIC-001, EPIC-006, US-001, US-002, US-003, US-017, US-018

- ⚠ Sprint-to-story mapping is inferred, not explicitly tagged in the input (see PLAN-001 open gap).

### SPRINT-2 · approved · source: plan:Sprint 2

Sprint 2 (capacity 20) targets user provisioning, core employee records, and leave policy configuration.

Goal (as stated): 'Deliver user provisioning, core employee records, and leave policy configuration (leave types and the holiday/weekend calendar).'
Inferred scope:
- US-004 Manage employee profile records (5 pts, backend-agent) — EPIC-002
- US-008 Configure leave types, balances and accruals (5 pts, backend-agent) — EPIC-003
- US-009 Configure Indian holiday calendar and weekends (5 pts, backend-agent) — EPIC-003
Story points sum to 15 of the 20-point capacity.

**Related:** EPIC-002, EPIC-003, US-004, US-008, US-009

- ⚠ This sprint's goal text explicitly says 'user provisioning', but the only provisioning story (US-003) was placed in Sprint 1 based on its point total fitting Sprint 1's capacity exactly — the two sprints' goal wording overlaps and should be clarified with the team.
- ⚠ 5 of the 20 capacity points are not accounted for by any listed story in this sprint; may be task-level buffer or an unlisted item.

### SPRINT-3 · approved · source: plan:Sprint 3

Sprint 3 (capacity 20) targets employee self-service profile correction, secure document upload, and spreadsheet bulk-import.

Goal (as stated): 'Enable employee self-service profile correction, secure document upload, and spreadsheet bulk-import.'
Inferred scope:
- US-005 Employee self-view and correction of own profile (3 pts, frontend-agent)
- US-006 Secure employee document upload (8 pts, backend-agent); sub-tasks: US-006-T1 S3 upload endpoint with validation, US-006-T2 secure document retrieval with access control, US-006-T3 document upload UI (frontend-agent)
- US-007 Bulk-import employees via spreadsheet (8 pts, backend-agent); sub-tasks: US-007-T1 spreadsheet parsing and row validation, US-007-T2 bulk employee creation for valid rows, US-007-T3 import failure reporting, US-007-T4 import screen with template download (frontend-agent)
Story points sum to 19 of the 20-point capacity.

**Related:** EPIC-002, US-005, US-006, US-007

- ⚠ Sprint-to-story mapping is inferred, not explicitly tagged in the input.
- ⚠ 1 point of capacity is unaccounted for; likely minor buffer.

### SPRINT-4 · approved · source: plan:Sprint 4

Sprint 4 (capacity 20) targets the leave apply/approve workflow with automatic balance updates, plus attendance check-in/out and the personal dashboard.

Goal (as stated): 'Deliver the leave apply/approve workflow with automatic balance updates, plus attendance check-in/out and the personal dashboard.'
Inferred scope:
- US-010 Apply for leave (8 pts, backend-agent); sub-tasks: US-010-T1 leave balance and overlap validation, US-010-T2 working-day calculation excluding holidays/weekends, US-010-T3 leave application form (frontend-agent)
- US-011 Approve or reject leave with automatic balance update (5 pts, backend-agent)
- US-012 Web check-in and check-out (3 pts, backend-agent)
- US-013 Employee dashboard showing own attendance (3 pts, frontend-agent)
Story points sum to 19 of the 20-point capacity.

**Related:** EPIC-003, EPIC-004, US-010, US-011, US-012, US-013

- ⚠ Sprint-to-story mapping is inferred, not explicitly tagged in the input.
- ⚠ 1 point of capacity is unaccounted for; likely minor buffer.

### SPRINT-5 · approved · source: plan:Sprint 5

Sprint 5 (capacity 20) targets the manager team attendance view, exportable reports, and leave email notifications.

Goal (as stated): 'Deliver manager team attendance view, exportable reports, and leave email notifications.'
Inferred scope:
- US-014 Manager team attendance view (3 pts, frontend-agent)
- US-015 View and export attendance and leave reports (8 pts, backend-agent); sub-tasks: US-015-T1 filterable report query endpoint, US-015-T2 CSV/Excel export generation, US-015-T3 reports screen with filters and export action (frontend-agent)
- US-016 Email notifications for leave requests and approvals (5 pts, integration-agent)
Story points sum to 16 of the 20-point capacity.

**Related:** EPIC-004, EPIC-005, US-014, US-015, US-016

- ⚠ Sprint-to-story mapping is inferred, not explicitly tagged in the input.
- ⚠ 4 points of capacity (the largest gap among all sprints) are unaccounted for by listed stories — worth confirming whether additional scope was planned but omitted from this input.

### EPIC-001 · approved · source: plan:EPIC-001

Authentication & Role-Based Access epic: login, RBAC enforcement, and account lifecycle management.

- US-001 Email/password login (5 pts, backend-agent)
- US-002 Role-based access control (8 pts, backend-agent): sub-tasks are US-002-T1 role-based permission middleware, US-002-T2 manager direct-report scoping, US-002-T3 employee self-scoping restrictions, and US-002-T4 an RBAC enforcement test suite (qa-agent)
- US-003 User account provisioning and deactivation (3 pts, backend-agent)
Mapped to Sprint 1 per goal wording and point-total match.

**Related:** US-001, US-002, US-003, SPRINT-1

- ⚠ US-002-T4 (RBAC enforcement test suite) is assigned to qa-agent, but no test results or pass/fail status were included in this phase's input.

### EPIC-002 · approved · source: plan:EPIC-002

Core HR — Employee Records epic: profile management, employee self-service, document upload, and bulk import.

- US-004 Manage employee profile records (5 pts, backend-agent) — mapped to Sprint 2
- US-005 Employee self-view and correction of own profile (3 pts, frontend-agent) — mapped to Sprint 3
- US-006 Secure employee document upload (8 pts, backend-agent) — mapped to Sprint 3; sub-tasks: US-006-T1 S3 upload endpoint with validation, US-006-T2 secure document retrieval with access control, US-006-T3 document upload UI (frontend-agent)
- US-007 Bulk-import employees via spreadsheet (8 pts, backend-agent) — mapped to Sprint 3; sub-tasks: US-007-T1 spreadsheet parsing and row validation, US-007-T2 bulk employee creation for valid rows, US-007-T3 import failure reporting, US-007-T4 import screen with template download (frontend-agent)

**Related:** US-004, US-005, US-006, US-007, SPRINT-2, SPRINT-3

### EPIC-003 · approved · source: plan:EPIC-003

Leave Management epic: leave policy configuration plus the apply/approve workflow with balance updates.

- US-008 Configure leave types, balances and accruals (5 pts, backend-agent) — mapped to Sprint 2
- US-009 Configure Indian holiday calendar and weekends (5 pts, backend-agent) — mapped to Sprint 2
- US-010 Apply for leave (8 pts, backend-agent) — mapped to Sprint 4; sub-tasks: US-010-T1 leave balance and overlap validation, US-010-T2 working-day calculation excluding holidays/weekends, US-010-T3 leave application form (frontend-agent)
- US-011 Approve or reject leave with automatic balance update (5 pts, backend-agent) — mapped to Sprint 4

**Related:** US-008, US-009, US-010, US-011, SPRINT-2, SPRINT-4

### EPIC-004 · approved · source: plan:EPIC-004

Attendance epic: employee check-in/out, personal attendance dashboard, and manager team view.

- US-012 Web check-in and check-out (3 pts, backend-agent) — mapped to Sprint 4
- US-013 Employee dashboard showing own attendance (3 pts, frontend-agent) — mapped to Sprint 4
- US-014 Manager team attendance view (3 pts, frontend-agent) — mapped to Sprint 5

**Related:** US-012, US-013, US-014, SPRINT-4, SPRINT-5

### EPIC-005 · approved · source: plan:EPIC-005

Reporting & Email Notifications epic: exportable attendance/leave reports and leave-related email alerts.

- US-015 View and export attendance and leave reports (8 pts, backend-agent) — mapped to Sprint 5; sub-tasks: US-015-T1 filterable report query endpoint, US-015-T2 CSV/Excel export generation, US-015-T3 reports screen with filters and export action (frontend-agent)
- US-016 Email notifications for leave requests and approvals (5 pts, integration-agent) — mapped to Sprint 5

**Related:** US-015, US-016, SPRINT-5

### EPIC-006 · approved · source: plan:EPIC-006

Data Protection & Privacy epic addressing India's DPDP Act 2023 obligations: privacy notice and data residency.

- US-017 Privacy notice under DPDP employment legitimate-use (2 pts, frontend-agent) — mapped to Sprint 1
- US-018 Data residency in India (3 pts, devops-agent) — mapped to Sprint 1
DPDP Act 2023: these two stories are the planned controls for (a) the notice/transparency obligation toward employees processed under the employment legitimate-use ground, and (b) data localization/residency of personal data within India. No other DPDP-specific control (e.g., consent withdrawal, data principal grievance redressal, breach notification) is named anywhere in this phase's input.

**Related:** US-017, US-018, SPRINT-1

- ⚠ DPDP compliance: privacy notice (US-017) and India data residency (US-018) are currently only planned backlog stories — no evidence of actual implementation, legal sign-off on notice content, or verification that data residency is enforced has been provided yet.
- ⚠ No story in this input addresses DPDP breach-notification or data-principal grievance-redressal obligations — confirm whether these are out of scope or simply not yet planned.
<!-- sdlc:auto:end narrative -->
