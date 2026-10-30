// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Input, Label, Select, Checkbox, Table, THead, TBody, TR, TH, TD, Avatar, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Check, Home, Calendar, Edit, ArrowLeft, ArrowRight } = Icons;

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const WEEKEND_OPTIONS = [
  { dow: 1, label: 'Monday' },
  { dow: 2, label: 'Tuesday' },
  { dow: 3, label: 'Wednesday' },
  { dow: 4, label: 'Thursday' },
  { dow: 5, label: 'Friday' },
  { dow: 6, label: 'Saturday' },
  { dow: 0, label: 'Sunday' },
];

const TABS = [
  { key: 'leave-types', label: 'Leave types', wf: 'i-1-0-0' },
  { key: 'calendar', label: 'Holidays & weekends', wf: 'i-1-0-1' },
  { key: 'reports', label: 'Reports', wf: 'i-1-0-2' },
];

const DEPARTMENTS = ['Engineering', 'Design', 'Finance', 'Sales', 'Customer Success', 'People Ops'];

const INITIAL_LEAVE_TYPES = [
  { id: 'lt-01', name: 'Casual leave', annual_balance: 12, accrual_rule: '1 day credited per month · carry-forward max 5 days', is_active: true },
  { id: 'lt-02', name: 'Sick leave', annual_balance: 10, accrual_rule: 'Credited in full on 01 January · no carry-forward', is_active: true },
  { id: 'lt-03', name: 'Earned / privilege leave', annual_balance: 21, accrual_rule: '1.75 days per month · carry-forward up to 45 days', is_active: true },
  { id: 'lt-04', name: 'Maternity leave', annual_balance: 182, accrual_rule: 'Statutory grant per confinement · no monthly accrual', is_active: true },
  { id: 'lt-05', name: 'Bereavement leave', annual_balance: 5, accrual_rule: 'Granted per event · no accrual, no carry-forward', is_active: true },
  { id: 'lt-06', name: 'Loss of pay', annual_balance: 0, accrual_rule: 'Unpaid · days reported to payroll, no balance held', is_active: true },
  { id: 'lt-07', name: 'Sabbatical (2025 pilot)', annual_balance: 30, accrual_rule: 'Pilot closed 31 Mar 2025 · no new accrual', is_active: false },
];

const INITIAL_HOLIDAYS = [
  { id: 'h-01', holiday_date: '2026-01-14', name: 'Makar Sankranti / Pongal' },
  { id: 'h-02', holiday_date: '2026-01-26', name: 'Republic Day' },
  { id: 'h-03', holiday_date: '2026-03-04', name: 'Holi' },
  { id: 'h-04', holiday_date: '2026-03-26', name: 'Ram Navami' },
  { id: 'h-05', holiday_date: '2026-04-03', name: 'Good Friday' },
  { id: 'h-06', holiday_date: '2026-05-01', name: 'Maharashtra Day' },
  { id: 'h-07', holiday_date: '2026-08-15', name: 'Independence Day' },
  { id: 'h-08', holiday_date: '2026-09-04', name: 'Krishna Janmashtami' },
  { id: 'h-09', holiday_date: '2026-10-02', name: 'Gandhi Jayanti' },
  { id: 'h-10', holiday_date: '2026-10-20', name: 'Dussehra (Vijayadashami)' },
  { id: 'h-11', holiday_date: '2026-11-08', name: 'Deepavali' },
  { id: 'h-12', holiday_date: '2026-12-25', name: 'Christmas Day' },
];

const ATTENDANCE_ROWS = [
  { id: 'at-01', employee: 'Kabir Khanna', department: 'Customer Success', work_date: '2026-10-30', check_in: '08:47', check_out: null, worked_minutes: null },
  { id: 'at-02', employee: 'Meera Pillai', department: 'Finance', work_date: '2026-10-30', check_in: '09:08', check_out: '13:02', worked_minutes: 234 },
  { id: 'at-03', employee: 'Sneha Iyer', department: 'Engineering', work_date: '2026-10-29', check_in: '08:54', check_out: '17:30', worked_minutes: 516 },
  { id: 'at-04', employee: 'Vikram Shetty', department: 'Sales', work_date: '2026-10-29', check_in: '09:40', check_out: '16:10', worked_minutes: 390 },
  { id: 'at-05', employee: 'Ananya Rao', department: 'Design', work_date: '2026-10-29', check_in: '09:25', check_out: '18:35', worked_minutes: 550 },
  { id: 'at-06', employee: 'Aarav Mehta', department: 'Engineering', work_date: '2026-10-28', check_in: '09:12', check_out: '18:04', worked_minutes: 532 },
  { id: 'at-07', employee: 'Priya Nair', department: 'People Ops', work_date: '2026-10-28', check_in: '09:02', check_out: '17:46', worked_minutes: 524 },
  { id: 'at-08', employee: 'Rohan Deshpande', department: 'Finance', work_date: '2026-10-28', check_in: '10:05', check_out: '19:20', worked_minutes: 555 },
  { id: 'at-09', employee: 'Devansh Gupta', department: 'Engineering', work_date: '2026-10-27', check_in: '09:33', check_out: '18:51', worked_minutes: 558 },
  { id: 'at-10', employee: 'Farah Siddiqui', department: 'People Ops', work_date: '2026-10-27', check_in: '09:05', check_out: '17:55', worked_minutes: 530 },
  { id: 'at-11', employee: 'Aarav Mehta', department: 'Engineering', work_date: '2026-10-26', check_in: '09:18', check_out: '17:02', worked_minutes: 464 },
  { id: 'at-12', employee: 'Ananya Rao', department: 'Design', work_date: '2026-10-23', check_in: '09:47', check_out: '18:12', worked_minutes: 505 },
  { id: 'at-13', employee: 'Vikram Shetty', department: 'Sales', work_date: '2026-10-22', check_in: '09:55', check_out: '18:40', worked_minutes: 525 },
  { id: 'at-14', employee: 'Sneha Iyer', department: 'Engineering', work_date: '2026-10-21', check_in: '08:58', check_out: '18:20', worked_minutes: 562 },
  { id: 'at-15', employee: 'Rohan Deshpande', department: 'Finance', work_date: '2026-10-16', check_in: '09:14', check_out: '17:58', worked_minutes: 524 },
  { id: 'at-16', employee: 'Kabir Khanna', department: 'Customer Success', work_date: '2026-10-09', check_in: '09:30', check_out: '18:05', worked_minutes: 515 },
  { id: 'at-17', employee: 'Meera Pillai', department: 'Finance', work_date: '2026-10-05', check_in: '09:02', check_out: '18:00', worked_minutes: 538 },
  { id: 'at-18', employee: 'Devansh Gupta', department: 'Engineering', work_date: '2026-09-30', check_in: '09:21', check_out: '18:03', worked_minutes: 522 },
];

const LEAVE_ROWS = [
  { id: 'lr-01', employee: 'Aarav Mehta', department: 'Engineering', leave_type: 'Casual leave', start_date: '2026-10-30', end_date: '2026-10-30', days_deducted: 1, status: 'Pending' },
  { id: 'lr-02', employee: 'Priya Nair', department: 'People Ops', leave_type: 'Sick leave', start_date: '2026-10-27', end_date: '2026-10-27', days_deducted: 1, status: 'Approved' },
  { id: 'lr-03', employee: 'Kabir Khanna', department: 'Customer Success', leave_type: 'Casual leave', start_date: '2026-10-23', end_date: '2026-10-23', days_deducted: 0, status: 'Rejected' },
  { id: 'lr-04', employee: 'Meera Pillai', department: 'Finance', leave_type: 'Earned / privilege leave', start_date: '2026-10-19', end_date: '2026-10-21', days_deducted: 3, status: 'Pending' },
  { id: 'lr-05', employee: 'Rohan Deshpande', department: 'Finance', leave_type: 'Loss of pay', start_date: '2026-10-15', end_date: '2026-10-15', days_deducted: 1, status: 'Approved' },
  { id: 'lr-06', employee: 'Sneha Iyer', department: 'Engineering', leave_type: 'Earned / privilege leave', start_date: '2026-10-12', end_date: '2026-10-16', days_deducted: 5, status: 'Approved' },
  { id: 'lr-07', employee: 'Devansh Gupta', department: 'Engineering', leave_type: 'Bereavement leave', start_date: '2026-10-08', end_date: '2026-10-10', days_deducted: 2, status: 'Approved' },
  { id: 'lr-08', employee: 'Vikram Shetty', department: 'Sales', leave_type: 'Sick leave', start_date: '2026-10-05', end_date: '2026-10-06', days_deducted: 2, status: 'Approved' },
  { id: 'lr-09', employee: 'Farah Siddiqui', department: 'People Ops', leave_type: 'Earned / privilege leave', start_date: '2026-09-28', end_date: '2026-10-02', days_deducted: 3, status: 'Approved' },
  { id: 'lr-10', employee: 'Ananya Rao', department: 'Design', leave_type: 'Casual leave', start_date: '2026-11-02', end_date: '2026-11-03', days_deducted: 2, status: 'Pending' },
];

const EMPLOYEE_NAMES = ['Aarav Mehta', 'Ananya Rao', 'Devansh Gupta', 'Farah Siddiqui', 'Kabir Khanna', 'Meera Pillai', 'Priya Nair', 'Rohan Deshpande', 'Sneha Iyer', 'Vikram Shetty'];

const fmtDate = (iso) => {
  const [y, m, d] = iso.split('-');
  return `${d} ${MONTHS[Number(m) - 1]} ${y}`;
};

const weekdayOf = (iso) => {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d)).getUTCDay();
};

const fmtHours = (min) => `${Math.floor(min / 60)}h ${String(min % 60).padStart(2, '0')}m`;

const rangeLabel = (from, to) => {
  if (!from || !to) return '—';
  const [fy, fm, fd] = from.split('-');
  const [ty, tm, td] = to.split('-');
  if (fy === ty && fm === tm) return `${fd}–${td} ${MONTHS[Number(fm) - 1]} ${fy}`;
  return `${fmtDate(from)} – ${fmtDate(to)}`;
};

export default function Screen() {
  const navigate = useNavigate();
  const c = {
    bg: brand.backgroundColor,
    surface: `color-mix(in srgb, ${brand.primaryColor} 4%, ${brand.backgroundColor})`,
    raised: `color-mix(in srgb, ${brand.primaryColor} 7%, ${brand.backgroundColor})`,
    line: `color-mix(in srgb, ${brand.primaryColor} 13%, transparent)`,
    lineSoft: `color-mix(in srgb, ${brand.primaryColor} 8%, transparent)`,
    text: brand.primaryColor,
    muted: brand.neutralColor,
    accent: brand.accentColor,
    accentTint: `color-mix(in srgb, ${brand.accentColor} 16%, ${brand.backgroundColor})`,
  };

  const [tab, setTab] = React.useState('leave-types');
  const tabRefs = React.useRef([]);

  // --- Leave types -------------------------------------------------------
  const [leaveTypes, setLeaveTypes] = React.useState(INITIAL_LEAVE_TYPES);
  const [ltNotice, setLtNotice] = React.useState(null);
  const [newLtId, setNewLtId] = React.useState(null);
  const [editingId, setEditingId] = React.useState(null);
  const [pendingId, setPendingId] = React.useState(null);
  const [editDraft, setEditDraft] = React.useState({ name: '', annual_balance: '', accrual_rule: '' });

  // --- Calendar ----------------------------------------------------------
  const [holidays, setHolidays] = React.useState(INITIAL_HOLIDAYS);
  const [weekend, setWeekend] = React.useState([6, 0]);
  const [holidayDraft, setHolidayDraft] = React.useState({ holiday_date: '', name: '' });
  const [calErrors, setCalErrors] = React.useState({});
  const [calNotice, setCalNotice] = React.useState(null);
  const [newHolidayId, setNewHolidayId] = React.useState(null);

  // --- Reports -----------------------------------------------------------
  const defaultFilters = { report: 'Attendance', from: '2026-10-01', to: '2026-10-30', department: 'All', employee: 'All' };
  const [filters, setFilters] = React.useState(defaultFilters);
  const [applied, setApplied] = React.useState(defaultFilters);
  const [running, setRunning] = React.useState(false);
  const [reportError, setReportError] = React.useState(null);
  const [exportNotice, setExportNotice] = React.useState(null);
  const timerRef = React.useRef(null);

  React.useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  const computeRows = (f) => {
    const base = f.report === 'Attendance' ? ATTENDANCE_ROWS : LEAVE_ROWS;
    return base.filter((r) => {
      if (f.department !== 'All' && r.department !== f.department) return false;
      if (f.employee !== 'All' && r.employee !== f.employee) return false;
      if (f.report === 'Attendance') return r.work_date >= f.from && r.work_date <= f.to;
      return r.start_date <= f.to && r.end_date >= f.from;
    });
  };

  const rows = React.useMemo(() => computeRows(applied), [applied]);

  const totalMinutes = rows.reduce((s, r) => s + (r.worked_minutes || 0), 0);
  const totalDays = rows.reduce((s, r) => s + (r.days_deducted || 0), 0);

  const runReport = (e) => {
    if (e) e.preventDefault();
    if (filters.from > filters.to) {
      setReportError('The “from” date is after the “to” date. Flip the two dates and run the report again — your other filters are kept.');
      return;
    }
    setReportError(null);
    setExportNotice(null);
    setRunning(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setApplied(filters);
      setRunning(false);
    }, 620);
  };

  const exportReport = () => {
    const slug = applied.report.toLowerCase();
    setExportNotice(`${slug}-report-${applied.from}-to-${applied.to}.csv · ${rows.length} rows · ready in Downloads (also available as .xlsx)`);
  };

  const resetFilters = () => {
    setFilters(defaultFilters);
    setApplied(defaultFilters);
    setReportError(null);
    setExportNotice(null);
  };

  // --- handlers ----------------------------------------------------------
  const onTabKeyDown = (e) => {
    const i = TABS.findIndex((t) => t.key === tab);
    let n = null;
    if (e.key === 'ArrowRight') n = (i + 1) % TABS.length;
    if (e.key === 'ArrowLeft') n = (i - 1 + TABS.length) % TABS.length;
    if (e.key === 'Home') n = 0;
    if (e.key === 'End') n = TABS.length - 1;
    if (n !== null) {
      e.preventDefault();
      setTab(TABS[n].key);
      const el = tabRefs.current[n];
      if (el) el.focus();
    }
  };

  const addLeaveType = () => {
    if (pendingId) {
      setEditingId(pendingId);
      return;
    }
    const id = `lt-${Date.now()}`;
    setLeaveTypes((prev) => [{ id, name: '', annual_balance: 0, accrual_rule: '', is_active: true }, ...prev]);
    setEditDraft({ name: '', annual_balance: '', accrual_rule: '' });
    setPendingId(id);
    setEditingId(id);
    setNewLtId(id);
    setLtNotice(null);
  };

  const startEdit = (lt) => {
    setEditingId(lt.id);
    setEditDraft({ name: lt.name, annual_balance: String(lt.annual_balance), accrual_rule: lt.accrual_rule });
    setLtNotice(null);
  };

  const cancelEdit = (lt) => {
    if (lt.id === pendingId) {
      setLeaveTypes((prev) => prev.filter((x) => x.id !== lt.id));
      setPendingId(null);
    }
    setEditingId(null);
  };

  const saveEdit = (lt) => {
    const name = editDraft.name.trim();
    const bal = Number(editDraft.annual_balance);
    if (!name) {
      setLtNotice('Give the leave type a name employees will recognise before saving. Nothing was saved.');
      return;
    }
    if (editDraft.annual_balance === '' || Number.isNaN(bal) || bal < 0) {
      setLtNotice(`Annual balance for ${name} must be a number of days (0 or more). Nothing was saved.`);
      return;
    }
    const isNew = lt.id === pendingId;
    setLeaveTypes((prev) => prev.map((x) => (x.id === lt.id
      ? { ...x, name, annual_balance: bal, accrual_rule: editDraft.accrual_rule.trim() || 'No accrual rule set · balance credited manually' }
      : x)));
    setEditingId(null);
    setPendingId(null);
    setLtNotice(isNew
      ? `${name} added with ${bal} days. Employees can apply against it from today.`
      : `${name} updated. The new rule applies from the next accrual run on 01 Nov 2026; approved leave history is unchanged.`);
  };

  const toggleActive = (lt) => {
    setLeaveTypes((prev) => prev.map((x) => (x.id === lt.id ? { ...x, is_active: !x.is_active } : x)));
    setLtNotice(lt.is_active
      ? `${lt.name} is now inactive. Employees can no longer apply against it; existing approved leave stays on record.`
      : `${lt.name} is active again and available to apply against.`);
  };

  const toggleWeekendDay = (dow) => {
    setWeekend((prev) => (prev.includes(dow) ? prev.filter((d) => d !== dow) : [...prev, dow]));
    setCalNotice(null);
  };

  const saveCalendar = (e) => {
    e.preventDefault();
    const errs = {};
    const hasDate = !!holidayDraft.holiday_date;
    const hasName = !!holidayDraft.name.trim();
    if (hasDate !== hasName) {
      if (!hasDate) errs.holiday_date = 'Pick the date this holiday falls on.';
      if (!hasName) errs.name = 'Name the holiday as it should appear on the calendar.';
    }
    if (hasDate && !holidayDraft.holiday_date.startsWith('2026')) {
      errs.holiday_date = 'This calendar covers 2026. Dates outside 2026 belong to next year’s calendar.';
    }
    if (weekend.length === 0) errs.weekend = 'Select at least one weekend day, or every day counts as a working day.';
    setCalErrors(errs);
    if (Object.keys(errs).length) return;

    const weekendNames = WEEKEND_OPTIONS.filter((o) => weekend.includes(o.dow)).map((o) => o.label);
    const weekendCopy = weekendNames.length === 1 ? weekendNames[0] : `${weekendNames.slice(0, -1).join(', ')} and ${weekendNames[weekendNames.length - 1]}`;

    if (hasDate && hasName) {
      const id = `h-${Date.now()}`;
      setHolidays((prev) => [...prev, { id, holiday_date: holidayDraft.holiday_date, name: holidayDraft.name.trim() }].sort((a, b) => a.holiday_date.localeCompare(b.holiday_date)));
      setNewHolidayId(id);
      setCalNotice(`${holidayDraft.name.trim()} added on ${fmtDate(holidayDraft.holiday_date)}. Weekends are ${weekendCopy} — leave spanning either won’t deduct balance.`);
      setHolidayDraft({ holiday_date: '', name: '' });
    } else {
      setCalNotice(`Calendar saved. Weekends are ${weekendCopy}; ${holidays.length} public holidays are excluded from leave and working-day calculations.`);
    }
  };

  // --- shared styles -----------------------------------------------------
  const panel = { backgroundColor: c.surface, borderColor: c.line, borderWidth: 1, borderStyle: 'solid', borderRadius: brand.radius };
  const fieldStyle = { backgroundColor: c.bg, borderColor: c.line, color: c.text, borderRadius: brand.radius };
  const labelCls = 'block text-[11px] uppercase tracking-[0.14em] font-medium mb-2';
  const kickerCls = 'text-[11px] uppercase tracking-[0.18em]';

  const primaryBtn = { backgroundColor: c.accent, color: c.bg, borderRadius: brand.radius, border: `1px solid ${c.accent}` };
  const quietBtn = { backgroundColor: 'transparent', color: c.text, borderRadius: brand.radius, border: `1px solid ${c.line}` };

  const thStyle = { color: c.muted, borderColor: c.line, textAlign: 'left' };
  const thCls = 'py-3 px-4 text-[11px] uppercase tracking-[0.14em] font-medium border-b align-bottom whitespace-nowrap';
  const tdCls = 'py-3.5 px-4 text-sm align-top border-b';

  const StatusBadge = ({ kind, children }) => {
    const map = {
      approved: { Icon: Icons.CheckCircle, color: c.accent },
      pending: { Icon: Icons.Clock, color: c.text },
      rejected: { Icon: Icons.X, color: c.muted },
    };
    const { Icon, color } = map[kind];
    return (
      <span className="inline-flex items-center gap-1.5 text-xs" style={{ color }}>
        <Icon className="h-3.5 w-3.5" aria-hidden="true" />
        {children}
      </span>
    );
  };

  const sectionHeading = (text, id) => (
    <h2 id={id} className="text-[20px] leading-tight" style={{ fontFamily: brand.fontHeading, color: c.text }}>{text}</h2>
  );

  return (
    <div
      className="min-h-full px-6 py-8 sm:px-10 sm:py-10"
      style={{
        backgroundColor: c.bg,
        color: c.text,
        fontFamily: brand.fontBody,
        '--velvet-accent': c.accent,
      }}
    >
      <style>{`
        .velvet-focus:focus-visible { outline: 2px solid var(--velvet-accent); outline-offset: 2px; }
        .velvet-num { font-variant-numeric: tabular-nums; }
        @keyframes velvetRowIn { from { opacity: 0; transform: translateY(-5px); } to { opacity: 1; transform: none; } }
        @keyframes velvetPanelIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: none; } }
        .velvet-row-in { animation: velvetRowIn 340ms cubic-bezier(.2,.7,.3,1) both; }
        .velvet-panel-in { animation: velvetPanelIn 240ms cubic-bezier(.2,.7,.3,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .velvet-row-in, .velvet-panel-in { animation: none; }
          .velvet-anim { transition: none !important; }
        }
      `}</style>

      <div className="mx-auto max-w-[1180px]">

        {/* ---------------- b-0-0 page title ---------------- */}
        <header data-wf="b-0-0" className="mb-8">
          <p className={kickerCls} style={{ color: c.accent }}>Configuration &amp; reporting</p>
          <h1 className="mt-2 text-[34px] sm:text-[40px] leading-[1.1]" style={{ fontFamily: brand.fontHeading, color: c.text }}>
            HR Admin
          </h1>
          <div className="mt-3 h-px w-16" style={{ backgroundColor: c.accent }} />
          <p className="mt-4 max-w-[62ch] text-sm leading-relaxed" style={{ color: c.muted }}>
            Leave policy, the working calendar and organisation-wide reports. Changes here apply to every employee record —
            signed in as Susan Raya, HR/Admin.
          </p>
        </header>

        {/* ---------------- b-1-0 tabs ---------------- */}
        <div
          data-wf="b-1-0"
          role="tablist"
          aria-label="HR admin sections"
          onKeyDown={onTabKeyDown}
          className="flex flex-wrap items-end gap-1 border-b"
          style={{ borderColor: c.line }}
        >
          {TABS.map((t, i) => {
            const activeTab = t.key === tab;
            return (
              <button
                key={t.key}
                data-wf={t.wf}
                ref={(el) => { tabRefs.current[i] = el; }}
                role="tab"
                id={`tab-${t.key}`}
                aria-selected={activeTab}
                aria-controls={`panel-${t.key}`}
                tabIndex={activeTab ? 0 : -1}
                onClick={() => setTab(t.key)}
                className="velvet-focus velvet-anim relative px-4 py-3 text-sm transition-colors"
                style={{
                  color: activeTab ? c.text : c.muted,
                  fontWeight: activeTab ? 500 : 400,
                  borderBottom: `2px solid ${activeTab ? c.accent : 'transparent'}`,
                  marginBottom: '-1px',
                }}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* ================= LEAVE TYPES ================= */}
        {tab === 'leave-types' && (
          <div id="panel-leave-types" role="tabpanel" aria-labelledby="tab-leave-types" className="velvet-panel-in mt-8">
            <div className="grid grid-cols-12 gap-6">

              {/* b-2-0 table */}
              <section data-wf="b-2-0" className="col-span-12 lg:col-span-8 overflow-hidden" style={panel} aria-labelledby="h-leave-types">
                <div className="flex flex-wrap items-baseline justify-between gap-2 px-5 pt-5 pb-4">
                  <div>
                    {sectionHeading('Leave types', 'h-leave-types')}
                    <p className="mt-1 text-sm" style={{ color: c.muted }}>
                      <span className="velvet-num">{leaveTypes.filter((l) => l.is_active).length}</span> active ·{' '}
                      <span className="velvet-num">{leaveTypes.filter((l) => !l.is_active).length}</span> inactive
                    </p>
                  </div>
                  <p className={kickerCls} style={{ color: c.muted }}>Policy year 2026</p>
                </div>

                {ltNotice && (
                  <div className="velvet-row-in mx-5 mb-4 flex items-start gap-2.5 px-3.5 py-3 text-sm" role="status"
                       style={{ backgroundColor: c.accentTint, border: `1px solid ${c.line}`, borderRadius: brand.radius, color: c.text }}>
                    <Icons.CheckCircle className="mt-0.5 h-4 w-4 shrink-0" style={{ color: c.accent }} aria-hidden="true" />
                    <span className="leading-relaxed">{ltNotice}</span>
                    <button type="button" onClick={() => setLtNotice(null)} aria-label="Dismiss message"
                            className="velvet-focus ml-auto shrink-0 rounded p-0.5" style={{ color: c.muted }}>
                      <Icons.X className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                )}

                <div className="overflow-x-auto">
                  <Table className="w-full velvet-num" style={{ borderCollapse: 'collapse' }}>
                    <THead>
                      <TR>
                        <TH data-wf="i-2-0-0" scope="col" className={thCls} style={thStyle}>Name</TH>
                        <TH data-wf="i-2-0-1" scope="col" className={thCls} style={{ ...thStyle, textAlign: 'right' }}>Annual balance</TH>
                        <TH data-wf="i-2-0-2" scope="col" className={thCls} style={thStyle}>Accrual rule</TH>
                        <TH data-wf="i-2-0-3" scope="col" className={thCls} style={thStyle}>Active</TH>
                        <TH scope="col" className={thCls} style={thStyle}><span className="sr-only">Row actions</span></TH>
                      </TR>
                    </THead>
                    <TBody>
                      {leaveTypes.map((lt) => {
                        const isEditing = editingId === lt.id;
                        const isNewRow = lt.id === pendingId;
                        return (
                          <TR key={lt.id} className={lt.id === newLtId ? 'velvet-row-in' : undefined}
                              style={{ backgroundColor: isEditing ? c.raised : 'transparent' }}>
                            <TD className={tdCls} style={{ borderColor: c.lineSoft, color: c.text }}>
                              {isEditing ? (
                                <>
                                  <Label htmlFor={`name-${lt.id}`} className="sr-only">Leave type name</Label>
                                  <Input id={`name-${lt.id}`} value={editDraft.name} autoFocus={isNewRow}
                                         placeholder="e.g. Study leave"
                                         onChange={(e) => setEditDraft((d) => ({ ...d, name: e.target.value }))}
                                         className="velvet-focus w-full" style={fieldStyle} />
                                </>
                              ) : (
                                <span style={{ fontFamily: brand.fontHeading, fontSize: '15px' }}>{lt.name}</span>
                              )}
                            </TD>
                            <TD className={tdCls} style={{ borderColor: c.lineSoft, color: c.text, textAlign: 'right' }}>
                              {isEditing ? (
                                <>
                                  <Label htmlFor={`bal-${lt.id}`} className="sr-only">Annual balance in days</Label>
                                  <Input id={`bal-${lt.id}`} type="number" min="0" value={editDraft.annual_balance}
                                         onChange={(e) => setEditDraft((d) => ({ ...d, annual_balance: e.target.value }))}
                                         className="velvet-focus w-24 text-right velvet-num" style={fieldStyle} />
                                </>
                              ) : (
                                <span style={{ color: c.accent, fontSize: '15px' }}>{lt.annual_balance}<span className="ml-1 text-xs" style={{ color: c.muted }}>d</span></span>
                              )}
                            </TD>
                            <TD className={tdCls} style={{ borderColor: c.lineSoft, color: c.muted, maxWidth: '22rem' }}>
                              {isEditing ? (
                                <>
                                  <Label htmlFor={`rule-${lt.id}`} className="sr-only">Accrual rule</Label>
                                  <Input id={`rule-${lt.id}`} value={editDraft.accrual_rule}
                                         placeholder="e.g. 1.5 days per month, carry-forward up to 30 days"
                                         onChange={(e) => setEditDraft((d) => ({ ...d, accrual_rule: e.target.value }))}
                                         className="velvet-focus w-full" style={fieldStyle} />
                                </>
                              ) : (
                                <span className="leading-relaxed">{lt.accrual_rule}</span>
                              )}
                            </TD>
                            <TD className={tdCls} style={{ borderColor: c.lineSoft }}>
                              {lt.is_active ? (
                                <span className="inline-flex items-center gap-1.5 text-xs" style={{ color: c.accent }}>
                                  <Icons.Check className="h-3.5 w-3.5" aria-hidden="true" />Active
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1.5 text-xs" style={{ color: c.muted }}>
                                  <Icons.X className="h-3.5 w-3.5" aria-hidden="true" />Inactive
                                </span>
                              )}
                            </TD>
                            <TD className={tdCls} style={{ borderColor: c.lineSoft }}>
                              <div className="flex items-center justify-end gap-1.5">
                                {isEditing ? (
                                  <>
                                    <Button type="button" onClick={() => saveEdit(lt)} className="velvet-focus px-3 py-1.5 text-xs" style={primaryBtn}>Save</Button>
                                    <Button type="button" onClick={() => cancelEdit(lt)} className="velvet-focus px-3 py-1.5 text-xs" style={quietBtn}>Cancel</Button>
                                  </>
                                ) : (
                                  <>
                                    <Button type="button" onClick={() => startEdit(lt)}
                                            className="velvet-focus inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs"
                                            style={{ ...quietBtn, borderColor: 'transparent', color: c.muted }}>
                                      <Icons.Edit className="h-3.5 w-3.5" aria-hidden="true" />Edit
                                    </Button>
                                    <Button type="button" onClick={() => toggleActive(lt)}
                                            aria-label={`${lt.is_active ? 'Deactivate' : 'Activate'} ${lt.name}`}
                                            className="velvet-focus px-2.5 py-1.5 text-xs"
                                            style={{ ...quietBtn, borderColor: 'transparent', color: c.muted }}>
                                      {lt.is_active ? 'Deactivate' : 'Activate'}
                                    </Button>
                                  </>
                                )}
                              </div>
                            </TD>
                          </TR>
                        );
                      })}
                    </TBody>
                  </Table>
                </div>
              </section>

              {/* b-2-1 button */}
              <div className="col-span-12 lg:col-span-4">
                <Button
                  data-wf="b-2-1"
                  type="button"
                  onClick={addLeaveType}
                  className="velvet-focus velvet-anim inline-flex w-full items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-opacity hover:opacity-90"
                  style={primaryBtn}
                >
                  <Icons.Plus className="h-4 w-4" aria-hidden="true" />
                  Add leave type
                </Button>
                <p className="mt-2 text-xs leading-relaxed" style={{ color: c.muted }}>
                  Adds a blank row at the top of the table — name it, set the balance and save.
                </p>

                <div className="mt-4 p-5" style={{ ...panel, backgroundColor: 'transparent' }}>
                  <p className={kickerCls} style={{ color: c.muted }}>Next accrual run</p>
                  <p className="mt-2 text-[22px] velvet-num" style={{ fontFamily: brand.fontHeading, color: c.accent }}>01 Nov 2026</p>
                  <p className="mt-2 text-xs leading-relaxed" style={{ color: c.muted }}>
                    Monthly credits post at 00:30 IST. Balances for{' '}
                    <span className="velvet-num">{leaveTypes.filter((l) => l.is_active).length}</span> active types will be topped up.
                  </p>
                </div>
              </div>

              {/* b-3-0 text */}
              <p data-wf="b-3-0" className="col-span-12 flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: c.muted }}>
                <Icons.AlertCircle className="mt-0.5 h-4 w-4 shrink-0" style={{ color: c.accent }} aria-hidden="true" />
                Editing a balance or accrual rule applies to future accruals only; approved leave history is unchanged.
              </p>
            </div>
          </div>
        )}

        {/* ================= HOLIDAYS & WEEKENDS ================= */}
        {tab === 'calendar' && (
          <div id="panel-calendar" role="tabpanel" aria-labelledby="tab-calendar" className="velvet-panel-in mt-8">
            <div className="grid grid-cols-12 gap-6">

              {/* b-4-0 holidays table */}
              <section data-wf="b-4-0" className="col-span-12 lg:col-span-6 overflow-hidden" style={panel} aria-labelledby="h-holidays">
                <div className="flex flex-wrap items-baseline justify-between gap-2 px-5 pt-5 pb-4">
                  <div>
                    {sectionHeading('Public holidays 2026', 'h-holidays')}
                    <p className="mt-1 text-sm velvet-num" style={{ color: c.muted }}>
                      {holidays.length} dates · {holidays.filter((h) => weekend.includes(weekdayOf(h.holiday_date))).length} fall on a weekend
                    </p>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <Table className="w-full velvet-num" style={{ borderCollapse: 'collapse' }}>
                    <THead>
                      <TR>
                        <TH data-wf="i-4-0-0" scope="col" className={thCls} style={thStyle}>Holiday date</TH>
                        <TH data-wf="i-4-0-1" scope="col" className={thCls} style={thStyle}>Holiday name</TH>
                      </TR>
                    </THead>
                    <TBody>
                      {holidays.map((h) => {
                        const dow = weekdayOf(h.holiday_date);
                        const onWeekend = weekend.includes(dow);
                        return (
                          <TR key={h.id} className={h.id === newHolidayId ? 'velvet-row-in' : undefined}>
                            <TD className={tdCls} style={{ borderColor: c.lineSoft, color: c.text, whiteSpace: 'nowrap' }}>
                              <span style={{ color: c.accent }}>{fmtDate(h.holiday_date)}</span>
                              <span className="block text-xs" style={{ color: c.muted }}>{DAY_NAMES[dow]}</span>
                            </TD>
                            <TD className={tdCls} style={{ borderColor: c.lineSoft, color: c.text }}>
                              <span style={{ fontFamily: brand.fontHeading, fontSize: '15px' }}>{h.name}</span>
                              {onWeekend && (
                                <span className="mt-1 block text-xs" style={{ color: c.muted }}>
                                  Already a weekend — counted once
                                </span>
                              )}
                            </TD>
                          </TR>
                        );
                      })}
                    </TBody>
                  </Table>
                </div>
              </section>

              {/* b-4-1 form */}
              <section data-wf="b-4-1" className="col-span-12 lg:col-span-6" style={panel} aria-labelledby="h-add-calendar">
                <form onSubmit={saveCalendar} noValidate className="p-5 sm:p-6">
                  {sectionHeading('Add holiday & weekend days', 'h-add-calendar')}
                  <p className="mt-2 mb-6 max-w-[52ch] text-sm leading-relaxed" style={{ color: c.muted }}>
                    Holidays and weekend days are treated as non-working days everywhere: leave spanning them does not deduct balance.
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="holiday-date" className={labelCls} style={{ color: c.muted }}>Holiday date</Label>
                      <Input data-wf="i-4-1-0" id="holiday-date" type="date" value={holidayDraft.holiday_date}
                             min="2026-01-01" max="2026-12-31"
                             aria-invalid={!!calErrors.holiday_date}
                             aria-describedby={calErrors.holiday_date ? 'holiday-date-err' : undefined}
                             onChange={(e) => { setHolidayDraft((d) => ({ ...d, holiday_date: e.target.value })); setCalNotice(null); }}
                             className="velvet-focus w-full velvet-num" style={fieldStyle} />
                      {calErrors.holiday_date && (
                        <p id="holiday-date-err" className="mt-2 flex items-start gap-1.5 text-xs" style={{ color: c.text }}>
                          <Icons.AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />{calErrors.holiday_date}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="holiday-name" className={labelCls} style={{ color: c.muted }}>Holiday name</Label>
                      <Input data-wf="i-4-1-1" id="holiday-name" value={holidayDraft.name}
                             aria-invalid={!!calErrors.name}
                             aria-describedby={calErrors.name ? 'holiday-name-err' : undefined}
                             onChange={(e) => { setHolidayDraft((d) => ({ ...d, name: e.target.value })); setCalNotice(null); }}
                             className="velvet-focus w-full" style={fieldStyle} />
                      {calErrors.name && (
                        <p id="holiday-name-err" className="mt-2 flex items-start gap-1.5 text-xs" style={{ color: c.text }}>
                          <Icons.AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />{calErrors.name}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="my-6" style={{ borderTop: `1px solid ${c.lineSoft}` }} />

                  <fieldset data-wf="i-4-1-2" aria-describedby={calErrors.weekend ? 'weekend-err' : 'weekend-hint'}>
                    <legend className={labelCls} style={{ color: c.muted }}>Weekend days</legend>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
                      {WEEKEND_OPTIONS.map((o) => (
                        <div key={o.dow} className="flex min-h-[28px] items-center gap-2.5">
                          <Checkbox id={`wk-${o.dow}`} checked={weekend.includes(o.dow)}
                                    onChange={() => toggleWeekendDay(o.dow)}
                                    className="velvet-focus h-4 w-4" style={{ accentColor: c.accent }} />
                          <Label htmlFor={`wk-${o.dow}`} className="text-sm"
                                 style={{ color: weekend.includes(o.dow) ? c.text : c.muted }}>
                            {o.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                    {calErrors.weekend ? (
                      <p id="weekend-err" className="mt-3 flex items-start gap-1.5 text-xs" style={{ color: c.text }}>
                        <Icons.AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />{calErrors.weekend}
                      </p>
                    ) : (
                      <p id="weekend-hint" className="mt-3 text-xs leading-relaxed" style={{ color: c.muted }}>
                        Currently non-working:{' '}
                        <span style={{ color: c.text }}>
                          {WEEKEND_OPTIONS.filter((o) => weekend.includes(o.dow)).map((o) => o.label).join(', ') || 'none'}
                        </span>
                      </p>
                    )}
                  </fieldset>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <Button data-wf="i-4-1-3" type="submit"
                            className="velvet-focus velvet-anim inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
                            style={primaryBtn}>
                      <Icons.Calendar className="h-4 w-4" aria-hidden="true" />
                      Save calendar
                    </Button>
                    <span className="text-xs" style={{ color: c.muted }}>Applies to leave and working-day calculations immediately.</span>
                  </div>

                  {calNotice && (
                    <div className="velvet-row-in mt-5 flex items-start gap-2.5 px-3.5 py-3 text-sm" role="status"
                         style={{ backgroundColor: c.accentTint, border: `1px solid ${c.line}`, borderRadius: brand.radius, color: c.text }}>
                      <Icons.CheckCircle className="mt-0.5 h-4 w-4 shrink-0" style={{ color: c.accent }} aria-hidden="true" />
                      <span className="leading-relaxed">{calNotice}</span>
                    </div>
                  )}
                </form>
              </section>
            </div>
          </div>
        )}

        {/* ================= REPORTS ================= */}
        {tab === 'reports' && (
          <div id="panel-reports" role="tabpanel" aria-labelledby="tab-reports" className="velvet-panel-in mt-8">
            <form onSubmit={runReport} noValidate className="grid grid-cols-12 gap-6">

              {/* b-5-0 filter bar */}
              <section data-wf="b-5-0" className="col-span-12 lg:col-span-8 p-5" style={panel} aria-labelledby="h-filters">
                <div className="mb-5 flex items-center gap-2">
                  <Icons.Filter className="h-4 w-4" style={{ color: c.accent }} aria-hidden="true" />
                  <h2 id="h-filters" className={kickerCls} style={{ color: c.muted, fontFamily: brand.fontBody }}>Report filters</h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
                  <div>
                    <Label htmlFor="f-report" className={labelCls} style={{ color: c.muted }}>Report</Label>
                    <Select data-wf="i-5-0-0" id="f-report" value={filters.report}
                            onChange={(e) => setFilters((f) => ({ ...f, report: e.target.value }))}
                            className="velvet-focus w-full" style={fieldStyle}>
                      <option value="Attendance" style={{ backgroundColor: c.bg }}>Attendance</option>
                      <option value="Leave" style={{ backgroundColor: c.bg }}>Leave</option>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="f-from" className={labelCls} style={{ color: c.muted }}>From</Label>
                    <Input data-wf="i-5-0-1" id="f-from" type="date" value={filters.from}
                           onChange={(e) => setFilters((f) => ({ ...f, from: e.target.value }))}
                           className="velvet-focus w-full velvet-num" style={fieldStyle} />
                  </div>
                  <div>
                    <Label htmlFor="f-to" className={labelCls} style={{ color: c.muted }}>To</Label>
                    <Input data-wf="i-5-0-2" id="f-to" type="date" value={filters.to}
                           onChange={(e) => setFilters((f) => ({ ...f, to: e.target.value }))}
                           className="velvet-focus w-full velvet-num" style={fieldStyle} />
                  </div>
                  <div>
                    <Label htmlFor="f-dept" className={labelCls} style={{ color: c.muted }}>Department</Label>
                    <Select data-wf="i-5-0-3" id="f-dept" value={filters.department}
                            onChange={(e) => setFilters((f) => ({ ...f, department: e.target.value }))}
                            className="velvet-focus w-full" style={fieldStyle}>
                      <option value="All" style={{ backgroundColor: c.bg }}>All</option>
                      {DEPARTMENTS.map((d) => <option key={d} value={d} style={{ backgroundColor: c.bg }}>{d}</option>)}
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="f-emp" className={labelCls} style={{ color: c.muted }}>Employee</Label>
                    <Select data-wf="i-5-0-4" id="f-emp" value={filters.employee}
                            onChange={(e) => setFilters((f) => ({ ...f, employee: e.target.value }))}
                            className="velvet-focus w-full" style={fieldStyle}>
                      <option value="All" style={{ backgroundColor: c.bg }}>All</option>
                      {EMPLOYEE_NAMES.map((n) => <option key={n} value={n} style={{ backgroundColor: c.bg }}>{n}</option>)}
                    </Select>
                  </div>
                </div>

                {reportError && (
                  <div className="velvet-row-in mt-5 flex items-start gap-2.5 px-3.5 py-3 text-sm" role="alert"
                       style={{ border: `1px solid ${c.accent}`, borderRadius: brand.radius, color: c.text }}>
                    <Icons.AlertCircle className="mt-0.5 h-4 w-4 shrink-0" style={{ color: c.accent }} aria-hidden="true" />
                    <span className="leading-relaxed">{reportError}</span>
                  </div>
                )}

                <p className="mt-5 flex flex-wrap items-center gap-2 text-xs" style={{ color: c.muted }}>
                  <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: c.accent }} aria-hidden="true" />
                  Attendance synced to 30 Oct 2026, 08:42 IST · records held in ap-south-1 (Mumbai)
                </p>
              </section>

              {/* b-5-1 run */}
              <div className="col-span-12 sm:col-span-6 lg:col-span-2 flex">
                <Button data-wf="b-5-1" type="submit" disabled={running}
                        className="velvet-focus velvet-anim inline-flex h-full w-full items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-60"
                        style={{ ...primaryBtn, cursor: running ? 'progress' : 'pointer' }}>
                  {running ? (
                    <>
                      <Icons.Clock className="h-4 w-4 animate-spin" aria-hidden="true" />
                      Running…
                    </>
                  ) : (
                    <>
                      <Icons.Search className="h-4 w-4" aria-hidden="true" />
                      Run report
                    </>
                  )}
                </Button>
              </div>

              {/* b-5-2 export */}
              <div className="col-span-12 sm:col-span-6 lg:col-span-2 flex flex-col">
                <Button data-wf="b-5-2" type="button" onClick={exportReport}
                        disabled={running || rows.length === 0}
                        aria-describedby="export-hint"
                        className="velvet-focus velvet-anim inline-flex w-full flex-1 items-center justify-center gap-2 px-4 py-3 text-sm transition-colors disabled:opacity-50"
                        style={{ ...quietBtn, cursor: running || rows.length === 0 ? 'not-allowed' : 'pointer' }}>
                  <Icons.Download className="h-4 w-4" aria-hidden="true" />
                  Export CSV/Excel
                </Button>
                <span id="export-hint" className="mt-2 text-xs leading-snug" style={{ color: c.muted }}>
                  {rows.length === 0 ? 'Nothing to export yet — run a report that returns rows.' : 'Exports exactly the rows shown below.'}
                </span>
              </div>
            </form>

            {exportNotice && (
              <div className="velvet-row-in mt-6 flex items-start gap-2.5 px-4 py-3 text-sm" role="status"
                   style={{ backgroundColor: c.accentTint, border: `1px solid ${c.line}`, borderRadius: brand.radius, color: c.text }}>
                <Icons.CheckCircle className="mt-0.5 h-4 w-4 shrink-0" style={{ color: c.accent }} aria-hidden="true" />
                <span className="leading-relaxed velvet-num">{exportNotice}</span>
              </div>
            )}

            {/* b-6-0 report table */}
            <section data-wf="b-6-0" className="mt-6 overflow-hidden" style={panel} aria-labelledby="h-report">
              <div className="flex flex-wrap items-baseline justify-between gap-3 px-5 pt-5 pb-4">
                <div>
                  {sectionHeading(applied.report === 'Attendance' ? 'Attendance report' : 'Leave report', 'h-report')}
                  <p className="mt-1 text-sm velvet-num" style={{ color: c.muted }}>
                    {rangeLabel(applied.from, applied.to)} ·{' '}
                    {applied.department === 'All' ? 'All departments' : applied.department} ·{' '}
                    {applied.employee === 'All' ? 'All employees' : applied.employee}
                  </p>
                </div>
                <p className="text-sm velvet-num" style={{ color: c.text }}>
                  <span style={{ color: c.accent, fontFamily: brand.fontHeading, fontSize: '18px' }}>{rows.length}</span>
                  <span className="ml-1.5" style={{ color: c.muted }}>
                    {applied.report === 'Attendance'
                      ? `records · ${fmtHours(totalMinutes)} logged`
                      : `requests · ${totalDays} days deducted`}
                  </span>
                </p>
              </div>

              <div className="overflow-x-auto">
                <Table className="w-full velvet-num" style={{ borderCollapse: 'collapse' }}>
                  <THead>
                    <TR>
                      <TH data-wf="i-6-0-0" scope="col" className={thCls} style={thStyle}>Employee</TH>
                      <TH data-wf="i-6-0-1" scope="col" className={thCls} style={thStyle}>Department</TH>
                      <TH data-wf="i-6-0-2" scope="col" className={thCls} style={thStyle}>{applied.report === 'Attendance' ? 'Date' : 'Dates'}</TH>
                      <TH data-wf="i-6-0-3" scope="col" className={thCls} style={thStyle}>{applied.report === 'Attendance' ? 'Check-in' : 'Leave type'}</TH>
                      <TH data-wf="i-6-0-4" scope="col" className={thCls} style={thStyle}>{applied.report === 'Attendance' ? 'Check-out' : 'Days'}</TH>
                      <TH data-wf="i-6-0-5" scope="col" className={thCls} style={{ ...thStyle, textAlign: applied.report === 'Attendance' ? 'right' : 'left' }}>
                        {applied.report === 'Attendance' ? 'Worked hours' : 'Status'}
                      </TH>
                    </TR>
                  </THead>
                  <TBody>
                    {running && [0, 1, 2, 3, 4].map((i) => (
                      <TR key={`sk-${i}`}>
                        {[0, 1, 2, 3, 4, 5].map((j) => (
                          <TD key={j} className={tdCls} style={{ borderColor: c.lineSoft }}>
                            <span className="block h-3 animate-pulse rounded" style={{ backgroundColor: c.raised, width: j === 0 ? '8rem' : '4.5rem' }} />
                          </TD>
                        ))}
                      </TR>
                    ))}

                    {!running && applied.report === 'Attendance' && rows.map((r) => (
                      <TR key={r.id}>
                        <TD className={tdCls} style={{ borderColor: c.lineSoft, color: c.text }}>
                          <span className="flex items-center gap-2.5">
                            <Avatar name={r.employee} className="h-7 w-7 shrink-0" />
                            <span style={{ fontFamily: brand.fontHeading, fontSize: '15px' }}>{r.employee}</span>
                          </span>
                        </TD>
                        <TD className={tdCls} style={{ borderColor: c.lineSoft, color: c.muted }}>{r.department}</TD>
                        <TD className={tdCls} style={{ borderColor: c.lineSoft, color: c.text, whiteSpace: 'nowrap' }}>{fmtDate(r.work_date)}</TD>
                        <TD className={tdCls} style={{ borderColor: c.lineSoft, color: c.text }}>{r.check_in}</TD>
                        <TD className={tdCls} style={{ borderColor: c.lineSoft, color: r.check_out ? c.text : c.muted }}>
                          {r.check_out || (
                            <span className="inline-flex items-center gap-1.5 text-xs">
                              <Icons.Clock className="h-3.5 w-3.5" aria-hidden="true" />Still checked in
                            </span>
                          )}
                        </TD>
                        <TD className={tdCls} style={{ borderColor: c.lineSoft, color: c.text, textAlign: 'right' }}>
                          {r.worked_minutes ? (
                            <span style={{ color: r.worked_minutes < 300 ? c.muted : c.text }}>{fmtHours(r.worked_minutes)}</span>
                          ) : (
                            <span style={{ color: c.muted }}>—</span>
                          )}
                        </TD>
                      </TR>
                    ))}

                    {!running && applied.report === 'Leave' && rows.map((r) => (
                      <TR key={r.id}>
                        <TD className={tdCls} style={{ borderColor: c.lineSoft, color: c.text }}>
                          <span className="flex items-center gap-2.5">
                            <Avatar name={r.employee} className="h-7 w-7 shrink-0" />
                            <span style={{ fontFamily: brand.fontHeading, fontSize: '15px' }}>{r.employee}</span>
                          </span>
                        </TD>
                        <TD className={tdCls} style={{ borderColor: c.lineSoft, color: c.muted }}>{r.department}</TD>
                        <TD className={tdCls} style={{ borderColor: c.lineSoft, color: c.text, whiteSpace: 'nowrap' }}>
                          {r.start_date === r.end_date ? fmtDate(r.start_date) : `${fmtDate(r.start_date)} – ${fmtDate(r.end_date)}`}
                        </TD>
                        <TD className={tdCls} style={{ borderColor: c.lineSoft, color: c.text }}>{r.leave_type}</TD>
                        <TD className={tdCls} style={{ borderColor: c.lineSoft, color: c.text }}>{r.days_deducted}</TD>
                        <TD className={tdCls} style={{ borderColor: c.lineSoft }}>
                          <StatusBadge kind={r.status.toLowerCase()}>{r.status}</StatusBadge>
                        </TD>
                      </TR>
                    ))}
                  </TBody>
                </Table>
              </div>

              {!running && rows.length > 0 && (
                <p className="px-5 py-4 text-xs velvet-num" style={{ color: c.muted, borderTop: `1px solid ${c.lineSoft}` }}>
                  {applied.report === 'Attendance'
                    ? `${rows.length} sessions · average ${fmtHours(Math.round(totalMinutes / Math.max(rows.filter((r) => r.worked_minutes).length, 1)))} per completed session`
                    : `${rows.length} requests · ${rows.filter((r) => r.status === 'Pending').length} awaiting a manager decision`}
                </p>
              )}
            </section>

            {/* b-7-0 empty state */}
            {!running && rows.length === 0 && (
              <section data-wf="b-7-0" className="velvet-panel-in mt-6 px-5 py-10" style={{ ...panel, backgroundColor: 'transparent' }}>
                <div style={{ color: c.text }} className="text-center">
                  <Empty
                    title="No records match these filters"
                    description="Try a wider date range or a different department. Nothing was lost — your filter selections are still in place above."
                    action={
                      <Button type="button" onClick={resetFilters}
                              className="velvet-focus inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium"
                              style={primaryBtn}>
                        <Icons.ArrowLeft className="h-4 w-4" aria-hidden="true" />
                        Reset to 01–30 Oct 2026
                      </Button>
                    }
                  />
                  <p className="mt-6 text-xs" style={{ color: c.muted }}>
                    Looking for one person’s record instead?{' '}
                    <button type="button" onClick={() => navigate('employees')}
                            className="velvet-focus underline underline-offset-4" style={{ color: c.accent }}>
                      Open employee records
                    </button>
                  </p>
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
