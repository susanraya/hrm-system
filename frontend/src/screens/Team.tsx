// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Input, Textarea, Label, Select, Table, THead, TBody, TR, TH, TD, Avatar, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Check, X, ChevronRight, Users, Clock, ArrowLeft, ArrowRight, AlertCircle, CheckCircle } = Icons;

// ───────────────────────────────────────────────────────────────────────────
// My Team — manager leave approvals queue + team attendance (route: team)
// ───────────────────────────────────────────────────────────────────────────

const MANAGER = {
  name: "Mira Advani",
  designation: "Engineering Manager",
  department: "Engineering",
  reports: 4,
};

const DIRECT_REPORTS = [
  { id: "EMP-0142", name: "Ravi Kumar", designation: "Backend Engineer", work_email: "ravi.kumar@quorq.ai" },
  { id: "EMP-0168", name: "Ananya Iyer", designation: "Product Designer", work_email: "ananya.iyer@quorq.ai" },
  { id: "EMP-0175", name: "Priya Menon", designation: "Data Engineer", work_email: "priya.menon@quorq.ai" },
  { id: "EMP-0190", name: "Daniel Fernandes", designation: "QA Analyst", work_email: "daniel.fernandes@quorq.ai" },
];

const INITIAL_REQUESTS = [
  {
    id: "LR-2026-0481",
    employee: "Ravi Kumar",
    employee_id: "EMP-0142",
    work_email: "ravi.kumar@quorq.ai",
    designation: "Backend Engineer",
    leave_type: "Casual",
    start_date: "2026-11-04",
    end_date: "2026-11-05",
    days_deducted: 2,
    reason: "Family function in Mysuru.",
    created_at: "28 Oct 2026, 11:04",
    balance: 8,
    annual_balance: 12,
    email_deliverable: true,
    status: "pending",
  },
  {
    id: "LR-2026-0486",
    employee: "Ananya Iyer",
    employee_id: "EMP-0168",
    work_email: "ananya.iyer@quorq.ai",
    designation: "Product Designer",
    leave_type: "Sick",
    start_date: "2026-11-02",
    end_date: "2026-11-02",
    days_deducted: 1,
    reason: "Dental surgery — clinic note to follow.",
    created_at: "27 Oct 2026, 18:22",
    balance: 9,
    annual_balance: 10,
    email_deliverable: true,
    status: "pending",
  },
  {
    id: "LR-2026-0490",
    employee: "Daniel Fernandes",
    employee_id: "EMP-0190",
    work_email: "daniel.fernandes@quorq.ai",
    designation: "QA Analyst",
    leave_type: "Earned",
    start_date: "2026-11-16",
    end_date: "2026-11-20",
    days_deducted: 5,
    reason: "Family trip to Goa, booked in September. Diwali week is already covered by Priya.",
    created_at: "26 Oct 2026, 09:47",
    balance: 11,
    annual_balance: 18,
    email_deliverable: false,
    status: "pending",
  },
];

const ATTENDANCE = [
  { id: "AT-9031", employee: "Ravi Kumar", work_date: "2026-10-30", check_in: "09:08", check_out: null, worked_minutes: null, note: "Session open" },
  { id: "AT-9032", employee: "Ananya Iyer", work_date: "2026-10-30", check_in: "08:51", check_out: null, worked_minutes: null, note: "Session open" },
  { id: "AT-9033", employee: "Daniel Fernandes", work_date: "2026-10-30", check_in: "09:40", check_out: "13:05", worked_minutes: 205, note: null },
  { id: "AT-9034", employee: "Priya Menon", work_date: "2026-10-30", check_in: null, check_out: null, worked_minutes: null, note: "No check-in yet" },

  { id: "AT-8977", employee: "Ravi Kumar", work_date: "2026-10-29", check_in: "09:14", check_out: "18:02", worked_minutes: 528, note: null },
  { id: "AT-8978", employee: "Ananya Iyer", work_date: "2026-10-29", check_in: "08:57", check_out: "17:46", worked_minutes: 529, note: null },
  { id: "AT-8979", employee: "Priya Menon", work_date: "2026-10-29", check_in: "09:31", check_out: "18:20", worked_minutes: 529, note: null },
  { id: "AT-8980", employee: "Daniel Fernandes", work_date: "2026-10-29", check_in: "09:22", check_out: "17:58", worked_minutes: 516, note: null },

  { id: "AT-8921", employee: "Ravi Kumar", work_date: "2026-10-28", check_in: "09:05", check_out: "17:55", worked_minutes: 530, note: null },
  { id: "AT-8922", employee: "Ananya Iyer", work_date: "2026-10-28", check_in: "09:12", check_out: "18:30", worked_minutes: 558, note: null },
  { id: "AT-8923", employee: "Priya Menon", work_date: "2026-10-28", check_in: "09:48", check_out: "18:02", worked_minutes: 494, note: null },
  { id: "AT-8924", employee: "Daniel Fernandes", work_date: "2026-10-28", check_in: null, check_out: null, worked_minutes: null, note: "On approved sick leave" },

  { id: "AT-8866", employee: "Ravi Kumar", work_date: "2026-10-27", check_in: "08:58", check_out: "18:10", worked_minutes: 552, note: null },
  { id: "AT-8867", employee: "Ananya Iyer", work_date: "2026-10-27", check_in: "09:03", check_out: "17:36", worked_minutes: 513, note: null },
  { id: "AT-8868", employee: "Priya Menon", work_date: "2026-10-27", check_in: "09:20", check_out: "17:40", worked_minutes: 500, note: null },
  { id: "AT-8869", employee: "Daniel Fernandes", work_date: "2026-10-27", check_in: "09:10", check_out: "18:05", worked_minutes: 535, note: null },

  { id: "AT-8810", employee: "Ravi Kumar", work_date: "2026-10-26", check_in: "09:21", check_out: "17:49", worked_minutes: 508, note: null },
  { id: "AT-8811", employee: "Ananya Iyer", work_date: "2026-10-26", check_in: "09:06", check_out: "18:14", worked_minutes: 548, note: null },
  { id: "AT-8812", employee: "Priya Menon", work_date: "2026-10-26", check_in: "09:02", check_out: "17:33", worked_minutes: 511, note: null },
  { id: "AT-8813", employee: "Daniel Fernandes", work_date: "2026-10-26", check_in: "09:35", check_out: "18:21", worked_minutes: 526, note: null },

  { id: "AT-8744", employee: "Ravi Kumar", work_date: "2026-10-23", check_in: "09:11", check_out: "17:52", worked_minutes: 521, note: null },
  { id: "AT-8745", employee: "Priya Menon", work_date: "2026-10-23", check_in: "09:44", check_out: "18:31", worked_minutes: 527, note: null },

  { id: "AT-8502", employee: "Ananya Iyer", work_date: "2026-10-15", check_in: "09:00", check_out: "17:30", worked_minutes: 510, note: null },
  { id: "AT-8503", employee: "Daniel Fernandes", work_date: "2026-10-15", check_in: "09:25", check_out: "18:00", worked_minutes: 515, note: null },

  { id: "AT-8190", employee: "Ravi Kumar", work_date: "2026-10-05", check_in: "09:02", check_out: "17:58", worked_minutes: 536, note: null },
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function hexToRgba(hex, alpha) {
  const h = String(hex || "").replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(full, 16);
  if (isNaN(n)) return `rgba(255,255,255,${alpha})`;
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
}

function fmtDate(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${String(d).padStart(2, "0")} ${MONTHS[m - 1]} ${y}`;
}

function fmtDayName(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return WEEKDAYS[new Date(Date.UTC(y, m - 1, d)).getUTCDay()];
}

function fmtRange(startIso, endIso) {
  const [sy, sm, sd] = startIso.split("-").map(Number);
  const [ey, em, ed] = endIso.split("-").map(Number);
  if (startIso === endIso) return `${sd} ${MONTHS[sm - 1]} ${sy}`;
  if (sy === ey && sm === em) return `${sd}–${ed} ${MONTHS[sm - 1]} ${sy}`;
  return `${sd} ${MONTHS[sm - 1]} – ${ed} ${MONTHS[em - 1]} ${ey}`;
}

function fmtMinutes(mins) {
  return `${Math.floor(mins / 60)}h ${String(mins % 60).padStart(2, "0")}m`;
}

export default function Screen() {
  const ink = brand.primaryColor;
  const accent = brand.accentColor;
  const muted = brand.neutralColor;
  const canvas = brand.backgroundColor;
  const panel = hexToRgba(ink, 0.035);
  const panelHi = hexToRgba(ink, 0.06);
  const hair = hexToRgba(ink, 0.11);
  const hairSoft = hexToRgba(ink, 0.07);
  const r = brand.radius;

  const [tab, setTab] = React.useState("approvals");
  const [requests, setRequests] = React.useState(INITIAL_REQUESTS);
  const [openReq, setOpenReq] = React.useState(null);
  const [decisionReason, setDecisionReason] = React.useState("");
  const [modalError, setModalError] = React.useState("");
  const [saving, setSaving] = React.useState(null);
  const [notice, setNotice] = React.useState(null);

  const [from, setFrom] = React.useState("2026-10-01");
  const [to, setTo] = React.useState("2026-10-30");
  const [who, setWho] = React.useState("all");
  const [applied, setApplied] = React.useState({ from: "2026-10-01", to: "2026-10-30", who: "all" });
  const [rangeError, setRangeError] = React.useState("");
  const [loadingAttendance, setLoadingAttendance] = React.useState(false);

  const timers = React.useRef([]);
  const tabRefs = React.useRef([]);
  const dialogRef = React.useRef(null);
  const reasonRef = React.useRef(null);
  const lastTrigger = React.useRef(null);
  const firstRun = React.useRef(true);

  const defer = React.useCallback((fn, ms) => {
    const t = setTimeout(fn, ms);
    timers.current.push(t);
  }, []);

  React.useEffect(() => () => timers.current.forEach(clearTimeout), []);

  // Range validation + simulated fetch of GET /api/attendance/team
  React.useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    if (from > to) {
      setRangeError("That range runs backwards — set “From” on or before “To”.");
      return;
    }
    setRangeError("");
    setLoadingAttendance(true);
    const t = setTimeout(() => {
      setApplied({ from, to, who });
      setLoadingAttendance(false);
    }, 480);
    timers.current.push(t);
    return () => clearTimeout(t);
  }, [from, to, who]);

  // Dialog: escape to close, focus management, simple focus wrap
  React.useEffect(() => {
    if (!openReq) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        closeDialog();
      }
      if (e.key === "Tab" && dialogRef.current) {
        const nodes = dialogRef.current.querySelectorAll(
          'button:not([disabled]), textarea, input, [href], select, [tabindex]:not([tabindex="-1"])'
        );
        if (!nodes.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey, true);
    const t = setTimeout(() => reasonRef.current && reasonRef.current.focus(), 40);
    timers.current.push(t);
    return () => {
      document.removeEventListener("keydown", onKey, true);
      clearTimeout(t);
    };
  }, [openReq]);

  function openDialog(req, el) {
    lastTrigger.current = el || null;
    setDecisionReason("");
    setModalError("");
    setOpenReq(req);
  }

  function closeDialog() {
    setOpenReq(null);
    setSaving(null);
    setModalError("");
    if (lastTrigger.current && lastTrigger.current.focus) lastTrigger.current.focus();
  }

  function decide(action) {
    if (!openReq) return;
    const reason = decisionReason.trim();
    if (action === "reject" && reason.length < 4) {
      setModalError("A reason is required to reject — the employee sees it on their request.");
      if (reasonRef.current) reasonRef.current.focus();
      return;
    }
    setModalError("");
    setSaving(action);
    const req = openReq;
    defer(() => {
      setRequests((rs) =>
        rs.map((x) =>
          x.id === req.id
            ? {
                ...x,
                status: action === "approve" ? "approved" : "rejected",
                decision_reason: reason,
                decided_by: MANAGER.name,
              }
            : x
        )
      );
      setSaving(null);
      setOpenReq(null);
      setDecisionReason("");
      if (lastTrigger.current && lastTrigger.current.focus) lastTrigger.current.focus();
      if (!req.email_deliverable) {
        setNotice({
          kind: "queued",
          title: `${action === "approve" ? "Approved" : "Rejected"} — ${req.employee}, ${req.id}`,
          body: `Decision saved. The outcome email to ${req.work_email} did not send; it is queued and logged for HR/admin to review.`,
        });
      } else if (action === "approve") {
        setNotice({
          kind: "success",
          title: `Approved — ${req.employee}, ${req.id}`,
          body: `${req.days_deducted} ${req.days_deducted === 1 ? "day" : "days"} deducted from the ${req.leave_type} balance (now ${req.balance - req.days_deducted} of ${req.annual_balance}). Outcome emailed to ${req.work_email}.`,
        });
      } else {
        setNotice({
          kind: "success",
          title: `Rejected — ${req.employee}, ${req.id}`,
          body: `No balance deducted. Your reason was emailed to ${req.work_email} and is visible on their request.`,
        });
      }
    }, 700);
  }

  const pending = requests.filter((r) => r.status === "pending");
  const decided = requests.filter((r) => r.status !== "pending");

  const attendanceRows = ATTENDANCE.filter(
    (a) =>
      a.work_date >= applied.from &&
      a.work_date <= applied.to &&
      (applied.who === "all" || a.employee === applied.who)
  );
  const worked = attendanceRows.filter((a) => a.worked_minutes != null);
  const avgMinutes = worked.length
    ? Math.round(worked.reduce((s, a) => s + a.worked_minutes, 0) / worked.length)
    : 0;

  const tabsMeta = [
    { key: "approvals", label: "Leave approvals", count: pending.length, wf: "i-1-0-0" },
    { key: "attendance", label: "Team attendance", count: null, wf: "i-1-0-1" },
  ];

  function onTabKey(e, idx) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = e.key === "ArrowRight" ? (idx + 1) % tabsMeta.length : (idx - 1 + tabsMeta.length) % tabsMeta.length;
    setTab(tabsMeta[next].key);
    const el = tabRefs.current[next];
    if (el) el.focus();
  }

  const css = `
    .vt *:focus { outline: none; }
    .vt [data-f]:focus-visible { outline: 2px solid ${accent}; outline-offset: 2px; border-radius: ${r}px; }
    @keyframes vtRise { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
    @keyframes vtFade { from { opacity: 0; } to { opacity: 1; } }
    @keyframes vtPulse { 0%,100% { opacity: .35; } 50% { opacity: .7; } }
    .vt-rise { animation: vtRise .3s cubic-bezier(.22,.61,.36,1) both; }
    .vt-fade { animation: vtFade .22s ease-out both; }
    .vt-skel { animation: vtPulse 1.4s ease-in-out infinite; }
    .vt-row { transition: background-color .18s ease; }
    .vt-row:hover { background-color: ${hexToRgba(ink, 0.045)}; }
    .vt-link { transition: color .15s ease, border-color .15s ease; }
    @media (prefers-reduced-motion: reduce) {
      .vt-rise, .vt-fade, .vt-skel { animation: none !important; }
      .vt-row, .vt-link { transition: none; }
    }
  `;

  const labelCls = "text-[11px] uppercase tracking-[0.16em]";
  const panelStyle = { backgroundColor: panel, border: `1px solid ${hair}`, borderRadius: r };

  function StatusWord({ status }) {
    const approved = status === "approved";
    return (
      <span
        className={`inline-flex items-center gap-1.5 ${labelCls}`}
        style={{ color: approved ? accent : muted }}
      >
        {approved ? (
          <Check className="h-3.5 w-3.5" aria-hidden="true" />
        ) : (
          <X className="h-3.5 w-3.5" aria-hidden="true" />
        )}
        {approved ? "Approved" : "Rejected"}
      </span>
    );
  }

  return (
    <div
      className="vt min-h-full w-full"
      style={{ backgroundColor: canvas, color: ink, fontFamily: brand.fontBody }}
    >
      <style>{css}</style>

      <div className="mx-auto w-full max-w-[1180px] px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
        {/* ── Row 1 — page title ────────────────────────────────────────── */}
        <header data-wf="b-0-0" className="mb-8">
          <p className={labelCls} style={{ color: accent }}>
            Manager view · {MANAGER.department}
          </p>
          <h1
            className="mt-3 text-[34px] leading-[1.15] sm:text-[40px]"
            style={{ fontFamily: brand.fontHeading, letterSpacing: "-0.01em" }}
          >
            My Team
          </h1>
          <div className="mt-4 h-px w-16" style={{ backgroundColor: accent }} aria-hidden="true" />
          <p className="mt-4 max-w-[62ch] text-sm leading-relaxed" style={{ color: muted }}>
            {MANAGER.name}, {MANAGER.designation} — {MANAGER.reports} direct reports. You can see and act
            on records for your reports only; everyone else is handled by HR/admin.
          </p>
        </header>

        {/* ── Row 2 — tabs ──────────────────────────────────────────────── */}
        <div data-wf="b-1-0" className="mb-8" style={{ borderBottom: `1px solid ${hair}` }}>
          <div role="tablist" aria-label="My Team sections" className="flex gap-1">
            {tabsMeta.map((t, i) => {
              const active = tab === t.key;
              return (
                <button
                  key={t.key}
                  data-wf={t.wf}
                  data-f
                  ref={(el) => (tabRefs.current[i] = el)}
                  role="tab"
                  type="button"
                  id={`tab-${t.key}`}
                  aria-selected={active}
                  aria-controls={`panel-${t.key}`}
                  tabIndex={active ? 0 : -1}
                  onClick={() => setTab(t.key)}
                  onKeyDown={(e) => onTabKey(e, i)}
                  className="vt-link relative -mb-px flex min-h-[44px] items-center gap-2 px-4 pb-3 pt-2 text-sm"
                  style={{
                    color: active ? ink : muted,
                    borderBottom: `1px solid ${active ? accent : "transparent"}`,
                    fontWeight: active ? 500 : 400,
                  }}
                >
                  {t.label}
                  {t.count != null && (
                    <span
                      className="inline-flex h-5 min-w-[20px] items-center justify-center px-1.5 text-[11px]"
                      style={{
                        fontVariantNumeric: "tabular-nums",
                        borderRadius: r,
                        border: `1px solid ${active ? hexToRgba(accent, 0.5) : hair}`,
                        color: active ? accent : muted,
                        backgroundColor: active ? hexToRgba(accent, 0.1) : "transparent",
                      }}
                    >
                      {t.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Leave approvals panel ─────────────────────────────────────── */}
        {tab === "approvals" && (
          <div id="panel-approvals" role="tabpanel" aria-labelledby="tab-approvals" tabIndex={-1}>
            {/* Row 3 — pending requests table */}
            <section data-wf="b-2-0" className="vt-fade" style={panelStyle}>
              <div className="flex flex-wrap items-end justify-between gap-4 px-6 pb-5 pt-6 sm:px-8">
                <div>
                  <h2 className="text-[21px]" style={{ fontFamily: brand.fontHeading }}>
                    Pending requests from my direct reports
                  </h2>
                  <p className="mt-2 max-w-[60ch] text-[13px] leading-relaxed" style={{ color: muted }}>
                    Routed to you as reporting manager. Open a request to approve or reject it with a reason.
                  </p>
                </div>
                <span
                  className={labelCls}
                  style={{ color: muted, fontVariantNumeric: "tabular-nums" }}
                >
                  {pending.length} awaiting you
                </span>
              </div>

              {notice && (
                <div className="px-6 pb-5 sm:px-8">
                  <div
                    className="vt-rise flex items-start gap-3 p-4"
                    role="status"
                    style={{
                      borderRadius: r,
                      border: `1px solid ${notice.kind === "success" ? hexToRgba(accent, 0.38) : hair}`,
                      backgroundColor: notice.kind === "success" ? hexToRgba(accent, 0.09) : panelHi,
                    }}
                  >
                    {notice.kind === "success" ? (
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0" style={{ color: accent }} aria-hidden="true" />
                    ) : (
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" style={{ color: muted }} aria-hidden="true" />
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="text-sm" style={{ color: ink }}>{notice.title}</p>
                      <p className="mt-1 text-[13px] leading-relaxed" style={{ color: muted }}>
                        {notice.body}
                      </p>
                    </div>
                    <button
                      type="button"
                      data-f
                      aria-label="Dismiss this confirmation"
                      onClick={() => setNotice(null)}
                      className="vt-link -m-2 flex h-9 w-9 items-center justify-center"
                      style={{ color: muted }}
                    >
                      <X className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              )}

              <div style={{ borderTop: `1px solid ${hairSoft}` }}>
                {pending.length === 0 ? (
                  <div className="px-6 py-12 sm:px-8">
                    <Empty
                      title="The queue is clear"
                      description="No leave requests are waiting on you. When a direct report applies, the request lands here and you are emailed straight away."
                      action={
                        <Button
                          data-f
                          onClick={() => setTab("attendance")}
                          className="min-h-[44px] px-5 text-sm"
                          style={{
                            backgroundColor: "transparent",
                            color: ink,
                            border: `1px solid ${hair}`,
                            borderRadius: r,
                          }}
                        >
                          Review team attendance
                        </Button>
                      }
                    />
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table className="w-full min-w-[980px]" style={{ fontVariantNumeric: "tabular-nums" }}>
                      <THead>
                        <TR style={{ borderBottom: `1px solid ${hair}` }}>
                          <TH data-wf="i-2-0-0" className={`px-6 py-3 text-left sm:px-8 ${labelCls}`} style={{ color: muted, fontWeight: 400 }}>Employee</TH>
                          <TH data-wf="i-2-0-1" className={`px-4 py-3 text-left ${labelCls}`} style={{ color: muted, fontWeight: 400 }}>Leave type</TH>
                          <TH data-wf="i-2-0-2" className={`px-4 py-3 text-left ${labelCls}`} style={{ color: muted, fontWeight: 400 }}>Start date</TH>
                          <TH data-wf="i-2-0-3" className={`px-4 py-3 text-left ${labelCls}`} style={{ color: muted, fontWeight: 400 }}>End date</TH>
                          <TH data-wf="i-2-0-4" className={`px-4 py-3 text-right ${labelCls}`} style={{ color: muted, fontWeight: 400 }}>Days</TH>
                          <TH data-wf="i-2-0-5" className={`px-4 py-3 text-left ${labelCls}`} style={{ color: muted, fontWeight: 400 }}>Reason</TH>
                          <TH data-wf="i-2-0-6" className={`px-4 py-3 text-left ${labelCls}`} style={{ color: muted, fontWeight: 400 }}>Submitted</TH>
                          <TH className="px-6 py-3 text-right sm:px-8">
                            <span className="sr-only">Decision</span>
                          </TH>
                        </TR>
                      </THead>
                      <TBody>
                        {pending.map((req) => (
                          <TR
                            key={req.id}
                            className="vt-row align-top"
                            style={{ borderBottom: `1px solid ${hairSoft}` }}
                          >
                            <TD className="px-6 py-5 sm:px-8">
                              <div className="flex items-center gap-3">
                                <Avatar name={req.employee} className="h-8 w-8 shrink-0" />
                                <div className="min-w-0">
                                  <p className="truncate text-[15px]" style={{ color: ink }}>{req.employee}</p>
                                  <p className="mt-0.5 truncate text-xs" style={{ color: muted }}>
                                    {req.designation}
                                  </p>
                                </div>
                              </div>
                            </TD>
                            <TD className="px-4 py-5 text-sm" style={{ color: ink }}>
                              {req.leave_type}
                              <span className="mt-1 block text-xs" style={{ color: muted }}>
                                {req.balance} of {req.annual_balance} left
                              </span>
                            </TD>
                            <TD className="px-4 py-5 text-sm" style={{ color: ink }}>{fmtDate(req.start_date)}</TD>
                            <TD className="px-4 py-5 text-sm" style={{ color: ink }}>{fmtDate(req.end_date)}</TD>
                            <TD className="px-4 py-5 text-right text-sm" style={{ color: accent }}>
                              {req.days_deducted}
                            </TD>
                            <TD className="px-4 py-5 text-[13px] leading-relaxed" style={{ color: muted, maxWidth: 230 }}>
                              {req.reason}
                            </TD>
                            <TD className="px-4 py-5 text-[13px]" style={{ color: muted }}>
                              {req.created_at}
                              <span className="mt-1 block text-[11px] tracking-[0.1em]" style={{ color: hexToRgba(accent, 0.85) }}>
                                {req.id}
                              </span>
                            </TD>
                            <TD className="px-6 py-5 text-right sm:px-8">
                              <Button
                                data-f
                                type="button"
                                onClick={(e) => openDialog(req, e.currentTarget)}
                                className="vt-link inline-flex min-h-[40px] items-center gap-1.5 px-4 text-[13px]"
                                style={{
                                  backgroundColor: "transparent",
                                  color: ink,
                                  border: `1px solid ${hair}`,
                                  borderRadius: r,
                                }}
                              >
                                Decide
                                <ChevronRight className="h-4 w-4" aria-hidden="true" />
                              </Button>
                            </TD>
                          </TR>
                        ))}
                      </TBody>
                    </Table>
                  </div>
                )}
              </div>

              {decided.length > 0 && (
                <div className="px-6 pb-7 pt-6 sm:px-8" style={{ borderTop: `1px solid ${hairSoft}` }}>
                  <h3 className={labelCls} style={{ color: muted }}>Decided in this session</h3>
                  <ul className="mt-4 space-y-3">
                    {decided.map((d) => (
                      <li
                        key={d.id}
                        className="vt-rise flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 pb-3"
                        style={{ borderBottom: `1px solid ${hairSoft}`, fontVariantNumeric: "tabular-nums" }}
                      >
                        <span className="text-sm" style={{ color: ink }}>
                          <span className="mr-3 text-[11px] tracking-[0.1em]" style={{ color: hexToRgba(accent, 0.85) }}>
                            {d.id}
                          </span>
                          {d.employee} · {d.leave_type} · {fmtRange(d.start_date, d.end_date)}
                        </span>
                        <span className="flex items-center gap-4">
                          <span className="text-[13px]" style={{ color: muted }}>
                            {d.status === "approved"
                              ? `−${d.days_deducted} ${d.days_deducted === 1 ? "day" : "days"}`
                              : "No deduction"}
                          </span>
                          <StatusWord status={d.status} />
                        </span>
                        {d.decision_reason && (
                          <span className="w-full text-[13px] leading-relaxed" style={{ color: muted }}>
                            “{d.decision_reason}”
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            {/* Row 5 — helper text */}
            <p
              data-wf="b-4-0"
              className="mt-5 max-w-[72ch] text-[13px] leading-relaxed"
              style={{ color: muted }}
            >
              Approving deducts the days from the employee's balance. The employee is emailed the outcome and
              the reason.
            </p>
          </div>
        )}

        {/* ── Team attendance panel ─────────────────────────────────────── */}
        {tab === "attendance" && (
          <div id="panel-attendance" role="tabpanel" aria-labelledby="tab-attendance" tabIndex={-1}>
            {/* Row 6 — filter bar */}
            <section data-wf="b-5-0" className="vt-fade p-6 sm:p-7" style={panelStyle}>
              <div className="grid gap-5 sm:grid-cols-3">
                <div>
                  <Label htmlFor="att-from" className={`${labelCls} block`} style={{ color: muted }}>
                    From
                  </Label>
                  <Input
                    data-wf="i-5-0-0"
                    data-f
                    id="att-from"
                    type="date"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    aria-invalid={rangeError ? "true" : undefined}
                    aria-describedby={rangeError ? "range-error" : undefined}
                    className="mt-2 min-h-[44px] w-full px-3 text-sm"
                    style={{
                      backgroundColor: canvas,
                      color: ink,
                      border: `1px solid ${rangeError ? hexToRgba(ink, 0.3) : hair}`,
                      borderRadius: r,
                      colorScheme: "dark",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  />
                </div>
                <div>
                  <Label htmlFor="att-to" className={`${labelCls} block`} style={{ color: muted }}>
                    To
                  </Label>
                  <Input
                    data-wf="i-5-0-1"
                    data-f
                    id="att-to"
                    type="date"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    aria-invalid={rangeError ? "true" : undefined}
                    aria-describedby={rangeError ? "range-error" : undefined}
                    className="mt-2 min-h-[44px] w-full px-3 text-sm"
                    style={{
                      backgroundColor: canvas,
                      color: ink,
                      border: `1px solid ${rangeError ? hexToRgba(ink, 0.3) : hair}`,
                      borderRadius: r,
                      colorScheme: "dark",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  />
                </div>
                <div>
                  <Label htmlFor="att-who" className={`${labelCls} block`} style={{ color: muted }}>
                    Direct report
                  </Label>
                  <Select
                    data-wf="i-5-0-2"
                    data-f
                    id="att-who"
                    value={who}
                    onChange={(e) => setWho(e.target.value)}
                    className="mt-2 min-h-[44px] w-full px-3 text-sm"
                    style={{
                      backgroundColor: canvas,
                      color: ink,
                      border: `1px solid ${hair}`,
                      borderRadius: r,
                      colorScheme: "dark",
                    }}
                  >
                    <option value="all">All ({DIRECT_REPORTS.length})</option>
                    {DIRECT_REPORTS.map((d) => (
                      <option key={d.id} value={d.name}>
                        {d.name} — {d.designation}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>

              {rangeError ? (
                <p
                  id="range-error"
                  role="alert"
                  className="mt-5 flex items-start gap-2 text-[13px] leading-relaxed"
                  style={{ color: ink }}
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" style={{ color: accent }} aria-hidden="true" />
                  <span>
                    {rangeError} Your dates are kept — the table below still shows{" "}
                    {fmtDate(applied.from)} to {fmtDate(applied.to)}.
                  </span>
                </p>
              ) : (
                <p className="mt-5 flex items-start gap-2 text-[13px] leading-relaxed" style={{ color: muted }}>
                  <Users className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>
                    The list is limited to your {DIRECT_REPORTS.length} direct reports. Attendance for anyone
                    outside your team is not available to managers — ask HR/admin if you need it.
                  </span>
                </p>
              )}
            </section>

            {/* Row 7 — team attendance table */}
            <section data-wf="b-6-0" className="mt-6" style={panelStyle}>
              <div className="flex flex-wrap items-end justify-between gap-4 px-6 pb-5 pt-6 sm:px-8">
                <div>
                  <h2 className="text-[21px]" style={{ fontFamily: brand.fontHeading }}>
                    Team attendance — {DIRECT_REPORTS.length} direct reports
                  </h2>
                  <p className="mt-2 text-[13px]" style={{ color: muted }}>
                    {fmtDate(applied.from)} to {fmtDate(applied.to)}
                    {applied.who !== "all" ? ` · ${applied.who}` : ""}
                  </p>
                </div>
                {rangeError ? (
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1.5 ${labelCls}`}
                    style={{ color: muted, border: `1px solid ${hair}`, borderRadius: r }}
                  >
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    Showing last valid range
                  </span>
                ) : (
                  !loadingAttendance &&
                  attendanceRows.length > 0 && (
                    <span className={labelCls} style={{ color: muted, fontVariantNumeric: "tabular-nums" }}>
                      {attendanceRows.length} sessions · avg {fmtMinutes(avgMinutes)}
                    </span>
                  )
                )}
              </div>

              <div style={{ borderTop: `1px solid ${hairSoft}` }}>
                {loadingAttendance ? (
                  <div className="px-6 py-7 sm:px-8" aria-live="polite">
                    <p className={labelCls} style={{ color: muted }}>
                      Pulling attendance for {fmtDate(from)} – {fmtDate(to)}…
                    </p>
                    <ul className="mt-5 space-y-3">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <li
                          key={i}
                          className="vt-skel h-10"
                          style={{ backgroundColor: panelHi, borderRadius: r, animationDelay: `${i * 90}ms` }}
                        />
                      ))}
                    </ul>
                  </div>
                ) : attendanceRows.length === 0 ? (
                  <div className="px-6 py-12 sm:px-8">
                    <Empty
                      title="No check-ins in those dates"
                      description={`Nothing recorded for ${applied.who === "all" ? "your team" : applied.who} between ${fmtDate(applied.from)} and ${fmtDate(applied.to)}. Widen the range or pick a different direct report.`}
                      action={
                        <Button
                          data-f
                          onClick={() => {
                            setFrom("2026-10-01");
                            setTo("2026-10-30");
                            setWho("all");
                          }}
                          className="min-h-[44px] px-5 text-sm"
                          style={{
                            backgroundColor: "transparent",
                            color: ink,
                            border: `1px solid ${hair}`,
                            borderRadius: r,
                          }}
                        >
                          Reset to 01–30 Oct 2026
                        </Button>
                      }
                    />
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table className="w-full min-w-[760px]" style={{ fontVariantNumeric: "tabular-nums" }}>
                      <THead>
                        <TR style={{ borderBottom: `1px solid ${hair}` }}>
                          <TH data-wf="i-6-0-0" className={`px-6 py-3 text-left sm:px-8 ${labelCls}`} style={{ color: muted, fontWeight: 400 }}>Employee</TH>
                          <TH data-wf="i-6-0-1" className={`px-4 py-3 text-left ${labelCls}`} style={{ color: muted, fontWeight: 400 }}>Date</TH>
                          <TH data-wf="i-6-0-2" className={`px-4 py-3 text-left ${labelCls}`} style={{ color: muted, fontWeight: 400 }}>Check-in</TH>
                          <TH data-wf="i-6-0-3" className={`px-4 py-3 text-left ${labelCls}`} style={{ color: muted, fontWeight: 400 }}>Check-out</TH>
                          <TH data-wf="i-6-0-4" className={`px-6 py-3 text-right sm:px-8 ${labelCls}`} style={{ color: muted, fontWeight: 400 }}>Worked hours</TH>
                        </TR>
                      </THead>
                      <TBody>
                        {attendanceRows.map((a) => (
                          <TR key={a.id} className="vt-row" style={{ borderBottom: `1px solid ${hairSoft}` }}>
                            <TD className="px-6 py-4 text-sm sm:px-8" style={{ color: ink }}>{a.employee}</TD>
                            <TD className="px-4 py-4 text-sm" style={{ color: ink }}>
                              {fmtDate(a.work_date)}
                              <span className="ml-2 text-xs" style={{ color: muted }}>{fmtDayName(a.work_date)}</span>
                            </TD>
                            <TD className="px-4 py-4 text-sm" style={{ color: a.check_in ? ink : muted }}>
                              {a.check_in || "—"}
                            </TD>
                            <TD className="px-4 py-4 text-sm" style={{ color: a.check_out ? ink : muted }}>
                              {a.check_out || "—"}
                            </TD>
                            <TD className="px-6 py-4 text-right text-sm sm:px-8">
                              {a.worked_minutes != null ? (
                                <span style={{ color: ink }}>{fmtMinutes(a.worked_minutes)}</span>
                              ) : (
                                <span
                                  className="inline-flex items-center gap-1.5 text-[13px]"
                                  style={{ color: muted }}
                                >
                                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                                  {a.note}
                                </span>
                              )}
                            </TD>
                          </TR>
                        ))}
                      </TBody>
                    </Table>
                  </div>
                )}
              </div>
            </section>
          </div>
        )}
      </div>

      {/* ── Row 4 — decide request dialog ───────────────────────────────── */}
      {openReq && (
        <div
          data-wf="b-3-0"
          className="vt-fade fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center"
          style={{ backgroundColor: hexToRgba(canvas, 0.82) }}
        >
          <button
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            onClick={closeDialog}
            className="absolute inset-0 h-full w-full cursor-default"
            style={{ background: "transparent" }}
          />
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="decide-title"
            aria-describedby="decide-help"
            className="vt-rise relative w-full max-w-[640px] overflow-hidden"
            style={{
              backgroundColor: "#1a2621",
              border: `1px solid ${hexToRgba(ink, 0.14)}`,
              borderRadius: r,
              boxShadow: "0 24px 60px rgba(0,0,0,0.55)",
            }}
          >
            <div className="h-px w-full" style={{ backgroundColor: accent }} aria-hidden="true" />
            <div className="flex items-start justify-between gap-6 px-7 pb-5 pt-6">
              <div>
                <p className={labelCls} style={{ color: hexToRgba(accent, 0.9) }}>
                  {openReq.id} · {openReq.employee_id}
                </p>
                <h2
                  id="decide-title"
                  className="mt-3 text-[22px] leading-snug"
                  style={{ fontFamily: brand.fontHeading }}
                >
                  Decide request — {openReq.employee}, {openReq.leave_type},{" "}
                  {fmtRange(openReq.start_date, openReq.end_date)} ({openReq.days_deducted}{" "}
                  {openReq.days_deducted === 1 ? "day" : "days"})
                </h2>
              </div>
              <button
                type="button"
                data-f
                aria-label="Close without deciding"
                onClick={closeDialog}
                className="vt-link -mr-2 -mt-1 flex h-10 w-10 shrink-0 items-center justify-center"
                style={{ color: muted }}
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="px-7">
              <div style={{ borderTop: `1px solid ${hairSoft}` }} />
            </div>

            <div className="grid gap-5 px-7 py-5 sm:grid-cols-3" style={{ fontVariantNumeric: "tabular-nums" }}>
              <div>
                <p className={labelCls} style={{ color: muted }}>Balance now</p>
                <p className="mt-1.5 text-sm" style={{ color: ink }}>
                  {openReq.balance} of {openReq.annual_balance} days
                </p>
              </div>
              <div>
                <p className={labelCls} style={{ color: muted }}>If approved</p>
                <p className="mt-1.5 text-sm" style={{ color: accent }}>
                  {openReq.balance - openReq.days_deducted} of {openReq.annual_balance} days
                </p>
              </div>
              <div>
                <p className={labelCls} style={{ color: muted }}>Submitted</p>
                <p className="mt-1.5 text-sm" style={{ color: ink }}>{openReq.created_at}</p>
              </div>
              <div className="sm:col-span-3">
                <p className={labelCls} style={{ color: muted }}>Employee's reason</p>
                <p className="mt-1.5 text-[14px] leading-relaxed" style={{ color: ink }}>
                  “{openReq.reason}”
                </p>
              </div>
            </div>

            <div className="px-7 pb-6">
              <Label htmlFor="decision-reason" className={`${labelCls} block`} style={{ color: muted }}>
                Decision reason
              </Label>
              <Textarea
                data-wf="i-3-0-0"
                data-f
                id="decision-reason"
                ref={reasonRef}
                rows={3}
                value={decisionReason}
                onChange={(e) => {
                  setDecisionReason(e.target.value);
                  if (modalError) setModalError("");
                }}
                aria-invalid={modalError ? "true" : undefined}
                aria-describedby={modalError ? "decision-error decide-help" : "decide-help"}
                placeholder="Cover is arranged with Priya for those two days."
                className="mt-2 w-full px-3 py-2.5 text-sm leading-relaxed"
                style={{
                  backgroundColor: canvas,
                  color: ink,
                  border: `1px solid ${modalError ? hexToRgba(ink, 0.32) : hair}`,
                  borderRadius: r,
                }}
              />
              {modalError ? (
                <p
                  id="decision-error"
                  role="alert"
                  className="mt-2 flex items-center gap-2 text-[13px]"
                  style={{ color: ink }}
                >
                  <AlertCircle className="h-4 w-4 shrink-0" style={{ color: accent }} aria-hidden="true" />
                  {modalError}
                </p>
              ) : (
                <p id="decide-help" className="mt-2 text-[13px] leading-relaxed" style={{ color: muted }}>
                  Optional when approving, required when rejecting. Whatever you write is emailed to{" "}
                  {openReq.work_email}.
                </p>
              )}
            </div>

            <div
              className="flex flex-col-reverse gap-3 px-7 py-5 sm:flex-row sm:items-center sm:justify-end"
              style={{ borderTop: `1px solid ${hairSoft}`, backgroundColor: hexToRgba(ink, 0.02) }}
            >
              <Button
                data-wf="i-3-0-2"
                data-f
                type="button"
                disabled={saving !== null}
                onClick={() => decide("reject")}
                className="vt-link min-h-[44px] px-5 text-sm"
                style={{
                  backgroundColor: "transparent",
                  color: ink,
                  border: `1px solid ${hair}`,
                  borderRadius: r,
                  opacity: saving && saving !== "reject" ? 0.45 : 1,
                  cursor: saving ? "not-allowed" : "pointer",
                }}
              >
                {saving === "reject" ? "Rejecting…" : "Reject"}
              </Button>
              <Button
                data-wf="i-3-0-1"
                data-f
                type="button"
                disabled={saving !== null}
                onClick={() => decide("approve")}
                className="vt-link inline-flex min-h-[44px] items-center justify-center gap-2 px-6 text-sm"
                style={{
                  backgroundColor: accent,
                  color: canvas,
                  border: `1px solid ${accent}`,
                  borderRadius: r,
                  fontWeight: 500,
                  opacity: saving && saving !== "approve" ? 0.45 : 1,
                  cursor: saving ? "not-allowed" : "pointer",
                }}
              >
                {saving === "approve" ? (
                  "Approving…"
                ) : (
                  <>
                    <Check className="h-4 w-4" aria-hidden="true" />
                    Approve {openReq.days_deducted} {openReq.days_deducted === 1 ? "day" : "days"}
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
