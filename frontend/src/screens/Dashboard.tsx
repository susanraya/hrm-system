// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Card, CardContent, Input, Textarea, Label, Select, Badge, Table, THead, TBody, TR, TH, TD, Separator, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Check } = Icons;

const ACCENT = brand.accentColor;
const INK = brand.primaryColor;
const MUTED = brand.neutralColor;
const CANVAS = brand.backgroundColor;
const RADIUS = brand.radius;

const HAIRLINE = "rgba(255,255,255,0.10)";
const HAIRLINE_SOFT = "rgba(255,255,255,0.07)";
const SURFACE = "rgba(255,255,255,0.035)";
const SURFACE_HI = "rgba(255,255,255,0.06)";

const hexToRgba = (hex, a) => {
  const h = String(hex).replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(full, 16);
  return "rgba(" + ((n >> 16) & 255) + "," + ((n >> 8) & 255) + "," + (n & 255) + "," + a + ")";
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const TODAY_ISO = "2026-10-30";
const CLOCK = ["17:42", "17:49", "18:31", "18:44", "19:06", "19:20"];

const ME = {
  first_name: "Susan",
  last_name: "Raya",
  employee_ref: "QRQ-0418",
  designation: "Senior Product Designer",
  department: "Design",
  manager: "Priya Nandakumar",
  work_email: "susan.raya@quorq.ai",
};

const HOLIDAYS = [
  { id: "h1", holiday_date: "2026-01-26", name: "Republic Day" },
  { id: "h2", holiday_date: "2026-08-15", name: "Independence Day" },
  { id: "h3", holiday_date: "2026-10-02", name: "Gandhi Jayanti" },
  { id: "h4", holiday_date: "2026-11-09", name: "Diwali" },
  { id: "h5", holiday_date: "2026-11-10", name: "Govardhan Puja" },
  { id: "h6", holiday_date: "2026-12-25", name: "Christmas Day" },
];

const INITIAL_ATTENDANCE = [
  { id: "a-1030", work_date: "2026-10-30", check_in: "09:12", check_out: null, worked_minutes: null, note: null },
  { id: "a-1029", work_date: "2026-10-29", check_in: "08:58", check_out: "18:04", worked_minutes: 546, note: null },
  { id: "a-1028", work_date: "2026-10-28", check_in: "09:26", check_out: "17:35", worked_minutes: 489, note: null },
  { id: "a-1027", work_date: "2026-10-27", check_in: null, check_out: null, worked_minutes: 0, note: "Sick leave — approved" },
  { id: "a-1026", work_date: "2026-10-26", check_in: "09:05", check_out: "17:58", worked_minutes: 533, note: null },
  { id: "a-1023", work_date: "2026-10-23", check_in: "09:18", check_out: null, worked_minutes: null, note: "No check-out recorded" },
  { id: "a-1022", work_date: "2026-10-22", check_in: "08:47", check_out: "17:12", worked_minutes: 505, note: null },
  { id: "a-1021", work_date: "2026-10-21", check_in: "09:02", check_out: "18:21", worked_minutes: 559, note: null },
];

const BALANCES = [
  { id: "lt-casual", name: "Casual", balance: 6.0, annual_balance: 12, accrual_rule: "1.0 day accrues each month" },
  { id: "lt-sick", name: "Sick", balance: 8.0, annual_balance: 12, accrual_rule: "Credited in full each January" },
  { id: "lt-earned", name: "Earned", balance: 12.5, annual_balance: 18, accrual_rule: "1.5 days accrue each month" },
];

const INITIAL_REQUESTS = [
  {
    id: "LR-2041", leave_type_id: "lt-earned", leave_type: "Earned", start_date: "2026-12-21", end_date: "2026-12-25",
    days_deducted: 4.0, status: "pending", decision_reason: null, reason: "Family trip to Coorg over the year-end break.",
  },
  {
    id: "LR-1998", leave_type_id: "lt-casual", leave_type: "Casual", start_date: "2026-11-16", end_date: "2026-11-16",
    days_deducted: 1.0, status: "approved", decision_reason: "Arjun covers the design review that morning.", reason: "Apartment registration appointment.",
  },
  {
    id: "LR-1954", leave_type_id: "lt-sick", leave_type: "Sick", start_date: "2026-10-27", end_date: "2026-10-27",
    days_deducted: 1.0, status: "approved", decision_reason: "Rest up — no cover needed.", reason: "Viral fever, teleconsult advised rest.",
  },
  {
    id: "LR-1902", leave_type_id: "lt-earned", leave_type: "Earned", start_date: "2026-09-28", end_date: "2026-10-02",
    days_deducted: 0.0, status: "rejected", decision_reason: "Quarter close week — please re-apply for 12–16 Oct.", reason: "Wedding in Mangaluru.",
  },
  {
    id: "LR-1844", leave_type_id: "lt-casual", leave_type: "Casual", start_date: "2026-08-14", end_date: "2026-08-14",
    days_deducted: 1.0, status: "approved", decision_reason: "Approved, long weekend with Independence Day.", reason: "Travelling home ahead of the holiday.",
  },
];

const PRIVACY = {
  version: "2.1",
  published_at: "2026-09-14",
  paragraphs: [
    "Quorq processes your name, contact details, designation, department, reporting line, employment dates, attendance timestamps and leave records so that it can run payroll, staffing and statutory reporting for your employment.",
    "The lawful basis is the 'employment' legitimate use under Section 7(i) of the Digital Personal Data Protection Act, 2023. We do not ask for your consent for these purposes and we do not use your data for anything outside the employment relationship.",
    "Your records and any documents you upload (ID proofs, address proofs) are stored in Amazon S3 in the Mumbai region, ap-south-1, and are not transferred outside India. Files are served through short-lived signed links only to you and to HR/admin.",
    "You can view everything held about you on My Profile, correct your own contact details there, and raise a correction request for anything else. HR responds to correction requests within five working days.",
  ],
};

const fmtDate = (iso) => {
  if (!iso) return "—";
  const [y, m, d] = iso.split("-").map(Number);
  return d + " " + MONTHS[m - 1] + " " + y;
};
const fmtDayDate = (iso) => {
  const [y, m, d] = iso.split("-").map(Number);
  const dt = new Date(y, m - 1, d);
  return DOW[dt.getDay()] + " " + d + " " + MONTHS[m - 1] + " " + y;
};
const toMin = (hhmm) => {
  if (!hhmm) return 0;
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};
const fmtDur = (mins) => {
  if (mins === null || mins === undefined) return null;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return h + "h " + String(m).padStart(2, "0") + "m";
};
const isoOf = (dt) =>
  dt.getFullYear() + "-" + String(dt.getMonth() + 1).padStart(2, "0") + "-" + String(dt.getDate()).padStart(2, "0");

const computeRange = (startIso, endIso) => {
  const out = { days: 0, weekends: 0, holidays: [], valid: false };
  if (!startIso || !endIso) return out;
  const s = new Date(startIso + "T00:00:00");
  const e = new Date(endIso + "T00:00:00");
  if (isNaN(s) || isNaN(e) || e < s) return out;
  out.valid = true;
  const cur = new Date(s);
  let guard = 0;
  while (cur <= e && guard < 400) {
    const iso = isoOf(cur);
    const dow = cur.getDay();
    const hol = HOLIDAYS.find((h) => h.holiday_date === iso);
    if (dow === 0 || dow === 6) out.weekends += 1;
    else if (hol) out.holidays.push(hol.name);
    else out.days += 1;
    cur.setDate(cur.getDate() + 1);
    guard += 1;
  }
  return out;
};

export default function Screen() {
  const navigate = useNavigate();
  const [attendance, setAttendance] = React.useState(INITIAL_ATTENDANCE);
  const [requests, setRequests] = React.useState(INITIAL_REQUESTS);
  const [clockIdx, setClockIdx] = React.useState(0);
  const [notice, setNotice] = React.useState(null);
  const [banner, setBanner] = React.useState(null);
  const [leaveOpen, setLeaveOpen] = React.useState(false);
  const [privacyOpen, setPrivacyOpen] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [form, setForm] = React.useState({ leave_type_id: "lt-casual", start_date: "", end_date: "", reason: "" });
  const [errors, setErrors] = React.useState({});
  const [formError, setFormError] = React.useState(null);

  const timerRef = React.useRef(null);
  const leaveTriggerRef = React.useRef(null);
  const privacyTriggerRef = React.useRef(null);
  const leaveDialogRef = React.useRef(null);
  const lastTriggerRef = React.useRef(null);

  React.useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  const now = CLOCK[Math.min(clockIdx, CLOCK.length - 1)];
  const openSession = attendance.find((r) => r.work_date === TODAY_ISO && r.check_in && !r.check_out);
  const todayRows = attendance.filter((r) => r.work_date === TODAY_ISO && r.check_in);
  const closedToday = todayRows.filter((r) => r.check_out);
  const elapsed = openSession ? Math.max(0, toMin(now) - toMin(openSession.check_in)) : 0;

  const takeClock = () => {
    const t = CLOCK[Math.min(clockIdx, CLOCK.length - 1)];
    setClockIdx((i) => Math.min(i + 1, CLOCK.length - 1));
    return t;
  };

  const handleCheckIn = () => {
    if (openSession) {
      setNotice({ tone: "error", text: "You already have an open session from " + openSession.check_in + ". Check out before starting another." });
      return;
    }
    const t = takeClock();
    const row = { id: "a-new-" + t.replace(":", ""), work_date: TODAY_ISO, check_in: t, check_out: null, worked_minutes: null, note: todayRows.length ? "Session " + (todayRows.length + 1) : null, isNew: true };
    setAttendance((prev) => [row, ...prev]);
    setNotice({ tone: "success", text: "Checked in at " + t + ". No location or biometric data was recorded." });
  };

  const handleCheckOut = () => {
    if (!openSession) {
      setNotice({ tone: "error", text: "There is no open session to close — you last checked out at " + (closedToday[0] ? closedToday[0].check_out : "—") + ". Check in again to start a new session." });
      return;
    }
    const t = takeClock();
    const worked = Math.max(0, toMin(t) - toMin(openSession.check_in));
    setAttendance((prev) => prev.map((r) => (r.id === openSession.id ? { ...r, check_out: t, worked_minutes: worked, note: r.note, isNew: true } : r)));
    setNotice({ tone: "success", text: "Checked out at " + t + ". " + fmtDur(worked) + " recorded for " + fmtDate(TODAY_ISO) + "." });
  };

  const openLeave = () => {
    lastTriggerRef.current = leaveTriggerRef.current;
    setFormError(null);
    setErrors({});
    setLeaveOpen(true);
  };
  const closeLeave = () => {
    setLeaveOpen(false);
    if (lastTriggerRef.current) lastTriggerRef.current.focus();
  };
  const closePrivacy = () => {
    setPrivacyOpen(false);
    if (privacyTriggerRef.current) privacyTriggerRef.current.focus();
  };
  const togglePrivacy = () => {
    if (privacyOpen) closePrivacy();
    else setPrivacyOpen(true);
  };

  React.useEffect(() => {
    if (!leaveOpen) return undefined;
    const node = leaveDialogRef.current;
    const sel = 'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href]';
    const first = node && (node.querySelector("[data-autofocus]") || node.querySelector(sel));
    if (first) first.focus();
    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeLeave();
        return;
      }
      if (e.key === "Tab" && node) {
        const items = Array.prototype.slice.call(node.querySelectorAll(sel));
        if (!items.length) return;
        const firstEl = items[0];
        const lastEl = items[items.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) { e.preventDefault(); lastEl.focus(); }
        else if (!e.shiftKey && document.activeElement === lastEl) { e.preventDefault(); firstEl.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [leaveOpen]);

  React.useEffect(() => {
    if (!privacyOpen) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closePrivacy();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [privacyOpen]);

  const selected = BALANCES.find((b) => b.id === form.leave_type_id) || BALANCES[0];
  const range = computeRange(form.start_date, form.end_date);

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.start_date) next.start_date = "Pick the first day of leave.";
    if (!form.end_date) next.end_date = "Pick the last day of leave.";
    if (form.start_date && form.end_date && form.end_date < form.start_date) next.end_date = "The end date falls before the start date.";
    if (!form.reason.trim()) next.reason = "Add a short reason — your manager sees it in the email.";
    setErrors(next);
    if (Object.keys(next).length) {
      setFormError({ title: "Check the highlighted fields", body: "Nothing has been sent yet. Your dates and reason are still here." });
      return;
    }
    const calc = computeRange(form.start_date, form.end_date);
    if (calc.days === 0) {
      setFormError({ title: "That range has no working days", body: "Every day you picked is a weekend or a public holiday, so there is nothing to deduct. Choose a range that includes a working day." });
      return;
    }
    if (calc.days > selected.balance) {
      setFormError({ title: "Not enough " + selected.name.toLowerCase() + " leave", body: "You have " + selected.balance.toFixed(1) + " days available and this request needs " + calc.days.toFixed(1) + ". Shorten the range or choose another leave type." });
      return;
    }
    const clash = requests.find(
      (r) => (r.status === "pending" || r.status === "approved") && !(form.end_date < r.start_date || form.start_date > r.end_date)
    );
    if (clash) {
      setFormError({ title: "These dates overlap a request you already have", body: clash.leave_type + " leave " + fmtDate(clash.start_date) + " – " + fmtDate(clash.end_date) + " is already " + clash.status + " (" + clash.id + "). Pick dates outside that range." });
      return;
    }
    setFormError(null);
    setSubmitting(true);
    timerRef.current = setTimeout(() => {
      const id = "LR-" + (2042 + requests.filter((r) => String(r.id).startsWith("LR-20")).length);
      setRequests((prev) => [
        { id, leave_type_id: selected.id, leave_type: selected.name, start_date: form.start_date, end_date: form.end_date, days_deducted: calc.days, status: "pending", decision_reason: null, reason: form.reason.trim(), isNew: true },
        ...prev,
      ]);
      setSubmitting(false);
      setLeaveOpen(false);
      setForm({ leave_type_id: "lt-casual", start_date: "", end_date: "", reason: "" });
      setBanner({ id, days: calc.days, type: selected.name });
      if (lastTriggerRef.current) lastTriggerRef.current.focus();
    }, 650);
  };

  const statusChip = (status) => {
    const map = {
      approved: { label: "Approved", Icon: Icons.CheckCircle, color: ACCENT, bg: hexToRgba(ACCENT, 0.14), border: hexToRgba(ACCENT, 0.38) },
      pending: { label: "Pending", Icon: Icons.Clock, color: INK, bg: SURFACE_HI, border: HAIRLINE },
      rejected: { label: "Rejected", Icon: Icons.X, color: MUTED, bg: "transparent", border: HAIRLINE },
    };
    const s = map[status] || map.pending;
    const I = s.Icon;
    return (
      <Badge
        className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[12px]"
        style={{ backgroundColor: s.bg, color: s.color, border: "1px solid " + s.border, borderRadius: 999, fontFamily: brand.fontBody }}
      >
        <I className="h-3.5 w-3.5" aria-hidden="true" />
        {s.label}
      </Badge>
    );
  };

  const labelStyle = { fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: MUTED, fontFamily: brand.fontBody };
  const panelStyle = { backgroundColor: SURFACE, border: "1px solid " + HAIRLINE, borderRadius: RADIUS };
  const h2Style = { fontFamily: brand.fontHeading, color: INK, fontSize: 24, lineHeight: 1.25 };
  const numStyle = { fontVariantNumeric: "tabular-nums" };

  const css = `
    @keyframes vl-row-in { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: none; } }
    @keyframes vl-dialog-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }
    @keyframes vl-fade-in { from { opacity: 0; } to { opacity: 1; } }
    @keyframes vl-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
    .vl-f:focus-visible { outline: 2px solid ${ACCENT}; outline-offset: 2px; }
    .vl-row { transition: background-color 160ms ease; }
    .vl-row:hover { background-color: rgba(255,255,255,0.035); }
    .vl-new { animation: vl-row-in 340ms ease-out both; }
    .vl-dot { animation: vl-pulse 2.4s ease-in-out infinite; }
    .vl-dialog { animation: vl-dialog-in 180ms ease-out both; }
    .vl-scrim { animation: vl-fade-in 140ms ease-out both; }
    .vl-link { transition: color 140ms ease, border-color 140ms ease; }
    @media (prefers-reduced-motion: reduce) {
      .vl-new, .vl-dialog, .vl-scrim, .vl-dot { animation: none !important; }
      .vl-row, .vl-link { transition: none !important; }
    }
  `;

  return (
    <div style={{ fontFamily: brand.fontBody, color: INK }} className="mx-auto w-full max-w-[1180px] px-4 pb-16 pt-8 sm:px-6">
      <style>{css}</style>

      {/* Row 1 — page title */}
      <header data-wf="b-0-0" className="mb-8">
        <div style={{ height: 1, width: 56, backgroundColor: ACCENT }} className="mb-4" />
        <h1 style={{ fontFamily: brand.fontHeading, fontSize: 38, lineHeight: 1.15, color: INK }}>My Dashboard</h1>
        <p className="mt-2 text-[14px]" style={{ color: MUTED, ...numStyle }}>
          {ME.first_name} {ME.last_name} · {ME.employee_ref} · {ME.designation}, {ME.department} · reports to {ME.manager}
        </p>
      </header>

      {/* Row 2 — today + check in / check out */}
      <div className="grid grid-cols-12 gap-4">
        <Card data-wf="b-1-0" className="col-span-12 lg:col-span-6" style={{ ...panelStyle, borderLeft: "2px solid " + ACCENT }}>
          <CardContent className="px-6 py-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p style={labelStyle}>Today</p>
                <h2 className="mt-2" style={{ ...h2Style, fontSize: 26 }}>{fmtDayDate(TODAY_ISO)}</h2>
              </div>
              <span className="inline-flex items-center gap-2 px-2.5 py-1 text-[11px]"
                style={{ ...labelStyle, fontSize: 10, border: "1px solid " + HAIRLINE, borderRadius: 999, color: MUTED }}>
                <Icons.Clock className="h-3.5 w-3.5" aria-hidden="true" />
                Synced {now}
              </span>
            </div>

            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: INK, ...numStyle }}>
              {openSession ? (
                <>
                  <span className="vl-dot mr-2 inline-block h-2 w-2 rounded-full align-middle" style={{ backgroundColor: ACCENT }} aria-hidden="true" />
                  Checked in {openSession.check_in}, not yet checked out —{" "}
                  <strong style={{ color: ACCENT, fontWeight: 600 }}>{fmtDur(elapsed)} elapsed</strong>.
                </>
              ) : (
                <>
                  Checked in {closedToday[0] ? closedToday[0].check_in : "—"}, checked out {closedToday[0] ? closedToday[0].check_out : "—"} —{" "}
                  <strong style={{ color: ACCENT, fontWeight: 600 }}>{fmtDur(closedToday.reduce((s, r) => s + (r.worked_minutes || 0), 0))} recorded</strong> today.
                </>
              )}
            </p>

            <p className="mt-2 text-[13px]" style={{ color: MUTED }}>
              Timestamps only — this app records no location and no biometric data.
            </p>

            {notice ? (
              <div
                className="vl-new mt-4 flex items-start gap-2.5 px-3 py-2.5"
                role="status"
                style={{
                  borderRadius: RADIUS,
                  border: "1px solid " + (notice.tone === "success" ? hexToRgba(ACCENT, 0.4) : HAIRLINE),
                  backgroundColor: notice.tone === "success" ? hexToRgba(ACCENT, 0.1) : SURFACE_HI,
                }}
              >
                {notice.tone === "success" ? (
                  <Icons.CheckCircle className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} aria-hidden="true" />
                ) : (
                  <Icons.AlertCircle className="mt-0.5 h-4 w-4 shrink-0" style={{ color: INK }} aria-hidden="true" />
                )}
                <span className="text-[13px] leading-relaxed" style={{ color: INK, ...numStyle }}>{notice.text}</span>
              </div>
            ) : null}
          </CardContent>
        </Card>

        <div className="col-span-6 lg:col-span-3 flex flex-col">
          <Button
            data-wf="b-1-1"
            type="button"
            onClick={handleCheckIn}
            disabled={!!openSession}
            aria-describedby="checkin-help"
            className="vl-f flex h-full min-h-[96px] w-full flex-col items-center justify-center gap-2 text-[15px]"
            style={{
              backgroundColor: openSession ? "transparent" : SURFACE_HI,
              color: openSession ? MUTED : INK,
              border: "1px solid " + (openSession ? HAIRLINE_SOFT : HAIRLINE),
              borderRadius: RADIUS,
              opacity: openSession ? 0.6 : 1,
              cursor: openSession ? "not-allowed" : "pointer",
            }}
          >
            <Icons.ArrowRight className="h-4 w-4" aria-hidden="true" />
            Check in
          </Button>
          <p id="checkin-help" className="mt-2 text-[12px] leading-snug" style={{ color: MUTED, ...numStyle }}>
            {openSession ? "Open session since " + openSession.check_in + "." : "Starts a new session at " + now + "."}
          </p>
        </div>

        <div className="col-span-6 lg:col-span-3 flex flex-col">
          <Button
            data-wf="b-1-2"
            type="button"
            onClick={handleCheckOut}
            disabled={!openSession}
            aria-describedby="checkout-help"
            className="vl-f flex h-full min-h-[96px] w-full flex-col items-center justify-center gap-2 text-[15px] font-medium"
            style={{
              backgroundColor: openSession ? ACCENT : "transparent",
              color: openSession ? CANVAS : MUTED,
              border: "1px solid " + (openSession ? ACCENT : HAIRLINE_SOFT),
              borderRadius: RADIUS,
              opacity: openSession ? 1 : 0.6,
              cursor: openSession ? "pointer" : "not-allowed",
            }}
          >
            <Icons.Check className="h-4 w-4" aria-hidden="true" />
            Check out
          </Button>
          <p id="checkout-help" className="mt-2 text-[12px] leading-snug" style={{ color: MUTED, ...numStyle }}>
            {openSession ? "Closes the 09:12 session and saves the duration." : "Already closed — check in again to start a session."}
          </p>
        </div>
      </div>

      {/* Row 3 — balances + apply */}
      <div className="mt-10 grid grid-cols-12 gap-4">
        <section data-wf="b-2-0" className="col-span-12 lg:col-span-8">
          <h2 style={h2Style}>My leave balances 2026</h2>
          <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {BALANCES.map((b, i) => {
              const pct = Math.max(2, Math.round((b.balance / b.annual_balance) * 100));
              return (
                <li key={b.id} data-wf={"i-2-0-" + i} className="px-5 py-5" style={panelStyle}>
                  <p style={labelStyle}>{b.name}</p>
                  <p className="mt-3 flex items-baseline gap-1.5" style={{ fontFamily: brand.fontHeading, ...numStyle }}>
                    <span style={{ fontSize: 34, color: ACCENT, lineHeight: 1 }}>{b.balance.toFixed(1)}</span>
                    <span className="text-[13px]" style={{ color: MUTED, fontFamily: brand.fontBody }}>days</span>
                  </p>
                  <div className="mt-4 h-[3px] w-full" style={{ backgroundColor: HAIRLINE_SOFT, borderRadius: 999 }} aria-hidden="true">
                    <div style={{ width: pct + "%", height: "100%", backgroundColor: ACCENT, borderRadius: 999 }} />
                  </div>
                  <p className="mt-3 text-[12px] leading-snug" style={{ color: MUTED, ...numStyle }}>
                    {b.balance.toFixed(1)} of {b.annual_balance.toFixed(1)} left · {b.accrual_rule}
                  </p>
                </li>
              );
            })}
          </ul>
        </section>

        <div className="col-span-12 lg:col-span-4 flex flex-col">
          <div className="hidden lg:block" style={{ height: 36 }} aria-hidden="true" />
          <Button
            data-wf="b-2-1"
            ref={leaveTriggerRef}
            type="button"
            onClick={openLeave}
            aria-haspopup="dialog"
            className="vl-f flex w-full flex-1 flex-col items-center justify-center gap-3 px-6 py-8"
            style={{ backgroundColor: ACCENT, color: CANVAS, border: "1px solid " + ACCENT, borderRadius: RADIUS }}
          >
            <Icons.Plus className="h-5 w-5" aria-hidden="true" />
            <span style={{ fontFamily: brand.fontHeading, fontSize: 22 }}>Apply for leave</span>
            <span className="text-[12px]" style={{ opacity: 0.8 }}>Casual, sick or earned</span>
          </Button>
        </div>
      </div>

      {/* Row 4 — attendance */}
      <section data-wf="b-3-0" className="mt-12">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 style={h2Style}>My recent attendance</h2>
            <p className="mt-1.5 text-[13px]" style={{ color: MUTED }}>Your own records only — last 8 working days.</p>
          </div>
          <span className="inline-flex items-center gap-2 px-2.5 py-1" style={{ ...labelStyle, fontSize: 10, border: "1px solid " + HAIRLINE, borderRadius: 999 }}>
            <Icons.Clock className="h-3 w-3" aria-hidden="true" />
            Updated {now}
          </span>
        </div>

        <div style={{ ...panelStyle, overflow: "hidden" }}>
          {attendance.length === 0 ? (
            <div className="p-8">
              <Empty
                title="No attendance recorded yet"
                description="Your sessions will appear here the first time you check in. Use Check in above to start today."
              />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table className="w-full" style={{ ...numStyle, borderCollapse: "collapse" }}>
                <THead>
                  <TR style={{ borderBottom: "1px solid " + HAIRLINE }}>
                    <TH data-wf="i-3-0-0" className="px-5 py-3 text-left" style={labelStyle} scope="col">Date</TH>
                    <TH data-wf="i-3-0-1" className="px-5 py-3 text-left" style={labelStyle} scope="col">Check-in</TH>
                    <TH data-wf="i-3-0-2" className="px-5 py-3 text-left" style={labelStyle} scope="col">Check-out</TH>
                    <TH data-wf="i-3-0-3" className="px-5 py-3 text-right" style={{ ...labelStyle, textAlign: "right" }} scope="col">Worked hours</TH>
                  </TR>
                </THead>
                <TBody>
                  {attendance.map((r, idx) => {
                    const isToday = r.work_date === TODAY_ISO;
                    return (
                      <TR
                        key={r.id}
                        className={"vl-row " + (r.isNew ? "vl-new" : "")}
                        style={{ borderBottom: idx === attendance.length - 1 ? "none" : "1px solid " + HAIRLINE_SOFT }}
                      >
                        <TD className="px-5 py-3.5 text-[14px]" style={{ color: INK }}>
                          {fmtDayDate(r.work_date)}
                          {isToday ? (
                            <span className="ml-2 align-middle text-[11px]" style={{ color: ACCENT, letterSpacing: "0.1em", textTransform: "uppercase" }}>Today</span>
                          ) : null}
                          {r.note ? <span className="block text-[12px]" style={{ color: MUTED }}>{r.note}</span> : null}
                        </TD>
                        <TD className="px-5 py-3.5 text-[14px]" style={{ color: r.check_in ? INK : MUTED }}>{r.check_in || "—"}</TD>
                        <TD className="px-5 py-3.5 text-[14px]" style={{ color: r.check_out ? INK : MUTED }}>
                          {r.check_out || (isToday && !r.check_out && r.check_in ? "Open" : "—")}
                        </TD>
                        <TD className="px-5 py-3.5 text-right text-[14px]" style={{ color: r.worked_minutes ? INK : MUTED }}>
                          {r.worked_minutes !== null && r.worked_minutes !== undefined
                            ? fmtDur(r.worked_minutes)
                            : isToday && r.check_in && !r.check_out
                            ? fmtDur(elapsed) + " so far"
                            : "—"}
                        </TD>
                      </TR>
                    );
                  })}
                </TBody>
              </Table>
            </div>
          )}
        </div>
      </section>

      {/* Row 5 — leave requests */}
      <section data-wf="b-4-0" className="mt-12">
        <h2 style={h2Style}>My leave requests</h2>
        <p className="mt-1.5 text-[13px]" style={{ color: MUTED }}>
          Every request you have raised this year, newest first.
        </p>

        {banner ? (
          <div
            className="vl-new mt-4 flex items-start justify-between gap-4 px-4 py-3"
            role="status"
            style={{ borderRadius: RADIUS, border: "1px solid " + hexToRgba(ACCENT, 0.4), backgroundColor: hexToRgba(ACCENT, 0.1) }}
          >
            <div className="flex items-start gap-2.5">
              <Icons.CheckCircle className="mt-0.5 h-4 w-4 shrink-0" style={{ color: ACCENT }} aria-hidden="true" />
              <p className="text-[13px] leading-relaxed" style={{ color: INK, ...numStyle }}>
                Request <strong style={{ color: ACCENT }}>{banner.id}</strong> sent — {banner.days.toFixed(1)} days of {banner.type.toLowerCase()} leave.
                {" "}{ME.manager} has been emailed and you will be emailed with the decision.
              </p>
            </div>
            <Button
              type="button"
              onClick={() => setBanner(null)}
              aria-label="Dismiss confirmation"
              className="vl-f shrink-0 p-1.5"
              style={{ backgroundColor: "transparent", color: MUTED, border: "1px solid " + HAIRLINE, borderRadius: RADIUS }}
            >
              <Icons.X className="h-3.5 w-3.5" aria-hidden="true" />
            </Button>
          </div>
        ) : null}

        <div className="mt-4" style={{ ...panelStyle, overflow: "hidden" }}>
          {requests.length === 0 ? (
            <div className="p-8">
              <Empty
                title="You haven't applied for leave yet"
                description="Requests you send go to Priya Nandakumar for a decision, and show up here with their status and any reason given."
                action={
                  <Button type="button" onClick={openLeave} className="vl-f px-4 py-2" style={{ backgroundColor: ACCENT, color: CANVAS, borderRadius: RADIUS }}>
                    Apply for leave
                  </Button>
                }
              />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table className="w-full" style={{ ...numStyle, borderCollapse: "collapse" }}>
                <THead>
                  <TR style={{ borderBottom: "1px solid " + HAIRLINE }}>
                    <TH data-wf="i-4-0-0" className="px-5 py-3 text-left" style={labelStyle} scope="col">Leave type</TH>
                    <TH data-wf="i-4-0-1" className="px-5 py-3 text-left" style={labelStyle} scope="col">Start date</TH>
                    <TH data-wf="i-4-0-2" className="px-5 py-3 text-left" style={labelStyle} scope="col">End date</TH>
                    <TH data-wf="i-4-0-3" className="px-5 py-3 text-right" style={{ ...labelStyle, textAlign: "right" }} scope="col">Days deducted</TH>
                    <TH data-wf="i-4-0-4" className="px-5 py-3 text-left" style={labelStyle} scope="col">Status</TH>
                    <TH data-wf="i-4-0-5" className="px-5 py-3 text-left" style={labelStyle} scope="col">Decision reason</TH>
                  </TR>
                </THead>
                <TBody>
                  {requests.map((r, idx) => (
                    <TR
                      key={r.id}
                      className={"vl-row " + (r.isNew ? "vl-new" : "")}
                      style={{ borderBottom: idx === requests.length - 1 ? "none" : "1px solid " + HAIRLINE_SOFT }}
                    >
                      <TD className="px-5 py-3.5 text-[14px]" style={{ color: INK }}>
                        {r.leave_type}
                        <span className="block text-[12px]" style={{ color: ACCENT }}>{r.id}</span>
                      </TD>
                      <TD className="px-5 py-3.5 text-[14px]" style={{ color: INK }}>{fmtDate(r.start_date)}</TD>
                      <TD className="px-5 py-3.5 text-[14px]" style={{ color: INK }}>{fmtDate(r.end_date)}</TD>
                      <TD className="px-5 py-3.5 text-right text-[14px]" style={{ color: r.days_deducted > 0 ? INK : MUTED }}>
                        {r.days_deducted.toFixed(1)}
                      </TD>
                      <TD className="px-5 py-3.5">{statusChip(r.status)}</TD>
                      <TD className="px-5 py-3.5 text-[13px] leading-relaxed" style={{ color: r.decision_reason ? INK : MUTED, maxWidth: 280 }}>
                        {r.decision_reason || (r.status === "pending" ? "Awaiting " + ME.manager + " — emailed" : "No reason given")}
                      </TD>
                    </TR>
                  ))}
                </TBody>
              </Table>
            </div>
          )}
        </div>
      </section>

      {/* Row 6 — notifications note, privacy, profile */}
      <div className="mt-10">
        <Separator className="mb-6" />
        <div className="grid grid-cols-12 items-center gap-4">
          <p data-wf="b-5-0" className="col-span-12 text-[13px] leading-relaxed md:col-span-5" style={{ color: MUTED, maxWidth: "62ch" }}>
            Your manager is emailed when you submit a request, and you are emailed as soon as it is approved or rejected.
          </p>
          <div className="col-span-6 md:col-span-3">
            <Button
              data-wf="b-5-1"
              ref={privacyTriggerRef}
              type="button"
              onClick={togglePrivacy}
              aria-expanded={privacyOpen}
              aria-controls="privacy-panel"
              className="vl-f vl-link inline-flex items-center gap-2 px-0 py-2 text-[14px]"
              style={{ backgroundColor: "transparent", color: INK, border: "none", borderBottom: "1px solid " + hexToRgba(ACCENT, 0.5), borderRadius: 0 }}
            >
              <Icons.FileText className="h-4 w-4" style={{ color: ACCENT }} aria-hidden="true" />
              Privacy notice v{PRIVACY.version}
            </Button>
          </div>
          <div className="col-span-6 md:col-span-4 md:text-right">
            <Button
              data-wf="b-5-2"
              type="button"
              onClick={() => navigate("my-profile")}
              className="vl-f vl-link inline-flex items-center gap-2 px-0 py-2 text-[14px]"
              style={{ backgroundColor: "transparent", color: INK, border: "none", borderBottom: "1px solid " + hexToRgba(ACCENT, 0.5), borderRadius: 0 }}
            >
              View and correct my profile
              <Icons.ChevronRight className="h-4 w-4" style={{ color: ACCENT }} aria-hidden="true" />
            </Button>
          </div>
        </div>

        {privacyOpen ? (
          <section
            id="privacy-panel"
            aria-labelledby="privacy-title"
            className="vl-new mt-6 px-6 py-6"
            style={panelStyle}
          >
            <p style={labelStyle}>Version {PRIVACY.version} · published {fmtDate(PRIVACY.published_at)}</p>
            <h2 id="privacy-title" className="mt-2" style={{ ...h2Style, fontSize: 26 }}>How we use your data</h2>
            <div className="mt-4" style={{ height: 1, width: 48, backgroundColor: ACCENT }} aria-hidden="true" />
            <div className="pt-5">
              {PRIVACY.paragraphs.map((p, i) => (
                <p key={i} className="mb-4 text-[14px] leading-relaxed" style={{ color: i === 0 ? INK : MUTED, maxWidth: "68ch" }}>{p}</p>
              ))}
            </div>
            <p className="text-[12px]" style={{ color: MUTED }}>
              Press Escape, or the Privacy notice link above, to close this notice.
            </p>
          </section>
        ) : null}
      </div>

      {/* Row 7 — apply for leave modal */}
      {leaveOpen ? (
        <div
          data-wf="b-6-0"
          className="vl-scrim fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 sm:p-8"
          style={{ backgroundColor: "rgba(6,12,9,0.72)" }}
          onMouseDown={(e) => { if (e.target === e.currentTarget) closeLeave(); }}
        >
          <div
            ref={leaveDialogRef}
            className="vl-dialog w-full max-w-[560px]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="leave-dialog-title"
            style={{ backgroundColor: CANVAS, border: "1px solid " + HAIRLINE, borderRadius: RADIUS, boxShadow: "0 28px 70px rgba(0,0,0,0.6)" }}
          >
            <div style={{ backgroundColor: SURFACE, borderRadius: RADIUS }}>
              <div className="flex items-start justify-between gap-4 px-6 pt-6">
                <div>
                  <p style={labelStyle}>Leave request</p>
                  <h2 id="leave-dialog-title" className="mt-2" style={{ ...h2Style, fontSize: 26 }}>Apply for leave</h2>
                </div>
                <Button
                  type="button"
                  onClick={closeLeave}
                  aria-label="Close apply for leave"
                  className="vl-f p-2"
                  style={{ backgroundColor: "transparent", color: MUTED, border: "1px solid " + HAIRLINE, borderRadius: RADIUS }}
                >
                  <Icons.X className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>

              <div className="px-6 pt-4"><div style={{ height: 1, width: 48, backgroundColor: ACCENT }} /></div>

              <form onSubmit={handleSubmit} noValidate className="px-6 pb-6 pt-5">
                {formError ? (
                  <div
                    className="vl-new mb-5 flex items-start gap-2.5 px-4 py-3"
                    role="alert"
                    style={{ borderRadius: RADIUS, border: "1px solid " + HAIRLINE, backgroundColor: SURFACE_HI }}
                  >
                    <Icons.AlertCircle className="mt-0.5 h-4 w-4 shrink-0" style={{ color: INK }} aria-hidden="true" />
                    <div>
                      <p className="text-[13px] font-medium" style={{ color: INK }}>{formError.title}</p>
                      <p className="mt-1 text-[13px] leading-relaxed" style={{ color: MUTED, ...numStyle }}>{formError.body}</p>
                    </div>
                  </div>
                ) : null}

                <div className="mb-5">
                  <Label htmlFor="leave_type_id" className="mb-2 block" style={labelStyle}>Leave type</Label>
                  <Select
                    data-wf="i-6-0-0"
                    id="leave_type_id"
                    data-autofocus="true"
                    value={form.leave_type_id}
                    onChange={(e) => setForm({ ...form, leave_type_id: e.target.value })}
                    className="vl-f w-full px-3 py-2.5 text-[14px]"
                    style={{ backgroundColor: CANVAS, color: INK, border: "1px solid " + HAIRLINE, borderRadius: RADIUS, ...numStyle }}
                  >
                    {BALANCES.map((b) => (
                      <option key={b.id} value={b.id}>{b.name} ({b.balance.toFixed(1)} days available)</option>
                    ))}
                  </Select>
                </div>

                <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="start_date" className="mb-2 block" style={labelStyle}>Start date</Label>
                    <Input
                      data-wf="i-6-0-1"
                      id="start_date"
                      type="date"
                      value={form.start_date}
                      onChange={(e) => setForm({ ...form, start_date: e.target.value })}
                      aria-invalid={errors.start_date ? "true" : undefined}
                      aria-describedby={errors.start_date ? "start_date-err" : undefined}
                      className="vl-f w-full px-3 py-2.5 text-[14px]"
                      style={{ backgroundColor: CANVAS, color: INK, border: "1px solid " + (errors.start_date ? hexToRgba(ACCENT, 0.65) : HAIRLINE), borderRadius: RADIUS, colorScheme: "dark", ...numStyle }}
                    />
                    {errors.start_date ? (
                      <p id="start_date-err" className="mt-1.5 flex items-center gap-1.5 text-[12px]" style={{ color: INK }}>
                        <Icons.AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />{errors.start_date}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <Label htmlFor="end_date" className="mb-2 block" style={labelStyle}>End date</Label>
                    <Input
                      data-wf="i-6-0-2"
                      id="end_date"
                      type="date"
                      value={form.end_date}
                      onChange={(e) => setForm({ ...form, end_date: e.target.value })}
                      aria-invalid={errors.end_date ? "true" : undefined}
                      aria-describedby={errors.end_date ? "end_date-err" : undefined}
                      className="vl-f w-full px-3 py-2.5 text-[14px]"
                      style={{ backgroundColor: CANVAS, color: INK, border: "1px solid " + (errors.end_date ? hexToRgba(ACCENT, 0.65) : HAIRLINE), borderRadius: RADIUS, colorScheme: "dark", ...numStyle }}
                    />
                    {errors.end_date ? (
                      <p id="end_date-err" className="mt-1.5 flex items-center gap-1.5 text-[12px]" style={{ color: INK }}>
                        <Icons.AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />{errors.end_date}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="mb-5">
                  <Label htmlFor="reason" className="mb-2 block" style={labelStyle}>Reason</Label>
                  <Textarea
                    data-wf="i-6-0-3"
                    id="reason"
                    rows={3}
                    value={form.reason}
                    onChange={(e) => setForm({ ...form, reason: e.target.value })}
                    placeholder="Travelling to Mangaluru for a family wedding"
                    aria-invalid={errors.reason ? "true" : undefined}
                    aria-describedby={errors.reason ? "reason-err" : undefined}
                    className="vl-f w-full px-3 py-2.5 text-[14px]"
                    style={{ backgroundColor: CANVAS, color: INK, border: "1px solid " + (errors.reason ? hexToRgba(ACCENT, 0.65) : HAIRLINE), borderRadius: RADIUS }}
                  />
                  {errors.reason ? (
                    <p id="reason-err" className="mt-1.5 flex items-center gap-1.5 text-[12px]" style={{ color: INK }}>
                      <Icons.AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />{errors.reason}
                    </p>
                  ) : null}
                </div>

                <p data-wf="i-6-0-4" className="text-[13px] leading-relaxed" style={{ color: MUTED, ...numStyle }}>
                  Holidays and weekend days in the range are not deducted.
                  {range.valid ? (
                    <span className="mt-2 block" style={{ color: INK }}>
                      <strong style={{ color: ACCENT }}>{range.days.toFixed(1)} days</strong> would be deducted from {selected.name.toLowerCase()} leave
                      {range.weekends > 0 ? " · " + range.weekends + " weekend day" + (range.weekends === 1 ? "" : "s") + " skipped" : ""}
                      {range.holidays.length > 0 ? " · " + range.holidays.join(", ") + " skipped" : ""}
                      . Balance after approval: {Math.max(0, selected.balance - range.days).toFixed(1)}.
                    </span>
                  ) : null}
                </p>

                <div className="mt-6 flex items-center justify-end gap-3">
                  <Button
                    type="button"
                    onClick={closeLeave}
                    className="vl-f px-4 py-2.5 text-[14px]"
                    style={{ backgroundColor: "transparent", color: MUTED, border: "1px solid " + HAIRLINE, borderRadius: RADIUS }}
                  >
                    Cancel
                  </Button>
                  <Button
                    data-wf="i-6-0-5"
                    type="submit"
                    disabled={submitting}
                    className="vl-f inline-flex items-center gap-2 px-5 py-2.5 text-[14px] font-medium"
                    style={{
                      backgroundColor: ACCENT,
                      color: CANVAS,
                      border: "1px solid " + ACCENT,
                      borderRadius: RADIUS,
                      opacity: submitting ? 0.7 : 1,
                      cursor: submitting ? "progress" : "pointer",
                    }}
                  >
                    {submitting ? (
                      <>
                        <Icons.Clock className="vl-dot h-4 w-4" aria-hidden="true" />
                        Sending to {ME.manager.split(" ")[0]}…
                      </>
                    ) : (
                      <>
                        <Icons.Check className="h-4 w-4" aria-hidden="true" />
                        Submit request
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
