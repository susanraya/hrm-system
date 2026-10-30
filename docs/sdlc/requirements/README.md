# Product Requirements

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
## Summary

### REQ-STACK-001 · approved · source: requirements:tech-stack

Product owner approved a fixed technology stack: Django 5.1 backend, AWS cloud (Mumbai ap-south-1), PostgreSQL 16 database, React 19 frontend.

Decided stack, to be designed against exactly as specified (no substitution): Backend Django 5.1; Cloud AWS with data hosted in AWS Mumbai region (ap-south-1) to satisfy DPDP residency for employee personal data and ID documents; Database PostgreSQL 16, chosen for relational integrity (leave balances, attendance, approval history), reliable transactions, date/time range handling, and sufficiency for a single 200-employee org, hostable in an India region; Frontend React 19, chosen to serve three role-based audiences (employee, manager, HR/admin) with responsive forms, approval queues, calendars and report tables in one codebase for desktop and mobile browsers (no native app).

**Related:** NFR-006, NFR-010, NFR-011

- ⚠ No architecture phase yet to confirm the stack has actually been designed/implemented as specified.

### REQ-SVC-001 · approved · source: requirements:services

Product owner approved two external services: Amazon S3 for secure document storage and SendGrid for transactional email.

Amazon S3 (saas; env AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, S3_BUCKET) stores employee ID-proof documents durably and privately in the AWS Mumbai region to satisfy DPDP residency. SendGrid (saas; env SENDGRID_API_KEY) delivers leave-request and approval/rejection email notifications via API key. Required API keys: AWS_ACCESS_KEY_ID, AWS_REGION, AWS_SECRET_ACCESS_KEY, S3_BUCKET, SENDGRID_API_KEY.

**Related:** US-006, US-016, NFR-004, NFR-006, NFR-009

### REQ-SCOPE-001 · draft · source: requirements:scope

Delivery scope is lightweight, requirements v1. In-scope capabilities and explicit exclusions are defined.

In scope: employee profile records (job, department, manager, contact, employment dates); attendance check-in/check-out with timestamps; employee self-service view/correction of own profile; secure employee document upload (e.g. ID proofs) in Amazon S3; employee dashboard showing own attendance. Out of scope -- not to be designed or built: payroll processing (salary, payslips, statutory PF/ESI/TDS deductions); recruitment/onboarding workflows and performance management; integration with biometric/door-access devices for attendance; a dedicated native iOS/Android mobile app.

**Related:** EPIC-001, EPIC-002, EPIC-003, EPIC-004, EPIC-005, EPIC-006

### US-001 · draft · source: requirements:US-001

Registered employees, managers and HR/admin log in with email and password and are routed to a role-appropriate dashboard; includes forgot-password flow.

AC-001: valid credentials authenticate and route to role dashboard. AC-002: incorrect password or unknown email is denied with a single generic 'invalid email or password' message, not revealing which field was wrong (NFR-001). AC-003: a forgotten-password request emails a time-limited reset link to set a new password (NFR-002). No SSO is provided (NFR-014).

**Related:** EPIC-001, NFR-001, NFR-002

- ⚠ Exact expiry duration for the password reset link is not specified.

### US-002 · draft · source: requirements:US-002

Role-based access control restricts each of the three roles (employee, manager, HR/admin) to their permitted screens, records and actions.

AC-004: employees are denied access to HR/admin or manager-only screens/endpoints and cannot see other employees' records. AC-005: managers can see/act on direct reports' records only, not employees outside their team. AC-006: HR/admin can view/manage all records, configure policies and run reports.

**Related:** EPIC-001, US-001, NFR-003

- ⚠ Full enumeration of which specific screens/endpoints are manager-only vs HR/admin-only beyond the examples given is not provided.

### US-003 · draft · source: requirements:US-003

HR/admin can create user accounts, assign roles, and deactivate accounts for departed staff while retaining their historical records.

AC-007: HR/admin creates an account and assigns employee/manager/HR-admin role; the user can then authenticate. AC-008: deactivating an account for a departed employee blocks future login but retains historical records (NFR-012).

**Related:** EPIC-001, NFR-012

- ⚠ Process for creating the very first/initial HR/admin account (bootstrapping) is not specified.

### US-004 · draft · source: requirements:US-004

HR/admin create and edit employee records (personal/contact details, job/designation, department, reporting manager, employment dates).

AC-009: a new record with required fields saved appears in the employee directory. AC-010: editing a field (e.g. designation, reporting manager) persists and is visible on the profile. AC-011: saving is blocked and missing mandatory fields (e.g. name, work email, employment start date) are flagged if left blank.

**Related:** EPIC-002

- ⚠ Complete list of all mandatory fields beyond the three examples given is not specified.

### US-005 · draft · source: requirements:US-005

Employees can view their own full profile and correct or request correction of their personal/contact details, supporting their DPDP correction right.

DPDP Act 2023: data-principal correction rights. AC-012: employee can view own personal, contact, job and employment details. AC-013: updating a correctable contact detail (phone/address) applies directly or routes a correction request to HR/admin for review, with confirmation shown. AC-014: an employee attempting to view another employee's full profile is denied (NFR-003).

**Related:** EPIC-002, US-004, NFR-003

- ⚠ Which fields are directly self-editable versus which must be routed to HR/admin for review is not fully distinguished beyond 'phone or address' examples.

### US-006 · draft · source: requirements:US-006

Employees and HR/admin can upload employee documents (e.g. ID proofs) that are stored securely and privately in Amazon S3, linked to the employee record.

AC-015: allowed-type/size uploads are stored in Amazon S3 (India-hosted) and linked to the record. AC-016: unauthorised access to a file is denied; files are not publicly retrievable via guessable URL (NFR-004). AC-017: disallowed type or oversize uploads are rejected with an explanatory message (NFR-005).

**Related:** EPIC-002, NFR-004, NFR-005

- ⚠ Specific allowed file types and maximum file size limit values are not specified.

### US-007 · draft · source: requirements:US-007

HR/admin can bulk-import multiple employees from a spreadsheet matching a provided template.

AC-018: uploading a spreadsheet matching the template validates rows and creates records for valid ones. AC-019: rows with missing/invalid data are reported with reasons for failure, and valid rows are still imported without aborting the whole file.

**Related:** EPIC-002, US-004

- ⚠ The spreadsheet template's exact column layout/format is not specified.

### US-008 · draft · source: requirements:US-008

HR/admin define multiple leave types (e.g. casual, sick, earned) each with an annual balance and accrual rule.

AC-020: creating a leave type with balance/accrual rule makes it available for employees to apply against. AC-021: editing a leave type's balance or accrual rule applies to future accruals without corrupting existing approved-leave history.

**Related:** EPIC-003

- ⚠ Specific accrual rule mechanics (e.g. monthly pro-rata vs lump-sum annual) are not detailed.

### US-009 · draft · source: requirements:US-009

HR/admin configure Indian public holidays and weekend days so leave/working-day calculations exclude non-working days.

AC-022: added holidays and configured weekend days are treated as non-working days across leave calculations. AC-023: holidays/weekends within a requested leave range are not deducted from balance.

**Related:** EPIC-003, US-008

### US-010 · draft · source: requirements:US-010

Employees submit leave requests (type, date range, reason), created as pending and routed to their reporting manager, with balance and overlap checks.

AC-024: a request within available balance is created as 'pending' and routed to the reporting manager. AC-025: a request exceeding available balance is blocked and the available balance is shown. AC-026: an overlapping request is blocked with a warning.

**Related:** EPIC-003, US-008, US-009

### US-011 · draft · source: requirements:US-011

Managers approve or reject pending leave requests from their direct reports; approval automatically adjusts the employee's balance.

AC-027: approving a pending request sets status to 'approved' and automatically deducts the leave days from the employee's balance. AC-028: rejecting with a reason sets status to 'rejected', deducts nothing, and the reason is visible to the employee. AC-029: the manager's approvals queue shows only pending requests from direct reports.

**Related:** EPIC-003, US-010

### US-012 · draft · source: requirements:US-012

Employees check in and check out through the web app, recording timestamps and computed worked duration, with no geolocation or biometric capture.

AC-030: check-in records current timestamp with no geolocation/biometric data (NFR-008). AC-031: check-out records a timestamp and computes worked duration for the session. AC-032: a repeat check-out without a new check-in is blocked with an explanatory message.

**Related:** EPIC-004, NFR-008

### US-013 · draft · source: requirements:US-013

Employees see their own attendance history (check-in/out timestamps, worked durations) on their dashboard.

AC-033: dashboard shows the employee's own check-in/out timestamps and worked durations for recent days. AC-034: only the signed-in employee's own records are shown, not other employees' (NFR-003).

**Related:** EPIC-004, US-012, NFR-003

### US-014 · draft · source: requirements:US-014

Managers view attendance records for their direct reports over a selected date range.

AC-035: manager's team attendance view shows direct reports' records for a selected date range. AC-036: manager cannot see attendance for employees outside their team (NFR-003).

**Related:** EPIC-004, US-012, NFR-003

### US-015 · draft · source: requirements:US-015

HR/admin view attendance and leave reports with date range/filters and export them as CSV or Excel.

AC-037: selecting a report with date range and optional filters (department/employee) displays the matching report. AC-038: exporting produces a CSV or Excel file matching the on-screen data. AC-039: filters matching no records show an empty-result message rather than an error.

**Related:** EPIC-005

- ⚠ Exact CSV/Excel column layout for exported reports is not specified.

### US-016 · draft · source: requirements:US-016

Managers and employees receive email notifications when a leave request is submitted or decided.

AC-040: a submitted leave request emails the reporting manager. AC-041: an approval/rejection decision emails the requesting employee. AC-042: if credentials are missing/invalid and sending fails, the leave workflow still completes and the failure is logged for HR/admin review (NFR-009).

**Related:** EPIC-005, US-010, US-011, NFR-009

### US-017 · draft · source: requirements:US-017

Employees can view a privacy notice explaining DPDP employment legitimate-use processing and their data rights; the current version is always available.

DPDP Act 2023: notice & consent under the employment legitimate-use basis. AC-043: employee can view a notice describing what personal data is processed, the employment legitimate-use basis, and rights to view/correct data. AC-044: when the notice is updated, the current version is available on next access.

**Related:** EPIC-006, NFR-007

- ⚠ DPDP data-principal rights beyond view/correct (e.g. erasure, grievance redressal, consent withdrawal) are not addressed by this story -- confirm if in scope.

### US-018 · draft · source: requirements:US-018

All employee personal data and uploaded documents, including the database and Amazon S3, are hosted in an India region and not transferred outside India.

DPDP Act 2023: data residency / cross-border transfer restriction. AC-045: data persisted (including in S3) is stored in an India region, not transferred outside India. AC-046: administrators can inspect and confirm the database and document storage region reside in India.

**Related:** EPIC-006, NFR-006

- ⚠ Breach notification obligations (DPDP Act notification to the Data Protection Board and affected people; CERT-In 6-hour incident reporting and 180-day ICT log retention) are not addressed by any requirement -- confirm whether in scope.

### NFR-001 · draft · source: requirements:NFR-001

Login failures must show a single generic 'invalid email or password' message without revealing which field was wrong.

Security NFR applying to US-001 login flow.

**Related:** US-001

### NFR-002 · draft · source: requirements:NFR-002

Password reset links must be time-limited; an expired link cannot be used.

Security NFR applying to US-001 password reset flow.

**Related:** US-001

- ⚠ Specific expiry duration not defined.

### NFR-003 · draft · source: requirements:NFR-003

Personal data (profile, attendance) is visible only to its owner and their manager, never to unrelated users.

Privacy NFR constraining profile and attendance visibility across US-005, US-013, US-014.

**Related:** US-005, US-013, US-014

### NFR-004 · draft · source: requirements:NFR-004

Uploaded documents must be stored privately in S3, inaccessible to unauthorised users and not retrievable via guessable URL.

Security NFR applying to US-006 document upload/storage.

**Related:** US-006

### NFR-005 · draft · source: requirements:NFR-005

Document uploads are restricted to allowed file types and a maximum size, with rejection messages otherwise.

Security NFR applying to US-006; concrete type/size limits not yet defined.

**Related:** US-006

- ⚠ Allowed file types and max size values not specified.

### NFR-006 · draft · source: requirements:NFR-006

All employee data and documents (database and S3) must be hosted in an India region (AWS Mumbai ap-south-1) and not transferred outside India.

DPDP Act 2023: data residency. Compliance NFR; target is explicit: database and document storage in ap-south-1.

**Related:** US-018

- ⚠ No deployment record yet to confirm the region is actually configured as ap-south-1 in practice.

### NFR-007 · draft · source: requirements:NFR-007

Employee data is processed under the DPDP employment legitimate-use basis, with a privacy notice always accessible.

DPDP Act 2023: notice & legitimate-use basis. Compliance NFR applying to US-017.

**Related:** US-017

### NFR-008 · draft · source: requirements:NFR-008

Attendance check-in/out must record only timestamps -- no geolocation or biometric data.

Privacy NFR applying to US-012.

**Related:** US-012

### NFR-009 · draft · source: requirements:NFR-009

The leave workflow must complete even if an email notification fails to send; the failure is logged for HR/admin review.

Availability NFR applying to US-016.

**Related:** US-016

### NFR-010 · draft · source: requirements:NFR-010

System must support a single organisation of up to roughly 200 employees.

Scalability NFR applying to the whole system; target ~200 employees.

### NFR-011 · draft · source: requirements:NFR-011

Delivered as a responsive web app working on desktop and mobile browsers; no native mobile app.

Compatibility NFR applying to the whole system.

### NFR-012 · draft · source: requirements:NFR-012

Historical employee, attendance and leave records are retained after a user account is deactivated, not deleted.

Maintainability NFR applying to US-003.

**Related:** US-003

### NFR-013 · draft · source: requirements:NFR-013

Accepted risk: no consent-manager or children's-data flows are provided; all data principals are treated as adult employees.

Deliberate scope exclusion applying to the whole system, accepted given the assumption that no children's data is processed.

### NFR-014 · draft · source: requirements:NFR-014

Accepted risk: no single sign-on or external system integrations at launch; email/password auth only.

Deliberate scope exclusion applying to the whole system.

**Related:** US-001
<!-- sdlc:auto:end narrative -->

<!-- sdlc:auto:start summary -->
**Requirements version:** v1  
**Delivery scope:** lightweight  
**Approved:** 2026-10-30

**Capabilities in scope:** Employee profile records (job, department, manager, contact, employment dates), Attendance check-in/check-out with timestamps, Employee self-service view and correction of own profile, Secure employee document upload (e.g. ID proofs), Employee dashboard showing own attendance, Amazon S3 for secure employee document storage

**Approved technology stack:**

| Layer | Choice | Rationale |
|---|---|---|
| backend | Django | — |
| cloud | AWS | Your data must be hosted in India under the DPDP Act, and AWS has a Mumbai region (ap-south-1) where the database and document storage can all live, keeping employee personal data and ID documents on Indian soil. It also provides the file storage, managed database and email building blocks this product needs in one place, which keeps a small internal system simple to run. |
| database | PostgreSQL | Employee records, leave balances, attendance timestamps and approval history are all structured, related data that must stay accurate — a leave balance can't drift. PostgreSQL enforces those relationships and does the reliable transactions this needs, handles date/time ranges for attendance and calendars well, and is more than sufficient for a single 200-employee organisation. It can be hosted in an India region to satisfy your DPDP residency requirement. |
| frontend | React | Your HRMS is a responsive web app used on both desktop and mobile browsers by three distinct audiences — employees self-serving, managers approving, and HR configuring policies and running reports. React handles these role-specific screens (forms, approval queues, calendars, report tables) in one codebase that adapts to screen size, so you meet the 'works on desktop and mobile browser, no native app' requirement without building two things. |
<!-- sdlc:auto:end summary -->

<!-- sdlc:auto:start epics -->
## EPIC-001: Authentication & Role-Based Access

Email/password authentication and role-based access control for three roles — employee, manager and HR/admin. This is an internal tool for a single organisation; no SSO and no native mobile app. Assumption: the three roles and their responsibilities (employee self-service; manager approvals and team views; HR/admin manage all records, configure policies, run reports) are as described in the confirmed understanding.

### US-001: Email/password login

**Priority:** critical

> As a registered user (employee, manager or HR/admin), I want to log in with my email address and password, so that I can securely access the HRMS.

| ID | Given | When | Then |
|---|---|---|---|
| AC-001 | I am a registered user with valid credentials | I submit my email and correct password on the login page | I am authenticated and taken to my role-appropriate dashboard |
| AC-002 | I am on the login page | I submit an incorrect password or an unknown email | I am denied access and shown a generic 'invalid email or password' message without revealing which field was wrong |
| AC-003 | I have forgotten my password | I request a password reset for my registered email | the system emails me a time-limited reset link that lets me set a new password |

### US-002: Role-based access control

**Priority:** critical

> As a HR/admin, I want each user's access to be restricted to the actions allowed for their role, so that employees, managers and HR/admin only see and do what they are permitted to.

| ID | Given | When | Then |
|---|---|---|---|
| AC-004 | I am signed in as an employee | I attempt to open an HR/admin or manager-only screen or API endpoint | access is denied and I am not shown other employees' records or configuration screens |
| AC-005 | I am signed in as a manager | I view team data | I can see and act on records for my direct reports but not for employees outside my team |
| AC-006 | I am signed in as HR/admin | I access the system | I can view and manage all employee records, configure policies and run reports |

### US-003: User account provisioning and deactivation

**Priority:** high

> As a HR/admin, I want to create, assign roles to, and deactivate user accounts, so that only current staff with the right role can access the system.

| ID | Given | When | Then |
|---|---|---|---|
| AC-007 | I am HR/admin on the user management screen | I create an account for an employee and assign a role of employee, manager or HR/admin | the account is created and the user can authenticate with their credentials |
| AC-008 | an employee has left the organisation | I deactivate their account | that user can no longer log in but their historical records are retained |

## EPIC-002: Core HR — Employee Records

Employee profile records holding personal and contact details, job/designation, department, reporting manager and employment dates, with secure document upload stored in Amazon S3 and HR spreadsheet bulk-import. Employees can self-view and correct their own data. Assumption: records hold the listed fields and documents (e.g. ID proofs) are stored securely in Amazon S3.

### US-004: Manage employee profile records

**Priority:** critical

> As a HR/admin, I want to create and edit employee records with personal/contact details, job/designation, department, reporting manager and employment dates, so that the organisation has an accurate central record of every employee.

| ID | Given | When | Then |
|---|---|---|---|
| AC-009 | I am HR/admin creating a new employee record | I enter personal details, contact info, designation, department, reporting manager and employment start date and save | the record is stored and appears in the employee directory |
| AC-010 | an employee record exists | I edit a field such as designation or reporting manager and save | the updated value is persisted and visible on the profile |
| AC-011 | I am creating a record | I leave a mandatory field (such as name, work email or employment start date) blank | the system blocks the save and shows which fields are required |

### US-005: Employee self-view and correction of own profile

**Priority:** high

> As a employee, I want to view my own profile and request or make corrections to my personal and contact details, so that my data is accurate and I can exercise my DPDP correction right.

| ID | Given | When | Then |
|---|---|---|---|
| AC-012 | I am a signed-in employee | I open my profile | I can view my personal, contact, job and employment details held about me |
| AC-013 | I am viewing my own profile | I update a correctable contact detail (such as phone or address) or submit a correction request | the change is applied or routed to HR/admin for review, and I receive confirmation |
| AC-014 | I am a signed-in employee | I attempt to view another employee's full profile | access is denied |

### US-006: Secure employee document upload

**Priority:** high

> As a employee or HR/admin, I want to upload employee documents such as ID proofs and store them securely, so that required documents are retained against the employee record.

| ID | Given | When | Then |
|---|---|---|---|
| AC-015 | I am on an employee profile with upload permission | I upload a document of an allowed type and size | the file is stored securely in Amazon S3 (hosted in India) and linked to the employee record |
| AC-016 | a document has been uploaded | an unauthorised user attempts to access the file | access is denied and files are not publicly retrievable via a guessable URL |
| AC-017 | I attempt to upload a file of a disallowed type or that exceeds the size limit | I submit the upload | the upload is rejected with an explanatory message |

### US-007: Bulk-import employees via spreadsheet

**Priority:** high

> As a HR/admin, I want to import multiple employees at once from a spreadsheet, so that I can populate the system quickly without entering each record by hand.

| ID | Given | When | Then |
|---|---|---|---|
| AC-018 | I am HR/admin on the import screen | I upload a spreadsheet matching the provided template | the system validates the rows and creates employee records for the valid ones |
| AC-019 | my uploaded spreadsheet contains rows with missing or invalid data | the import runs | the system reports which rows failed and why, and imports the valid rows without aborting the whole file |

## EPIC-003: Leave Management

HR-configurable leave types with balances/accruals, a configurable Indian holiday calendar and weekends, and an apply/approve/reject workflow with automatic balance updates. Assumption: multiple leave types (e.g. casual, sick, earned/privilege) with annual balances/accruals, configurable holiday calendar and weekends, as described.

### US-008: Configure leave types, balances and accruals

**Priority:** critical

> As a HR/admin, I want to define multiple leave types with annual balances and accrual rules, so that leave policy reflects the organisation's rules.

| ID | Given | When | Then |
|---|---|---|---|
| AC-020 | I am HR/admin on the leave configuration screen | I create a leave type (e.g. casual, sick, earned) with an annual balance and accrual rule | the leave type becomes available for employees to apply against with the configured balance |
| AC-021 | a leave type exists | I edit its balance or accrual rule | the change applies to future accruals without corrupting existing approved-leave history |

### US-009: Configure Indian holiday calendar and weekends

**Priority:** high

> As a HR/admin, I want to configure public holidays and which days count as weekends, so that leave and working-day calculations exclude non-working days.

| ID | Given | When | Then |
|---|---|---|---|
| AC-022 | I am HR/admin configuring the calendar | I add Indian public holidays and set the weekend days | those dates are treated as non-working days across leave calculations |
| AC-023 | a holiday or weekend falls within a requested leave date range | an employee applies for leave spanning those dates | the system does not deduct leave balance for the holiday/weekend days |

### US-010: Apply for leave

**Priority:** critical

> As a employee, I want to apply for leave of a chosen type and date range, so that I can request time off and have it tracked.

| ID | Given | When | Then |
|---|---|---|---|
| AC-024 | I am a signed-in employee with available balance | I submit a leave request with type, start and end dates and a reason | the request is created with status 'pending' and routed to my reporting manager |
| AC-025 | I request more days than my available balance for that leave type | I submit the request | the system prevents submission and tells me the available balance |
| AC-026 | I have submitted a leave request | I submit another request overlapping the same dates | the system warns me of the overlap and blocks the duplicate |

### US-011: Approve or reject leave with automatic balance update

**Priority:** critical

> As a manager, I want to approve or reject my team members' leave requests, so that leave is authorised and balances stay accurate.

| ID | Given | When | Then |
|---|---|---|---|
| AC-027 | a direct report has a pending leave request | I approve it | the request status becomes 'approved' and the employee's balance for that leave type is automatically reduced by the leave days taken |
| AC-028 | a direct report has a pending leave request | I reject it with a reason | the request status becomes 'rejected', no balance is deducted, and the employee can see the reason |
| AC-029 | I am a manager | I view the leave approvals queue | I see only pending requests from my direct reports |

## EPIC-004: Attendance

Web-based check-in/check-out recording timestamps, with an employee dashboard showing their own attendance. No geolocation capture and no biometric/door-device integration at launch.

### US-012: Web check-in and check-out

**Priority:** critical

> As a employee, I want to check in and check out through the web app, so that my working-time attendance is recorded with timestamps.

| ID | Given | When | Then |
|---|---|---|---|
| AC-030 | I am a signed-in employee who has not checked in today | I select check-in | the system records a check-in with the current timestamp and no geolocation or biometric data |
| AC-031 | I have an open check-in for today | I select check-out | the system records a check-out timestamp and computes the worked duration for the session |
| AC-032 | I have already checked out for the current session | I attempt to check out again without a new check-in | the action is blocked with an explanatory message |

### US-013: Employee dashboard showing own attendance

**Priority:** high

> As a employee, I want to see my own attendance history on my dashboard, so that I can review my check-in/out records.

| ID | Given | When | Then |
|---|---|---|---|
| AC-033 | I am a signed-in employee with recorded attendance | I open my dashboard | I see my check-in/out timestamps and worked durations for recent days |
| AC-034 | I am a signed-in employee | I view the dashboard | I see only my own attendance records and not those of other employees |

### US-014: Manager team attendance view

**Priority:** medium

> As a manager, I want to view my team's attendance, so that I can monitor my direct reports' attendance.

| ID | Given | When | Then |
|---|---|---|---|
| AC-035 | I am a signed-in manager | I open the team attendance view | I see attendance records for my direct reports for a selected date range |
| AC-036 | I am a manager | I view team attendance | I cannot see attendance for employees outside my team |

## EPIC-005: Reporting & Email Notifications

HR/admin can view and export attendance and leave reports as CSV/Excel, and the system sends email notifications for leave requests and approvals. Assumption: email delivery uses a transactional email provider requiring an API key/SMTP credentials to be configured.

### US-015: View and export attendance and leave reports

**Priority:** high

> As a HR/admin, I want to view attendance and leave reports and export them as CSV/Excel, so that I can analyse and share the data outside the system.

| ID | Given | When | Then |
|---|---|---|---|
| AC-037 | I am HR/admin on the reports screen | I select an attendance or leave report with a date range and optional filters (e.g. department or employee) | the matching report is displayed on screen |
| AC-038 | a report is displayed | I choose to export it | the system produces a CSV or Excel file containing the same data as the on-screen report |
| AC-039 | the selected filters match no records | I run the report | the system shows an empty-result message rather than an error |

### US-016: Email notifications for leave requests and approvals

**Priority:** high

> As a manager or employee, I want to receive email notifications when a leave request is submitted or decided, so that I am informed without having to check the app.

| ID | Given | When | Then |
|---|---|---|---|
| AC-040 | the transactional email provider is configured with a valid API key/SMTP credentials | an employee submits a leave request | the reporting manager receives an email notification of the pending request |
| AC-041 | a manager approves or rejects a leave request | the decision is saved | the requesting employee receives an email notification of the outcome |
| AC-042 | the email provider credentials are missing or invalid | a notification fails to send | the leave workflow still completes and the failure is logged for HR/admin to review |

## EPIC-006: Data Protection & Privacy (DPDP Act 2023)

Employee personal data is processed under the DPDP Act 2023 'employment' legitimate-use basis, with a privacy notice shown and employees able to view/correct their own data. Data and documents are hosted in India. Assumption: all data principals are adult employees — no children's data or consent-manager flows are required.

### US-017: Privacy notice under DPDP employment legitimate-use

**Priority:** high

> As a employee, I want to be shown a privacy notice explaining how my personal data is processed, so that the organisation meets its DPDP Act 2023 obligations under the employment legitimate-use basis.

| ID | Given | When | Then |
|---|---|---|---|
| AC-043 | I am an employee | I access the system | I can view a privacy notice describing what personal data is processed, the employment legitimate-use basis, and my rights to view and correct my data |
| AC-044 | the privacy notice is updated | I next access the system | the current version of the notice is available to me |

### US-018: Data residency in India

**Priority:** high

> As a HR/admin, I want all employee personal data and uploaded documents to be hosted in India, so that the deployment aligns with the DPDP data-residency expectation.

| ID | Given | When | Then |
|---|---|---|---|
| AC-045 | the system stores employee records and documents | data is persisted (including in Amazon S3) | it is stored in an India region and not transferred outside India |
| AC-046 | an administrator reviews the hosting configuration | they inspect the database and document storage region | both are confirmed to reside in India |
<!-- sdlc:auto:end epics -->
