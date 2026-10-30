// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Input, Textarea, Label, Select, Badge, Table, THead, TBody, TR, TH, TD, Avatar, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Check, X, ChevronRight, ChevronDown, FileText, Clock, Edit, Upload, AlertCircle, CheckCircle } = Icons;

// ───────────────────────────────────────────────────────────────────────────
// My Profile — Velvet (elegant dark)
// Employee self-service: view held data, correct contact details, raise a
// correction request with HR, upload ID proofs to S3 (ap-south-1 / Mumbai).
// ───────────────────────────────────────────────────────────────────────────

const SEMANTIC_WARN = "#d08a6a"; // semantic warning only — outside the brand palette, used for errors/limits

const EMPLOYEE = {
  id: "EMP-0147",
  first_name: "Rohan",
  last_name: "Mehta",
  work_email: "rohan.mehta@meridianlabs.in",
  phone: "+91 98201 44617",
  address: "No. 14, 2nd Cross, Indiranagar, Bengaluru 560038, Karnataka",
};

const JOB_FACTS = [
  { wf: "i-1-1-0", label: "Designation", value: "Senior Engineer" },
  { wf: "i-1-1-1", label: "Department", value: "Engineering" },
  { wf: "i-1-1-2", label: "Reporting manager", value: "Priya Nair" },
  { wf: "i-1-1-3", label: "Employment start date", value: "12 Jan 2022" },
];

const FIELD_LABELS = {
  first_name: "First name",
  last_name: "Last name",
  work_email: "Work email",
  phone: "Phone",
  address: "Address",
};

// first_name / last_name / work_email are HR-controlled → correction request
const HR_CONTROLLED = ["first_name", "last_name", "work_email"];

const INITIAL_DOCUMENTS = [
  {
    id: "doc-9071",
    doc_type: "ID proof",
    file_name: "aadhaar-masked-rmehta.pdf",
    content_type: "application/pdf",
    size_bytes: 1_258_291,
    uploaded_at: "14 Mar 2026, 09:41",
    s3_key: "emp/0147/id/aadhaar-masked-9f3c.pdf",
  },
  {
    id: "doc-9072",
    doc_type: "PAN card",
    file_name: "pan-card-rmehta.jpg",
    content_type: "image/jpeg",
    size_bytes: 663_552,
    uploaded_at: "14 Mar 2026, 09:43",
    s3_key: "emp/0147/id/pan-card-21ab.jpg",
  },
  {
    id: "doc-9114",
    doc_type: "Address proof",
    file_name: "rental-agreement-indiranagar.pdf",
    content_type: "application/pdf",
    size_bytes: 3_985_408,
    uploaded_at: "02 Jul 2026, 16:12",
    s3_key: "emp/0147/address/rental-7c04.pdf",
  },
  {
    id: "doc-9230",
    doc_type: "Education certificate",
    file_name: "btech-degree-vtu-2019.pdf",
    content_type: "application/pdf",
    size_bytes: 2_202_009,
    uploaded_at: "09 Sep 2026, 11:05",
    s3_key: "emp/0147/edu/btech-vtu-1d8e.pdf",
  },
];

const DOC_TYPES = [
  "ID proof",
  "PAN card",
  "Address proof",
  "Education certificate",
  "Offer letter",
  "Other",
];

const INITIAL_CORRECTIONS = [
  {
    id: "cr-311",
    field_name: "last_name",
    requested_value: "Mehta-Rao",
    status: "pending",
    created_at: "21 Oct 2026",
  },
];

const ALLOWED_EXT = ["pdf", "jpg", "jpeg", "png"];
const MAX_BYTES = 5 * 1024 * 1024;

const PRIVACY_BODY = [
  "Meridian Labs holds your personal data to run the employment relationship: to pay you, to roster and record your attendance, to administer leave, and to meet statutory record-keeping obligations. The lawful basis is the ‘legitimate use’ ground for employment purposes under Section 7(i) of the Digital Personal Data Protection Act, 2023.",
  "We process your name, contact details, address, designation, department, reporting line, employment dates, attendance timestamps, leave records and the identity documents you upload. Attendance is recorded from the web app only — we capture no location and no biometric data.",
  "Your records and documents are stored on infrastructure located in India. Uploaded files are held in Amazon S3 in the Asia Pacific (Mumbai) region, ap-south-1, are encrypted at rest and are never transferred outside India. Files are served through short-lived signed links to you and to HR only.",
  "You may view your data on this page at any time, correct your phone and address directly, and ask HR to correct anything else. Write to the Data Protection contact at dpo@meridianlabs.in if you want to escalate a request.",
];

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return Math.round(bytes / 1024) + " KB";
  return (bytes / (1024 * 1024)).toFixed(1) + " MB";
}

export default function Screen() {
  const ink = brand.primaryColor;
  const muted = brand.neutralColor;
  const accent = brand.accentColor;
  const hairline = "rgba(233,237,233,0.12)";
  const panel = "rgba(233,237,233,0.035)";
  const panelDeep = "rgba(233,237,233,0.055)";

  const [form, setForm] = React.useState({ ...EMPLOYEE });
  const [saved, setSaved] = React.useState({ ...EMPLOYEE });
  const [errors, setErrors] = React.useState({});
  const [notice, setNotice] = React.useState(null); // {tone, title, body}
  const [corrections, setCorrections] = React.useState(INITIAL_CORRECTIONS);
  const [documents, setDocuments] = React.useState(INITIAL_DOCUMENTS);
  const [docNotice, setDocNotice] = React.useState(null);
  const [newDocId, setNewDocId] = React.useState(null);

  const [modalOpen, setModalOpen] = React.useState(false);
  const [docType, setDocType] = React.useState("ID proof");
  const [chosen, setChosen] = React.useState(null); // {name, size}
  const [uploadError, setUploadError] = React.useState(null);
  const [uploading, setUploading] = React.useState(false);

  const [noticeOpen, setNoticeOpen] = React.useState(false);
  const [syncLabel, setSyncLabel] = React.useState("Synced 4 minutes ago");

  const timerRef = React.useRef(null);
  const uploadBtnRef = React.useRef(null);
  const panelRef = React.useRef(null);
  const firstFieldRef = React.useRef(null);

  React.useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  React.useEffect(() => {
    if (modalOpen && firstFieldRef.current) firstFieldRef.current.focus();
  }, [modalOpen]);

  const dirty = Object.keys(FIELD_LABELS).filter((k) => form[k].trim() !== saved[k]);
  const dirtySelf = dirty.filter((k) => !HR_CONTROLLED.includes(k));
  const dirtyHr = dirty.filter((k) => HR_CONTROLLED.includes(k));
  const pendingFor = (field) => corrections.find((c) => c.field_name === field && c.status === "pending");

  function validate(fields) {
    const next = {};
    fields.forEach((k) => {
      const v = form[k].trim();
      if (!v) next[k] = FIELD_LABELS[k] + " can’t be left empty.";
      else if (k === "work_email" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v))
        next[k] = "Use a full work email, like firstname.lastname@meridianlabs.in";
      else if (k === "phone" && !/^[+0-9][0-9 ()-]{7,19}$/.test(v))
        next[k] = "Use digits, spaces and an optional +country code — nothing else.";
    });
    return next;
  }

  function handleSave(e) {
    e.preventDefault();
    if (dirtySelf.length === 0) {
      setErrors({});
      setNotice({
        tone: "info",
        title: "Nothing to save yet",
        body: dirtyHr.length
          ? "Your phone and address are unchanged. The name or email edits above go to HR — use “Request a correction from HR”."
          : "Your phone and address already match the record HR holds.",
      });
      return;
    }
    const found = validate(dirtySelf);
    setErrors(found);
    if (Object.keys(found).length) {
      setNotice({
        tone: "error",
        title: "We couldn’t save that",
        body: "Your edits are still here. Fix the highlighted field and save again.",
      });
      return;
    }
    const updated = { ...saved };
    dirtySelf.forEach((k) => { updated[k] = form[k].trim(); });
    setSaved(updated);
    setForm((f) => ({ ...f, ...updated }));
    setSyncLabel("Saved just now");
    setNotice({
      tone: "success",
      title: "Saved to your record",
      body: dirtySelf.map((k) => FIELD_LABELS[k]).join(" and ") + " updated. HR sees the new value immediately.",
    });
  }

  function handleCorrection() {
    if (dirtyHr.length === 0) {
      setNotice({
        tone: "info",
        title: "Edit the field first",
        body: "Change your first name, last name or work email above, then request the correction — HR reviews the new value you typed.",
      });
      return;
    }
    const found = validate(dirtyHr);
    setErrors(found);
    if (Object.keys(found).length) {
      setNotice({
        tone: "error",
        title: "We couldn’t send that to HR",
        body: "Your edits are kept. Correct the highlighted field and send again.",
      });
      return;
    }
    const stamp = "30 Oct 2026";
    const added = dirtyHr.map((k, i) => ({
      id: "cr-" + (400 + corrections.length + i),
      field_name: k,
      requested_value: form[k].trim(),
      status: "pending",
      created_at: stamp,
    }));
    setCorrections((prev) => [...prev.filter((c) => !dirtyHr.includes(c.field_name)), ...added]);
    setNotice({
      tone: "success",
      title: "Sent to HR for review",
      body:
        dirtyHr.map((k) => FIELD_LABELS[k]).join(" and ") +
        " queued as a correction request. Priya Nair’s HR partner replies by email — your record stays as it is until then.",
    });
  }

  function onFilePicked(e) {
    const f = e.target.files && e.target.files[0];
    if (!f) { setChosen(null); return; }
    setChosen({ name: f.name, size: f.size });
    const ext = f.name.split(".").pop().toLowerCase();
    if (!ALLOWED_EXT.includes(ext) || f.size > MAX_BYTES) {
      setUploadError("File type not allowed or larger than 5 MB.");
    } else {
      setUploadError(null);
    }
  }

  function closeModal() {
    setModalOpen(false);
    setChosen(null);
    setUploadError(null);
    setUploading(false);
    if (uploadBtnRef.current) uploadBtnRef.current.focus();
  }

  function handleUpload(e) {
    e.preventDefault();
    if (!chosen) {
      setUploadError("Choose a file before uploading.");
      return;
    }
    const ext = chosen.name.split(".").pop().toLowerCase();
    if (!ALLOWED_EXT.includes(ext) || chosen.size > MAX_BYTES) {
      setUploadError("File type not allowed or larger than 5 MB.");
      return;
    }
    setUploading(true);
    timerRef.current = setTimeout(() => {
      const id = "doc-" + (9300 + documents.length);
      setDocuments((prev) => [
        {
          id,
          doc_type: docType,
          file_name: chosen.name,
          content_type: ext === "pdf" ? "application/pdf" : ext === "png" ? "image/png" : "image/jpeg",
          size_bytes: chosen.size,
          uploaded_at: "30 Oct 2026, 11:24",
          s3_key: "emp/0147/" + docType.toLowerCase().replace(/[^a-z]+/g, "-") + "/" + id + "." + ext,
        },
        ...prev,
      ]);
      setNewDocId(id);
      setDocNotice(chosen.name + " stored in S3 ap-south-1 (Mumbai) against your record.");
      setUploading(false);
      setModalOpen(false);
      setChosen(null);
      if (uploadBtnRef.current) uploadBtnRef.current.focus();
    }, 850);
  }

  function trapTab(e) {
    if (e.key === "Escape") { e.stopPropagation(); closeModal(); return; }
    if (e.key !== "Tab" || !panelRef.current) return;
    const nodes = panelRef.current.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), select:not([disabled]), a[href]'
    );
    if (!nodes.length) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  const noticeTone = {
    success: { color: accent, border: "rgba(143,174,139,0.45)", bg: "rgba(143,174,139,0.09)" },
    error: { color: SEMANTIC_WARN, border: "rgba(208,138,106,0.45)", bg: "rgba(208,138,106,0.09)" },
    info: { color: muted, border: hairline, bg: panelDeep },
  };

  const labelCls = "block text-[11px] uppercase tracking-[0.16em] mb-2";
  const inputCls =
    "vlv-focus w-full rounded-[6px] px-3 py-2.5 text-[15px] bg-transparent border transition-colors duration-150";
  const inputStyle = (bad) => ({
    color: ink,
    borderColor: bad ? "rgba(208,138,106,0.65)" : hairline,
    fontFamily: brand.fontBody,
    backgroundColor: "rgba(0,0,0,0.18)",
  });

  const sectionCard = {
    backgroundColor: panel,
    border: "1px solid " + hairline,
    borderRadius: brand.radius,
  };

  return (
    <div
      className="w-full min-h-full pb-16"
      style={{ fontFamily: brand.fontBody, color: ink, "--vlv-accent": accent }}
    >
      <style>{`
        .vlv-focus:focus-visible { outline: 2px solid var(--vlv-accent); outline-offset: 2px; }
        .vlv-row-in { animation: vlvRowIn 420ms cubic-bezier(.22,.61,.36,1) both; }
        .vlv-panel-in { animation: vlvPanelIn 220ms cubic-bezier(.22,.61,.36,1) both; }
        .vlv-fade-in { animation: vlvFade 280ms ease-out both; }
        @keyframes vlvRowIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: none; } }
        @keyframes vlvPanelIn { from { opacity: 0; transform: translateY(10px) scale(.99); } to { opacity: 1; transform: none; } }
        @keyframes vlvFade { from { opacity: 0; } to { opacity: 1; } }
        @media (prefers-reduced-motion: reduce) {
          .vlv-row-in, .vlv-panel-in, .vlv-fade-in { animation: none !important; }
        }
      `}</style>

      {/* ── Row 1 · page title ─────────────────────────────────────────── */}
      <header data-wf="b-0-0" className="pt-2 pb-8">
        <div className="h-px w-16 mb-5" style={{ backgroundColor: accent }} aria-hidden="true" />
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] mb-3" style={{ color: muted }}>
              Employee self-service
            </p>
            <h1
              className="text-[38px] leading-[1.1]"
              style={{ fontFamily: brand.fontHeading, color: ink }}
            >
              My Profile
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-[13px]" style={{ color: muted }}>Rohan Mehta · Senior Engineer</p>
              <p
                className="text-[12px] tabular-nums"
                style={{ color: accent, fontVariantNumeric: "tabular-nums" }}
              >
                Record {EMPLOYEE.id}
              </p>
            </div>
            <Avatar name="Rohan Mehta" />
          </div>
        </div>
        <p className="mt-4 flex items-center gap-2 text-[12px]" style={{ color: muted }}>
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="tabular-nums" style={{ fontVariantNumeric: "tabular-nums" }}>{syncLabel}</span>
          <span aria-hidden="true">·</span>
          <span>Data residency: Mumbai, India</span>
        </p>
      </header>

      {/* ── Row 2 · form + job facts ───────────────────────────────────── */}
      <div className="grid grid-cols-12 gap-6">
        <section data-wf="b-1-0" className="col-span-12 lg:col-span-8" style={sectionCard}>
          <form onSubmit={handleSave} noValidate>
            <div className="px-6 pt-6 pb-4">
              <h2 className="text-[21px]" style={{ fontFamily: brand.fontHeading }}>
                Personal &amp; contact details
              </h2>
              <p className="mt-1.5 text-[13px] leading-relaxed max-w-[62ch]" style={{ color: muted }}>
                This is everything Meridian Labs holds about you as a person. Press Enter or save when you’re done.
              </p>
            </div>
            <div className="h-px" style={{ backgroundColor: hairline }} />

            <div className="px-6 py-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { key: "first_name", wf: "i-1-0-0", type: "text", auto: "given-name" },
                { key: "last_name", wf: "i-1-0-1", type: "text", auto: "family-name" },
              ].map((f) => {
                const pend = pendingFor(f.key);
                return (
                  <div key={f.key}>
                    <Label htmlFor={f.key} className={labelCls} style={{ color: muted }}>
                      {FIELD_LABELS[f.key]}
                    </Label>
                    <Input
                      data-wf={f.wf}
                      id={f.key}
                      name={f.key}
                      type={f.type}
                      autoComplete={f.auto}
                      value={form[f.key]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      aria-invalid={!!errors[f.key]}
                      aria-describedby={errors[f.key] ? f.key + "-err" : f.key + "-hint"}
                      className={inputCls}
                      style={inputStyle(!!errors[f.key])}
                    />
                    {errors[f.key] ? (
                      <p
                        id={f.key + "-err"}
                        role="alert"
                        className="mt-2 flex items-start gap-1.5 text-[12px]"
                        style={{ color: SEMANTIC_WARN }}
                      >
                        <AlertCircle className="h-3.5 w-3.5 mt-px shrink-0" aria-hidden="true" />
                        {errors[f.key]}
                      </p>
                    ) : pend ? (
                      <p id={f.key + "-hint"} className="mt-2 text-[12px]" style={{ color: accent }}>
                        <Clock className="inline h-3.5 w-3.5 mr-1 -mt-px" aria-hidden="true" />
                        Correction pending with HR — “{pend.requested_value}”, raised {pend.created_at}
                      </p>
                    ) : (
                      <p id={f.key + "-hint"} className="mt-2 text-[12px]" style={{ color: muted }}>
                        Changes here go to HR for review.
                      </p>
                    )}
                  </div>
                );
              })}

              <div className="sm:col-span-2">
                <Label htmlFor="work_email" className={labelCls} style={{ color: muted }}>
                  {FIELD_LABELS.work_email}
                </Label>
                <Input
                  data-wf="i-1-0-2"
                  id="work_email"
                  name="work_email"
                  type="email"
                  autoComplete="email"
                  value={form.work_email}
                  onChange={(e) => setForm({ ...form, work_email: e.target.value })}
                  aria-invalid={!!errors.work_email}
                  aria-describedby={errors.work_email ? "work_email-err" : "work_email-hint"}
                  className={inputCls}
                  style={inputStyle(!!errors.work_email)}
                />
                {errors.work_email ? (
                  <p id="work_email-err" role="alert" className="mt-2 flex items-start gap-1.5 text-[12px]" style={{ color: SEMANTIC_WARN }}>
                    <AlertCircle className="h-3.5 w-3.5 mt-px shrink-0" aria-hidden="true" />
                    {errors.work_email}
                  </p>
                ) : (
                  <p id="work_email-hint" className="mt-2 text-[12px]" style={{ color: muted }}>
                    Your sign-in address. HR must approve any change.
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="phone" className={labelCls} style={{ color: muted }}>
                  {FIELD_LABELS.phone}
                </Label>
                <Input
                  data-wf="i-1-0-3"
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-err" : "phone-hint"}
                  className={inputCls + " tabular-nums"}
                  style={{ ...inputStyle(!!errors.phone), fontVariantNumeric: "tabular-nums" }}
                />
                {errors.phone ? (
                  <p id="phone-err" role="alert" className="mt-2 flex items-start gap-1.5 text-[12px]" style={{ color: SEMANTIC_WARN }}>
                    <AlertCircle className="h-3.5 w-3.5 mt-px shrink-0" aria-hidden="true" />
                    {errors.phone}
                  </p>
                ) : (
                  <p id="phone-hint" className="mt-2 text-[12px]" style={{ color: muted }}>
                    Saves straight away — no HR review.
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="address" className={labelCls} style={{ color: muted }}>
                  {FIELD_LABELS.address}
                </Label>
                <Textarea
                  data-wf="i-1-0-4"
                  id="address"
                  name="address"
                  rows={3}
                  autoComplete="street-address"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  aria-invalid={!!errors.address}
                  aria-describedby={errors.address ? "address-err" : "address-hint"}
                  className={inputCls + " resize-none leading-relaxed"}
                  style={inputStyle(!!errors.address)}
                />
                {errors.address ? (
                  <p id="address-err" role="alert" className="mt-2 flex items-start gap-1.5 text-[12px]" style={{ color: SEMANTIC_WARN }}>
                    <AlertCircle className="h-3.5 w-3.5 mt-px shrink-0" aria-hidden="true" />
                    {errors.address}
                  </p>
                ) : (
                  <p id="address-hint" className="mt-2 text-[12px]" style={{ color: muted }}>
                    Saves straight away — no HR review.
                  </p>
                )}
              </div>
            </div>

            {notice && (
              <div className="px-6 pb-6 vlv-fade-in">
                <div
                  className="rounded-[6px] border px-4 py-3.5 flex items-start gap-3"
                  style={{
                    borderColor: noticeTone[notice.tone].border,
                    backgroundColor: noticeTone[notice.tone].bg,
                  }}
                  role="status"
                  aria-live="polite"
                >
                  {notice.tone === "success" ? (
                    <CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: accent }} aria-hidden="true" />
                  ) : notice.tone === "error" ? (
                    <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: SEMANTIC_WARN }} aria-hidden="true" />
                  ) : (
                    <FileText className="h-4 w-4 mt-0.5 shrink-0" style={{ color: muted }} aria-hidden="true" />
                  )}
                  <div className="min-w-0">
                    <p className="text-[13px] font-semibold" style={{ color: noticeTone[notice.tone].color }}>
                      {notice.title}
                    </p>
                    <p className="text-[13px] leading-relaxed mt-0.5" style={{ color: ink }}>
                      {notice.body}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setNotice(null)}
                    aria-label="Dismiss this message"
                    className="vlv-focus ml-auto rounded-[6px] p-1.5 shrink-0 transition-colors hover:bg-white/5"
                    style={{ color: muted }}
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            )}
          </form>
        </section>

        <section data-wf="b-1-1" className="col-span-12 lg:col-span-4" style={sectionCard}>
          <div className="px-6 pt-6 pb-4">
            <h2 className="text-[21px]" style={{ fontFamily: brand.fontHeading }}>
              Job &amp; employment
            </h2>
            <p className="mt-1.5 text-[13px]" style={{ color: muted }}>
              Maintained by HR. Read-only for you.
            </p>
          </div>
          <div className="h-px" style={{ backgroundColor: hairline }} />
          <dl className="px-6 py-2">
            {JOB_FACTS.map((f, i) => (
              <div
                key={f.wf}
                data-wf={f.wf}
                className="py-4"
                style={i < JOB_FACTS.length - 1 ? { borderBottom: "1px solid " + hairline } : undefined}
              >
                <dt className="text-[11px] uppercase tracking-[0.16em]" style={{ color: muted }}>
                  {f.label}
                </dt>
                <dd
                  className="mt-1.5 text-[15px] tabular-nums"
                  style={{ color: ink, fontVariantNumeric: "tabular-nums" }}
                >
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
          <div className="px-6 pb-6 pt-1">
            <p className="text-[12px] leading-relaxed" style={{ color: muted }}>
              Something wrong in this column? Ask HR with a correction request — they’ll confirm by email.
            </p>
          </div>
        </section>
      </div>

      {/* ── Row 3 · actions ────────────────────────────────────────────── */}
      <div className="grid grid-cols-12 gap-6 items-center mt-6">
        <div data-wf="b-2-0" className="col-span-12 sm:col-span-5 lg:col-span-3">
          <Button
            type="button"
            onClick={handleSave}
            className="vlv-focus w-full min-h-[44px] rounded-[6px] px-5 text-[14px] font-semibold tracking-wide transition-opacity duration-150 hover:opacity-90"
            style={{ backgroundColor: accent, color: brand.backgroundColor, border: "1px solid " + accent }}
          >
            <Check className="inline h-4 w-4 mr-2 -mt-px" aria-hidden="true" />
            Save changes
          </Button>
        </div>
        <div data-wf="b-2-1" className="col-span-12 sm:col-span-7 lg:col-span-4">
          <Button
            type="button"
            onClick={handleCorrection}
            className="vlv-focus w-full min-h-[44px] rounded-[6px] px-5 text-[14px] bg-transparent transition-colors duration-150 hover:bg-white/5"
            style={{ color: ink, border: "1px solid " + hairline }}
          >
            <Edit className="inline h-4 w-4 mr-2 -mt-px" aria-hidden="true" />
            Request a correction from HR
          </Button>
        </div>
        <p data-wf="b-2-2" className="col-span-12 lg:col-span-5 text-[13px] leading-relaxed" style={{ color: muted }}>
          Phone and address save immediately. Other fields are sent to HR as a correction request and you get a
          confirmation.
        </p>
      </div>

      <div className="h-px my-10" style={{ backgroundColor: hairline }} />

      {/* ── Row 4 · documents ──────────────────────────────────────────── */}
      <section data-wf="b-3-0" style={sectionCard}>
        <div className="px-6 pt-6 pb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-[21px]" style={{ fontFamily: brand.fontHeading }}>
              My documents
            </h2>
            <p className="mt-1.5 text-[13px]" style={{ color: muted }}>
              {documents.length} file{documents.length === 1 ? "" : "s"} held against record {EMPLOYEE.id}.
            </p>
          </div>
          <span
            className="text-[11px] uppercase tracking-[0.16em] px-2.5 py-1 rounded-[6px]"
            style={{ color: accent, border: "1px solid rgba(143,174,139,0.4)" }}
          >
            S3 · ap-south-1 · Mumbai
          </span>
        </div>

        {docNotice && (
          <div
            className="mx-6 mb-4 rounded-[6px] border px-4 py-3 flex items-start gap-3 vlv-fade-in"
            role="status"
            aria-live="polite"
            style={{ borderColor: "rgba(143,174,139,0.45)", backgroundColor: "rgba(143,174,139,0.09)" }}
          >
            <CheckCircle className="h-4 w-4 mt-0.5 shrink-0" style={{ color: accent }} aria-hidden="true" />
            <p className="text-[13px]" style={{ color: ink }}>{docNotice}</p>
            <button
              type="button"
              onClick={() => setDocNotice(null)}
              aria-label="Dismiss upload confirmation"
              className="vlv-focus ml-auto rounded-[6px] p-1.5 shrink-0 hover:bg-white/5"
              style={{ color: muted }}
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        )}

        <div className="h-px" style={{ backgroundColor: hairline }} />

        {documents.length === 0 ? (
          <div className="px-6 py-10">
            <Empty
              title="No documents on file yet"
              description="Upload your ID proof and PAN card so HR can complete your onboarding checklist. Nothing here is visible to anyone outside you and HR."
              action={
                <Button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="vlv-focus min-h-[44px] rounded-[6px] px-5 text-[14px] font-semibold"
                  style={{ backgroundColor: accent, color: brand.backgroundColor }}
                >
                  Upload document
                </Button>
              }
            />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table
              className="w-full text-left"
              style={{ fontVariantNumeric: "tabular-nums", borderCollapse: "collapse" }}
            >
              <caption className="sr-only">Documents stored against your employee record</caption>
              <THead>
                <TR style={{ borderBottom: "1px solid " + hairline }}>
                  <TH data-wf="i-3-0-0" scope="col" className="px-6 py-3 text-[11px] uppercase tracking-[0.16em] font-normal" style={{ color: muted }}>
                    Document type
                  </TH>
                  <TH data-wf="i-3-0-1" scope="col" className="px-6 py-3 text-[11px] uppercase tracking-[0.16em] font-normal" style={{ color: muted }}>
                    File name
                  </TH>
                  <TH data-wf="i-3-0-2" scope="col" className="px-6 py-3 text-[11px] uppercase tracking-[0.16em] font-normal text-right" style={{ color: muted }}>
                    Size
                  </TH>
                  <TH data-wf="i-3-0-3" scope="col" className="px-6 py-3 text-[11px] uppercase tracking-[0.16em] font-normal text-right" style={{ color: muted }}>
                    Uploaded at
                  </TH>
                </TR>
              </THead>
              <TBody>
                {documents.map((d) => (
                  <TR
                    key={d.id}
                    className={d.id === newDocId ? "vlv-row-in" : undefined}
                    style={{ borderBottom: "1px solid " + hairline }}
                  >
                    <TD className="px-6 py-4 align-top text-[14px]" style={{ color: ink }}>
                      {d.doc_type}
                    </TD>
                    <TD className="px-6 py-4 align-top">
                      <span className="block text-[14px]" style={{ color: ink }}>{d.file_name}</span>
                      <span className="block text-[11px] mt-1" style={{ color: accent }}>
                        s3://meridian-hrms/{d.s3_key}
                      </span>
                    </TD>
                    <TD
                      className="px-6 py-4 align-top text-right text-[14px] tabular-nums"
                      style={{ color: ink, fontVariantNumeric: "tabular-nums" }}
                    >
                      {formatBytes(d.size_bytes)}
                    </TD>
                    <TD
                      className="px-6 py-4 align-top text-right text-[14px] tabular-nums"
                      style={{ color: muted, fontVariantNumeric: "tabular-nums" }}
                    >
                      {d.uploaded_at}
                    </TD>
                  </TR>
                ))}
              </TBody>
            </Table>
          </div>
        )}
      </section>

      {/* ── Row 5 · upload action ──────────────────────────────────────── */}
      <div className="grid grid-cols-12 gap-6 items-center mt-6">
        <div data-wf="b-4-0" className="col-span-12 sm:col-span-5 lg:col-span-4">
          <Button
            ref={uploadBtnRef}
            type="button"
            onClick={() => { setModalOpen(true); setUploadError(null); }}
            className="vlv-focus w-full min-h-[44px] rounded-[6px] px-5 text-[14px] bg-transparent transition-colors duration-150 hover:bg-white/5"
            style={{ color: ink, border: "1px solid " + accent }}
          >
            <Upload className="inline h-4 w-4 mr-2 -mt-px" style={{ color: accent }} aria-hidden="true" />
            Upload document
          </Button>
        </div>
        <p data-wf="b-4-1" className="col-span-12 lg:col-span-8 text-[13px] leading-relaxed" style={{ color: muted }}>
          PDF, JPG or PNG up to 5 MB. Files are stored securely in Amazon S3 (Mumbai, India) and are only accessible to
          you and HR.
        </p>
      </div>

      {/* ── Row 6 · upload modal ───────────────────────────────────────── */}
      {modalOpen && (
        <div
          data-wf="b-5-0"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(10,16,13,0.72)" }}
          onMouseDown={(e) => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="upload-title"
            aria-describedby="upload-desc"
            onKeyDown={trapTab}
            className="vlv-panel-in w-full max-w-lg rounded-[6px]"
            style={{
              backgroundColor: "#1b2721",
              border: "1px solid " + hairline,
              boxShadow: "0 24px 60px rgba(0,0,0,0.55)",
            }}
          >
            <div className="px-6 pt-6 pb-4 flex items-start justify-between gap-4">
              <div>
                <h2 id="upload-title" className="text-[21px]" style={{ fontFamily: brand.fontHeading }}>
                  Upload document
                </h2>
                <p id="upload-desc" className="mt-1.5 text-[13px] leading-relaxed" style={{ color: muted }}>
                  Goes to the Mumbai bucket and is linked to record {EMPLOYEE.id}. Only you and HR can open it.
                </p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close upload dialog"
                className="vlv-focus rounded-[6px] p-2 shrink-0 transition-colors hover:bg-white/5"
                style={{ color: muted }}
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <div className="h-px" style={{ backgroundColor: hairline }} />

            <form onSubmit={handleUpload} className="px-6 py-6">
              <div className="mb-5">
                <Label htmlFor="doc_type" className={labelCls} style={{ color: muted }}>
                  Document type
                </Label>
                <Select
                  data-wf="i-5-0-0"
                  id="doc_type"
                  name="doc_type"
                  ref={firstFieldRef}
                  value={docType}
                  onChange={(e) => setDocType(e.target.value)}
                  className={inputCls}
                  style={inputStyle(false)}
                >
                  {DOC_TYPES.map((t) => (
                    <option key={t} value={t} style={{ color: "#16211c" }}>
                      {t}
                    </option>
                  ))}
                </Select>
              </div>

              <div className="mb-4">
                <Label htmlFor="doc_file" className={labelCls} style={{ color: muted }}>
                  Choose file
                </Label>
                <Input
                  data-wf="i-5-0-1"
                  id="doc_file"
                  name="doc_file"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={onFilePicked}
                  aria-describedby="upload-rule"
                  className="vlv-focus w-full rounded-[6px] px-3 py-2.5 text-[14px] border file:mr-4 file:rounded-[6px] file:border-0 file:px-3 file:py-1.5 file:text-[13px]"
                  style={{
                    color: ink,
                    borderColor: uploadError ? "rgba(208,138,106,0.65)" : hairline,
                    backgroundColor: "rgba(0,0,0,0.18)",
                  }}
                />
                {chosen && !uploadError && (
                  <p className="mt-2 text-[12px] tabular-nums" style={{ color: ink, fontVariantNumeric: "tabular-nums" }}>
                    {chosen.name} · {formatBytes(chosen.size)} ready to upload
                  </p>
                )}
              </div>

              <p
                data-wf="i-5-0-2"
                id="upload-rule"
                role={uploadError ? "alert" : undefined}
                className="flex items-start gap-1.5 text-[12px] leading-relaxed"
                style={{ color: uploadError ? SEMANTIC_WARN : muted }}
              >
                {uploadError ? (
                  <AlertCircle className="h-3.5 w-3.5 mt-px shrink-0" aria-hidden="true" />
                ) : (
                  <FileText className="h-3.5 w-3.5 mt-px shrink-0" aria-hidden="true" />
                )}
                {uploadError || "PDF, JPG or PNG up to 5 MB. Pick a clearer scan if text is hard to read."}
              </p>

              <div className="mt-7 flex items-center justify-end gap-3">
                <Button
                  type="button"
                  onClick={closeModal}
                  className="vlv-focus min-h-[44px] rounded-[6px] px-5 text-[14px] bg-transparent transition-colors hover:bg-white/5"
                  style={{ color: muted, border: "1px solid " + hairline }}
                >
                  Cancel
                </Button>
                <Button
                  data-wf="i-5-0-3"
                  type="submit"
                  disabled={uploading || !chosen || !!uploadError}
                  className="vlv-focus min-h-[44px] rounded-[6px] px-6 text-[14px] font-semibold transition-opacity duration-150 hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{ backgroundColor: accent, color: brand.backgroundColor, border: "1px solid " + accent }}
                >
                  {uploading ? "Uploading to Mumbai…" : "Upload"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── Row 7 · privacy notice ─────────────────────────────────────── */}
      <div className="grid grid-cols-12 gap-6 mt-10">
        <Card data-wf="b-6-0" className="col-span-12 lg:col-span-8 rounded-[6px]" style={sectionCard}>
          <CardHeader className="px-6 pt-6 pb-3">
            <p className="text-[11px] uppercase tracking-[0.2em] mb-2" style={{ color: accent }}>
              Current version
            </p>
            <CardTitle className="text-[21px]" style={{ fontFamily: brand.fontHeading, color: ink }}>
              Privacy notice v2.1 — published 01 Sep 2026
            </CardTitle>
            <CardDescription className="mt-2 text-[13px] leading-relaxed" style={{ color: muted }}>
              Supersedes v2.0 of 14 Feb 2026. The change records that uploaded documents sit in Amazon S3,
              Asia Pacific (Mumbai).
            </CardDescription>
          </CardHeader>
          {noticeOpen && (
            <CardContent className="px-6 pb-2 vlv-fade-in">
              <div className="h-px mb-5" style={{ backgroundColor: hairline }} />
              {PRIVACY_BODY.map((para, i) => (
                <p key={i} className="text-[14px] leading-[1.65] max-w-[70ch] mb-4" style={{ color: ink }}>
                  {para}
                </p>
              ))}
            </CardContent>
          )}
          <CardFooter className="px-6 pb-6 pt-3">
            <Badge
              className="text-[11px] uppercase tracking-[0.14em] px-2.5 py-1 rounded-[6px]"
              style={{ color: ink, border: "1px solid " + hairline, backgroundColor: panelDeep }}
            >
              <Check className="inline h-3.5 w-3.5 mr-1.5 -mt-px" style={{ color: accent }} aria-hidden="true" />
              Acknowledged 03 Sep 2026
            </Badge>
          </CardFooter>
        </Card>

        <div className="col-span-12 lg:col-span-4 flex flex-col justify-center">
          <button
            data-wf="b-6-1"
            type="button"
            onClick={() => setNoticeOpen((v) => !v)}
            aria-expanded={noticeOpen}
            aria-controls="privacy-body"
            className="vlv-focus inline-flex items-center gap-2 self-start min-h-[44px] text-[15px] rounded-[6px] px-1 transition-colors duration-150 hover:opacity-80"
            style={{ color: accent, textDecoration: "underline", textUnderlineOffset: "5px" }}
          >
            {noticeOpen ? <ChevronDown className="h-4 w-4" aria-hidden="true" /> : <ChevronRight className="h-4 w-4" aria-hidden="true" />}
            Read the full privacy notice
          </button>
          <p className="mt-3 text-[12px] leading-relaxed px-1" style={{ color: muted }}>
            {noticeOpen ? "Collapse to hide the four sections." : "Opens the four sections in place — nothing downloads."}
          </p>
        </div>
      </div>

      {/* ── Row 8 · DPDP statement ─────────────────────────────────────── */}
      <div className="mt-10">
        <div className="h-px mb-5" style={{ backgroundColor: hairline }} />
        <p
          data-wf="b-7-0"
          className="text-[13px] leading-[1.7] max-w-[86ch]"
          style={{ color: muted }}
        >
          Your personal data is processed for employment purposes under the DPDP Act 2023 legitimate-use basis. You may
          view your data here and ask for corrections at any time.
        </p>
      </div>
    </div>
  );
}
