# Traceability Matrix

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start legend -->
Built from recorded links, not written by a model: requirement key → plan item (`source_stable_key`) → development ticket (`stable_key`) → the ticket's test steps → the last live deployment that started after the work finished. **AC tests** counts the story's acceptance criteria that have a test case, and those whose test cases all passed in the latest finished E2E run.
<!-- sdlc:auto:end legend -->

<!-- sdlc:auto:start matrix -->
| Requirement | Epic | Title | Plan items | Sprint | Design | Code | Commits | Ticket | Tests | AC tests | Deployed |
|---|---|---|---|---|---|---|---|---|---|---|---|
| US-001 | EPIC-001 | Email/password login | US-001 | 1 | POST /api/auth/login, POST /api/auth/password-reset, POST /api/auth/password-reset/confirm, api_backend, database, email_service, users, web_frontend | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-002 | EPIC-001 | Role-based access control | US-002, US-002-T1, US-002-T2, US-002-T3, US-002-T4 | 1 | GET /api/attendance/team, GET /api/employees, GET /api/leave-requests/queue, api_backend, users | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-003 | EPIC-001 | User account provisioning and deactivation | US-003 | 1 | PATCH /api/users/{id}/deactivate, POST /api/users, api_backend, database, users | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-004 | EPIC-002 | Manage employee profile records | US-004, US-004-T1, US-004-T2, US-004-T3 | 2 | GET /api/employees, PATCH /api/employees/{id}, POST /api/employees, api_backend, database, departments, employees, web_frontend | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-005 | EPIC-002 | Employee self-view and correction of own profile | US-005 | 3 | GET /api/employees/me, PATCH /api/employees/{id}, api_backend, correction_requests, database, employees, web_frontend | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-006 | EPIC-002 | Secure employee document upload | US-006, US-006-T1, US-006-T2, US-006-T3 | 3 | GET /api/employees/{id}/documents/{doc_id}, POST /api/employees/{id}/documents, api_backend, employee_documents, object_storage, web_frontend | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-007 | EPIC-002 | Bulk-import employees via spreadsheet | US-007, US-007-T1, US-007-T2, US-007-T3 | 4 | POST /api/employees/import, api_backend, database, employees, web_frontend | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-008 | EPIC-003 | Configure leave types, balances and accruals | US-008 | 2 | POST /api/leave-types, api_backend, database, leave_balances, leave_types | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-009 | EPIC-003 | Configure Indian holiday calendar and weekends | US-009 | 2 | POST /api/holidays, api_backend, database, holidays, weekend_config | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-010 | EPIC-003 | Apply for leave | US-010 | 4 | POST /api/leave-requests, api_backend, database, leave_balances, leave_requests | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-011 | EPIC-003 | Approve or reject leave with automatic balance update | US-011 | 5 | GET /api/leave-requests/queue, PATCH /api/leave-requests/{id}/decide, api_backend, database, leave_balances, leave_requests | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-012 | EPIC-004 | Web check-in and check-out | US-012 | 3 | POST /api/attendance/check-in, POST /api/attendance/check-out, api_backend, attendance, database, web_frontend | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-013 | EPIC-004 | Employee dashboard showing own attendance | US-013 | 4 | GET /api/attendance/me, api_backend, attendance, web_frontend | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-014 | EPIC-004 | Manager team attendance view | US-014 | 4 | GET /api/attendance/team, api_backend, attendance, employees, web_frontend | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-015 | EPIC-005 | View and export attendance and leave reports | US-015, US-015-T1, US-015-T2, US-015-T3 | 5 | GET /api/reports/{type}, GET /api/reports/{type}/export, api_backend, attendance, database, leave_requests, web_frontend | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-016 | EPIC-005 | Email notifications for leave requests and approvals | US-016 | 5 | PATCH /api/leave-requests/{id}/decide, POST /api/leave-requests, api_backend, email_service, leave_requests | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-017 | EPIC-006 | Privacy notice under DPDP employment legitimate-use | US-017 | 2 | GET /api/privacy-notice, api_backend, privacy_notices, web_frontend | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-018 | EPIC-006 | Data residency in India | US-018 | 1 | database, object_storage | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
<!-- sdlc:auto:end matrix -->
