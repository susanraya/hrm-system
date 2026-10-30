# Sprint Plan

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start sprints -->
## Sprint 1: Sprint 1

Stand up authentication, role-based access control, and India-region infrastructure baseline

Capacity: 20 points · Committed: 19

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-001 | Story | Email/password login | 5 | backend-agent | — |
| US-002 | Story | Role-based access control | 8 | backend-agent | US-001 |
| ↳ US-002-T1 | Task | Implement role-based permission middleware | — | backend-agent | — |
| ↳ US-002-T2 | Task | Apply role scoping to employee and leave endpoints | — | backend-agent | — |
| ↳ US-002-T3 | Task | Apply manager-scoped filtering to team endpoints | — | backend-agent | — |
| ↳ US-002-T4 | Task | Write cross-role access control test suite | — | qa-agent | — |
| US-003 | Story | User account provisioning and deactivation | 3 | backend-agent | US-001 |
| US-018 | Story | Data residency in India | 3 | devops-agent | — |

## Sprint 2: Sprint 2

Build core employee records, leave policy configuration, and the DPDP privacy notice

Capacity: 20 points · Committed: 17

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-004 | Story | Manage employee profile records | 5 | backend-agent | US-002 |
| ↳ US-004-T1 | Task | Add employee and department data model and migrations | — | backend-agent | — |
| ↳ US-004-T2 | Task | Implement employee create/edit endpoints with mandatory-field validation | — | backend-agent | — |
| ↳ US-004-T3 | Task | Build employee directory and profile edit screens | — | frontend-agent | — |
| US-008 | Story | Configure leave types, balances and accruals | 5 | backend-agent | US-002 |
| US-009 | Story | Configure Indian holiday calendar and weekends | 5 | backend-agent | US-002 |
| US-017 | Story | Privacy notice under DPDP employment legitimate-use | 2 | frontend-agent | US-001 |

## Sprint 3: Sprint 3

Enable employee self-service, secure document upload, and attendance check-in/out

Capacity: 20 points · Committed: 14

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-005 | Story | Employee self-view and correction of own profile | 3 | backend-agent | US-004, US-002 |
| US-006 | Story | Secure employee document upload | 8 | backend-agent | US-004 |
| ↳ US-006-T1 | Task | Implement secure S3 upload with type/size validation | — | backend-agent | — |
| ↳ US-006-T2 | Task | Implement authorized document retrieval endpoint | — | backend-agent | — |
| ↳ US-006-T3 | Task | Build document upload UI with validation feedback | — | frontend-agent | — |
| US-012 | Story | Web check-in and check-out | 3 | backend-agent | US-004, US-002 |

## Sprint 4: Sprint 4

Deliver bulk employee import, leave application, and attendance views

Capacity: 20 points · Committed: 22

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-007 | Story | Bulk-import employees via spreadsheet | 8 | backend-agent | US-004 |
| ↳ US-007-T1 | Task | Build spreadsheet template parsing and row validation | — | backend-agent | — |
| ↳ US-007-T2 | Task | Implement import endpoint with per-row success/failure reporting | — | backend-agent | — |
| ↳ US-007-T3 | Task | Build import UI with results summary | — | frontend-agent | — |
| US-010 | Story | Apply for leave | 8 | backend-agent | US-008, US-009, US-004 |
| US-013 | Story | Employee dashboard showing own attendance | 3 | frontend-agent | US-012 |
| US-014 | Story | Manager team attendance view | 3 | frontend-agent | US-012, US-002 |

## Sprint 5: Sprint 5

Complete leave approval workflow with notifications, and launch HR reporting/export

Capacity: 20 points · Committed: 18

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-011 | Story | Approve or reject leave with automatic balance update | 5 | backend-agent | US-010 |
| US-015 | Story | View and export attendance and leave reports | 8 | backend-agent | US-010, US-011, US-012 |
| ↳ US-015-T1 | Task | Implement report query/aggregation endpoint with filters | — | backend-agent | — |
| ↳ US-015-T2 | Task | Implement CSV/Excel export endpoint | — | backend-agent | — |
| ↳ US-015-T3 | Task | Build reports screen with filters and empty-state handling | — | frontend-agent | — |
| US-016 | Story | Email notifications for leave requests and approvals | 5 | integration-agent | US-010, US-011 |

## Unscheduled

_Nothing unscheduled._
<!-- sdlc:auto:end sprints -->
