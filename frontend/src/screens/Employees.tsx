// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import * as UI from "@/lib/ui";
import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Button, Input, Textarea, Label, Select, Badge, Table, THead, TBody, TR, TH, TD, Avatar, Empty } = UI;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Plus, Search, Check, X, FileText, Clock, Trash, Edit, Filter, Download, Upload, AlertCircle, CheckCircle } = Icons;

const SURFACE = 'rgba(255,255,255,0.035)';
const SURFACE_HI = 'rgba(255,255,255,0.065)';
const HAIR = 'rgba(255,255,255,0.11)';
const HAIR_SOFT = 'rgba(255,255,255,0.07)';
const SCRIM = 'rgba(6,12,9,0.74)';
const DANGER = '#c5806d';
const WARN = '#cfa05c';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const DEPARTMENTS = ['Engineering', 'Design', 'People & Culture', 'Sales', 'Customer Success', 'Finance', 'Operations'];

const ROLES = ['Employee', 'Manager', 'HR admin'];

const SIGNED_IN_ID = 'EMP-0355';

const SEED_EMPLOYEES = [
  { id: 'EMP-0241', first_name: 'Ravi', last_name: 'Kumar', work_email: 'ravi.kumar@quorq.ai', phone: '+91 98450 11223', address: 'Flat 12B, Prestige Lakeside, Varthur Road, Bengaluru 560087', designation: 'Senior Backend Engineer', department: 'Engineering', manager: 'Ananya Iyer', employment_start_date: '2022-01-10', employment_end_date: '', role: 'Employee', is_active: true },
  { id: 'EMP-0208', first_name: 'Priya', last_name: 'Nair', work_email: 'priya.nair@quorq.ai', phone: '+91 99400 55210', address: '7/3 Kasturi Rangan Road, Alwarpet, Chennai 600018', designation: 'Product Designer', department: 'Design', manager: 'Arjun Mehta', employment_start_date: '2021-07-05', employment_end_date: '', role: 'Employee', is_active: true },
  { id: 'EMP-0102', first_name: 'Ananya', last_name: 'Iyer', work_email: 'ananya.iyer@quorq.ai', phone: '+91 98201 74466', address: '304 Hiranandani Gardens, Powai, Mumbai 400076', designation: 'Engineering Manager', department: 'Engineering', manager: 'Vikram Rao', employment_start_date: '2019-03-18', employment_end_date: '', role: 'Manager', is_active: true },
  { id: 'EMP-0317', first_name: 'Arjun', last_name: 'Mehta', work_email: 'arjun.mehta@quorq.ai', phone: '+91 98111 23907', address: 'C-44 Greater Kailash II, New Delhi 110048', designation: 'Head of Design', department: 'Design', manager: 'Vikram Rao', employment_start_date: '2020-11-02', employment_end_date: '', role: 'Manager', is_active: true },
  { id: 'EMP-0004', first_name: 'Vikram', last_name: 'Rao', work_email: 'vikram.rao@quorq.ai', phone: '+91 98860 10044', address: '22 Lavelle Road, Bengaluru 560001', designation: 'Chief Operating Officer', department: 'Operations', manager: '', employment_start_date: '2018-06-01', employment_end_date: '', role: 'Manager', is_active: true },
  { id: 'EMP-0355', first_name: 'Susan', last_name: 'Raya', work_email: 'susan.raya@quorq.ai', phone: '+91 97400 88120', address: '18 Richmond Town, Bengaluru 560025', designation: 'HR Operations Lead', department: 'People & Culture', manager: 'Vikram Rao', employment_start_date: '2023-02-13', employment_end_date: '', role: 'HR admin', is_active: true },
  { id: 'EMP-0290', first_name: 'Meera', last_name: 'Krishnan', work_email: 'meera.krishnan@quorq.ai', phone: '+91 99620 31778', address: 'Door 41, Panampilly Nagar, Kochi 682036', designation: 'People Partner', department: 'People & Culture', manager: 'Susan Raya', employment_start_date: '2022-09-26', employment_end_date: '', role: 'HR admin', is_active: true },
  { id: 'EMP-0188', first_name: 'Sandeep', last_name: 'Menon', work_email: 'sandeep.menon@quorq.ai', phone: '+91 98300 46612', address: '9 Camac Street, Kolkata 700017', designation: 'Sales Director', department: 'Sales', manager: 'Vikram Rao', employment_start_date: '2021-02-01', employment_end_date: '', role: 'Manager', is_active: true },
  { id: 'EMP-0412', first_name: 'Fatima', last_name: 'Sheikh', work_email: 'fatima.sheikh@quorq.ai', phone: '+91 90040 29981', address: '5th Floor, Banjara Hills Road 12, Hyderabad 500034', designation: 'Account Executive', department: 'Sales', manager: 'Sandeep Menon', employment_start_date: '2024-04-15', employment_end_date: '', role: 'Employee', is_active: true },
  { id: 'EMP-0433', first_name: 'Kavya', last_name: 'Reddy', work_email: 'kavya.reddy@quorq.ai', phone: '+91 95130 70025', address: '112 Jubilee Enclave, Madhapur, Hyderabad 500081', designation: 'Customer Success Manager', department: 'Customer Success', manager: 'Sandeep Menon', employment_start_date: '2024-08-19', employment_end_date: '', role: 'Employee', is_active: true },
  { id: 'EMP-0451', first_name: 'Rahul', last_name: 'Desai', work_email: 'rahul.desai@quorq.ai', phone: '+91 99099 12240', address: '14 Satellite Road, Ahmedabad 380015', designation: 'Financial Analyst', department: 'Finance', manager: 'Vikram Rao', employment_start_date: '2025-01-06', employment_end_date: '', role: 'Employee', is_active: true },
  { id: 'EMP-0470', first_name: 'Tanvi', last_name: 'Joshi', work_email: 'tanvi.joshi@quorq.ai', phone: '+91 98220 61190', address: '27 Model Colony, Shivajinagar, Pune 411016', designation: 'Associate Recruiter', department: 'People & Culture', manager: 'Meera Krishnan', employment_start_date: '2026-10-05', employment_end_date: '', role: 'Employee', is_active: true },
  { id: 'EMP-0126', first_name: 'Neha', last_name: 'Gupta', work_email: 'neha.gupta@quorq.ai', phone: '+91 97170 55831', address: 'B-7 Sector 50, Noida 201301', designation: 'QA Engineer', department: 'Engineering', manager: 'Ananya Iyer', employment_start_date: '2020-05-11', employment_end_date: '2026-08-31', role: 'Employee', is_active: false },
  { id: 'EMP-0199', first_name: 'Imran', last_name: 'Qureshi', work_email: 'imran.qureshi@quorq.ai', phone: '+91 90350 44218', address: '3 Dalal Street Annexe, Fort, Mumbai 400023', designation: 'DevOps Engineer', department: 'Engineering', manager: 'Ananya Iyer', employment_start_date: '2021-11-22', employment_end_date: '2026-03-14', role: 'Employee', is_active: false }
];

const SEED_DOCS = {
  'EMP-0241': [
    { id: 'doc-8821', doc_type: 'ID proof', file_name: 'aadhaar-ravi.pdf', size_bytes: 1258291, uploaded_at: '2026-02-12', uploaded_by: 'Susan Raya' },
    { id: 'doc-4410', doc_type: 'Offer letter', file_name: 'offer-letter.pdf', size_bytes: 491520, uploaded_at: '2022-01-10', uploaded_by: 'Meera Krishnan' }
  ],
  'EMP-0208': [
    { id: 'doc-6612', doc_type: 'ID proof', file_name: 'pan-priya-nair.pdf', size_bytes: 325632, uploaded_at: '2021-08-04', uploaded_by: 'Meera Krishnan' },
    { id: 'doc-6613', doc_type: 'Offer letter', file_name: 'offer-letter-priya.pdf', size_bytes: 514048, uploaded_at: '2021-07-05', uploaded_by: 'Meera Krishnan' },
    { id: 'doc-7740', doc_type: 'Education certificate', file_name: 'nid-degree.jpg', size_bytes: 2516582, uploaded_at: '2021-08-04', uploaded_by: 'Priya Nair' }
  ],
  'EMP-0412': [
    { id: 'doc-9003', doc_type: 'ID proof', file_name: 'passport-fsheikh.pdf', size_bytes: 1887436, uploaded_at: '2024-04-18', uploaded_by: 'Fatima Sheikh' },
    { id: 'doc-9004', doc_type: 'Offer letter', file_name: 'offer-letter-fs.pdf', size_bytes: 466944, uploaded_at: '2024-04-15', uploaded_by: 'Susan Raya' }
  ],
  'EMP-0126': [
    { id: 'doc-2290', doc_type: 'ID proof', file_name: 'aadhaar-neha.pdf', size_bytes: 1153434, uploaded_at: '2020-05-14', uploaded_by: 'Meera Krishnan' },
    { id: 'doc-2291', doc_type: 'Exit clearance', file_name: 'exit-clearance-ng.pdf', size_bytes: 288768, uploaded_at: '2026-09-02', uploaded_by: 'Susan Raya' }
  ]
};

const IMPORT_ERRORS = [
  { row: 14, name: 'Deepak Shetty', work_email: 'deepak.shetty@quorq.ai', error: 'Employment start date "31/02/2026" is not a real date — use YYYY-MM-DD.' },
  { row: 37, name: '(blank)', work_email: 'priya.nair@quorq.ai', error: 'Work email already belongs to EMP-0208. Row skipped, existing record untouched.' }
];

const IMPORTED_ROWS = [
  { id: 'EMP-0501', first_name: 'Aditya', last_name: 'Bose', work_email: 'aditya.bose@quorq.ai', phone: '+91 98310 20114', address: '41 Salt Lake Sector V, Kolkata 700091', designation: 'Data Engineer', department: 'Engineering', manager: 'Ananya Iyer', employment_start_date: '2026-11-03', employment_end_date: '', role: 'Employee', is_active: true },
  { id: 'EMP-0502', first_name: 'Lakshmi', last_name: 'Pillai', work_email: 'lakshmi.pillai@quorq.ai', phone: '+91 94470 88312', address: 'Vellayambalam, Thiruvananthapuram 695010', designation: 'Support Specialist', department: 'Customer Success', manager: 'Sandeep Menon', employment_start_date: '2026-11-03', employment_end_date: '', role: 'Employee', is_active: true }
];

const BLANK_FORM = {
  id: '', first_name: '', last_name: '', work_email: '', phone: '', address: '',
  designation: '', department: 'Engineering', manager: '', employment_start_date: '',
  employment_end_date: '', role: 'Employee', is_active: true
};

function fmtDate(iso) {
  if (!iso) return '—';
  const p = String(iso).split('-');
  if (p.length !== 3) return iso;
  return Number(p[2]) + ' ' + MONTHS[Number(p[1]) - 1] + ' ' + p[0];
}

function fmtSize(b) {
  if (b >= 1048576) return (b / 1048576).toFixed(1) + ' MB';
  return Math.round(b / 1024) + ' KB';
}

export default function Screen() {
  const [rows, setRows] = React.useState(SEED_EMPLOYEES);
  const [total, setTotal] = React.useState(128);
  const [query, setQuery] = React.useState('');
  const [dept, setDept] = React.useState('all');
  const [status, setStatus] = React.useState('all');
  const [selectedId, setSelectedId] = React.useState('EMP-0241');
  const [docs, setDocs] = React.useState(SEED_DOCS);
  const [upload, setUpload] = React.useState({ state: 'idle', error: '', name: '' });
  const [editOpen, setEditOpen] = React.useState(false);
  const [mode, setMode] = React.useState('edit');
  const [form, setForm] = React.useState(BLANK_FORM);
  const [errors, setErrors] = React.useState({});
  const [saving, setSaving] = React.useState(false);
  const [confirmOff, setConfirmOff] = React.useState(false);
  const [importOpen, setImportOpen] = React.useState(false);
  const [imp, setImp] = React.useState({ stage: 'idle', file: '', error: '' });
  const [toast, setToast] = React.useState(null);
  const [flashId, setFlashId] = React.useState(null);

  const timers = React.useRef([]);
  const returnFocus = React.useRef(null);
  const sheetRef = React.useRef(null);

  React.useEffect(() => () => { timers.current.forEach(clearTimeout); }, []);

  const later = (fn, ms) => { const t = setTimeout(fn, ms); timers.current.push(t); };
  const say = (text, tone) => {
    setToast({ text: text, tone: tone || 'ok' });
    later(() => setToast(null), 5200);
  };

  const filtered = rows.filter((r) => {
    const q = query.trim().toLowerCase();
    if (q) {
      const name = (r.first_name + ' ' + r.last_name).toLowerCase();
      if (name.indexOf(q) === -1 && r.work_email.toLowerCase().indexOf(q) === -1) return false;
    }
    if (dept !== 'all' && r.department !== dept) return false;
    if (status !== 'all' && (status === 'active') !== r.is_active) return false;
    return true;
  });

  const isFiltered = query.trim() !== '' || dept !== 'all' || status !== 'all';
  const selected = rows.filter((r) => r.id === selectedId)[0] || rows[0];
  const selectedDocs = (selected && docs[selected.id]) || [];
  const managers = rows.filter((r) => r.role !== 'Employee' && r.is_active).map((r) => r.first_name + ' ' + r.last_name);

  const openEdit = (emp, ev) => {
    returnFocus.current = ev && ev.currentTarget;
    setMode('edit');
    setForm(Object.assign({}, emp));
    setErrors({});
    setConfirmOff(false);
    setSelectedId(emp.id);
    setEditOpen(true);
    later(() => { const el = document.getElementById('f-first_name'); if (el) el.focus(); }, 30);
  };

  const openCreate = (ev) => {
    returnFocus.current = ev && ev.currentTarget;
    setMode('create');
    setForm(Object.assign({}, BLANK_FORM, { manager: 'Ananya Iyer' }));
    setErrors({});
    setConfirmOff(false);
    setEditOpen(true);
    later(() => { const el = document.getElementById('f-first_name'); if (el) el.focus(); }, 30);
  };

  const closeEdit = () => {
    setEditOpen(false);
    setSaving(false);
    if (returnFocus.current && returnFocus.current.focus) returnFocus.current.focus();
  };

  const setField = (k, v) => setForm((f) => Object.assign({}, f, { [k]: v }));

  const saveRecord = (e) => {
    if (e) e.preventDefault();
    const errs = {};
    if (!form.first_name.trim()) errs.first_name = 'First name is required.';
    if (!form.last_name.trim()) errs.last_name = 'Last name is required.';
    if (!form.work_email.trim()) errs.work_email = 'Work email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.work_email.trim())) errs.work_email = 'Use a full work email, like ravi.kumar@quorq.ai.';
    if (!form.employment_start_date) errs.employment_start_date = 'Employment start date is required.';
    setErrors(errs);
    const keys = Object.keys(errs);
    if (keys.length) {
      later(() => { const el = document.getElementById('f-' + keys[0]); if (el) el.focus(); }, 20);
      return;
    }
    setSaving(true);
    later(() => {
      if (mode === 'create') {
        const nextId = 'EMP-0' + (480 + rows.length);
        const rec = Object.assign({}, form, { id: nextId });
        setRows((rs) => [rec].concat(rs));
        setTotal((t) => t + 1);
        setSelectedId(nextId);
        setFlashId(nextId);
        say(rec.first_name + ' ' + rec.last_name + ' added to the directory as ' + nextId + '. Sign-in invite sent to ' + rec.work_email + '.');
      } else {
        setRows((rs) => rs.map((r) => (r.id === form.id ? Object.assign({}, form) : r)));
        setFlashId(form.id);
        say(form.first_name + ' ' + form.last_name + '’s record saved. Role set to ' + form.role + '.');
      }
      setSaving(false);
      setEditOpen(false);
      later(() => setFlashId(null), 2400);
      if (returnFocus.current && returnFocus.current.focus) returnFocus.current.focus();
    }, 650);
  };

  const deactivate = () => {
    setRows((rs) => rs.map((r) => (r.id === form.id ? Object.assign({}, r, { is_active: false, employment_end_date: r.employment_end_date || '2026-10-30' }) : r)));
    setFlashId(form.id);
    setConfirmOff(false);
    setEditOpen(false);
    say(form.first_name + ' ' + form.last_name + ' can no longer sign in. The record and ' + ((docs[form.id] || []).length) + ' documents stay on file.', 'warn');
    later(() => setFlashId(null), 2400);
    if (returnFocus.current && returnFocus.current.focus) returnFocus.current.focus();
  };

  const startUpload = () => {
    const fileName = 'id-proof-' + selected.first_name.toLowerCase() + '-' + selected.id.toLowerCase() + '.pdf';
    setUpload({ state: 'uploading', name: fileName, error: '' });
    later(() => {
      const doc = {
        id: 'doc-' + (5200 + selectedDocs.length),
        doc_type: 'ID proof',
        file_name: fileName,
        size_bytes: 1468006,
        uploaded_at: '2026-10-30',
        uploaded_by: 'Susan Raya'
      };
      setDocs((d) => Object.assign({}, d, { [selected.id]: [doc].concat(d[selected.id] || []) }));
      setUpload({ state: 'idle', name: '', error: '' });
      say(fileName + ' stored in Amazon S3 (ap-south-1, Mumbai) against ' + selected.id + '.');
    }, 950);
  };

  const onPickSheet = (e) => {
    const f = e.target.files && e.target.files[0];
    e.target.value = '';
    if (!f) return;
    if (!/\.(xlsx|xls|csv)$/.test(f.name.toLowerCase())) {
      setImp({ stage: 'error', file: f.name, error: 'That file is not a spreadsheet. The importer reads .xlsx, .xls or .csv files that match the template.' });
      return;
    }
    setImp({ stage: 'ready', file: f.name, error: '' });
  };

  const runImport = () => {
    setImp((s) => Object.assign({}, s, { stage: 'running', error: '' }));
    later(() => {
      setImp((s) => Object.assign({}, s, { stage: 'done' }));
      setRows((rs) => IMPORTED_ROWS.concat(rs));
      setTotal((t) => t + 48);
      say('48 employees created from ' + (imp.file || 'hires-nov-2026.xlsx') + '. 2 rows need fixing.');
    }, 1400);
  };

  const panelKey = (e, close) => {
    if (e.key === 'Escape') { e.stopPropagation(); close(); return; }
    if (e.key !== 'Tab') return;
    const f = e.currentTarget.querySelectorAll('button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [href]');
    if (!f.length) return;
    const first = f[0];
    const last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  };

  const css = `
    .vel [data-focus]:focus-visible, .vel button:focus-visible, .vel input:focus-visible, .vel select:focus-visible, .vel textarea:focus-visible {
      outline: 2px solid var(--accent); outline-offset: 2px;
    }
    .vel-in { animation: velIn .4s cubic-bezier(.22,.8,.3,1) both; }
    .vel-flash { animation: velFlash 2.2s ease-out both; }
    .vel-rise { animation: velRise .22s ease-out both; }
    .vel-fade { animation: velFade .18s ease-out both; }
    .vel-bar::after { content:''; position:absolute; inset:0; width:40%; background:var(--accent); opacity:.65; animation: velSlide 1.3s ease-in-out infinite; }
    @keyframes velIn { from { opacity:0; transform: translateY(-6px); } to { opacity:1; transform:none; } }
    @keyframes velFlash { 0% { background: rgba(143,174,139,.22); } 100% { background: transparent; } }
    @keyframes velRise { from { opacity:0; transform: translateY(10px) scale(.995); } to { opacity:1; transform:none; } }
    @keyframes velFade { from { opacity:0; } to { opacity:1; } }
    @keyframes velSlide { 0% { transform: translateX(-100%);} 100% { transform: translateX(250%);} }
    @media (prefers-reduced-motion: reduce) { .vel *, .vel *::after { animation: none !important; transition: none !important; } }
  `;

  const label = 'text-[11px] uppercase tracking-[0.18em]';
  const btnPrimary = { backgroundColor: brand.accentColor, color: brand.backgroundColor, border: '1px solid ' + brand.accentColor, borderRadius: brand.radius };
  const btnQuiet = { backgroundColor: 'transparent', color: brand.primaryColor, border: '1px solid ' + HAIR, borderRadius: brand.radius };
  const inputStyle = { backgroundColor: 'rgba(0,0,0,0.22)', border: '1px solid ' + HAIR, color: brand.primaryColor, borderRadius: brand.radius };

  const field = (key, labelText, opts) => {
    const o = opts || {};
    const bad = errors[key];
    return (
      <div className={o.span || ''}>
        <Label htmlFor={'f-' + key} className={label + ' block mb-2'} style={{ color: brand.neutralColor }}>
          {labelText}{o.required ? <span style={{ color: brand.accentColor }} aria-hidden="true"> *</span> : null}
          {o.required ? <span className="sr-only"> (required)</span> : null}
        </Label>
        {o.type === 'select' ? (
          <Select
            id={'f-' + key}
            data-wf={o.wf}
            value={form[key]}
            disabled={o.disabled}
            onChange={(e) => setField(key, e.target.value)}
            className="w-full h-11 px-3 text-sm disabled:opacity-50"
            style={inputStyle}
          >
            {o.options.map((op) => <option key={op.value} value={op.value} style={{ backgroundColor: brand.backgroundColor }}>{op.label}</option>)}
          </Select>
        ) : o.type === 'textarea' ? (
          <Textarea
            id={'f-' + key}
            data-wf={o.wf}
            rows={2}
            value={form[key]}
            onChange={(e) => setField(key, e.target.value)}
            className="w-full px-3 py-2 text-sm"
            style={inputStyle}
          />
        ) : (
          <Input
            id={'f-' + key}
            data-wf={o.wf}
            type={o.type || 'text'}
            value={form[key]}
            placeholder={o.placeholder}
            aria-invalid={bad ? 'true' : undefined}
            aria-describedby={bad ? 'err-' + key : undefined}
            onChange={(e) => setField(key, e.target.value)}
            className="w-full h-11 px-3 text-sm placeholder:text-[var(--muted)]"
            style={Object.assign({}, inputStyle, bad ? { borderColor: DANGER } : null)}
          />
        )}
        {bad ? (
          <p id={'err-' + key} className="mt-2 text-xs flex items-center gap-1.5" style={{ color: DANGER }}>
            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />{bad}
          </p>
        ) : o.hint ? (
          <p className="mt-2 text-xs" style={{ color: brand.neutralColor }}>{o.hint}</p>
        ) : null}
      </div>
    );
  };

  const isSelf = mode === 'edit' && form.id === SIGNED_IN_ID;

  return (
    <div
      className="vel min-h-full px-6 py-8 md:px-10 md:py-10"
      style={{
        '--accent': brand.accentColor,
        '--muted': brand.neutralColor,
        backgroundColor: brand.backgroundColor,
        color: brand.primaryColor,
        fontFamily: brand.fontBody
      }}
    >
      <style>{css}</style>

      <div className="mx-auto max-w-[1180px]">

        {/* Row 1 — title + actions */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:items-end">
          <div className="md:col-span-6" data-wf="b-0-0">
            <p className={label} style={{ color: brand.accentColor }}>People operations</p>
            <h1 className="mt-2 text-[34px] md:text-[40px] leading-[1.1]" style={{ fontFamily: brand.fontHeading }}>
              Employee Records
            </h1>
            <p className="mt-3 text-sm max-w-[62ch] leading-relaxed" style={{ color: brand.neutralColor }}>
              Every record, role and ID proof for Quorq India. You are signed in as Susan Raya — HR admin, full access.
            </p>
          </div>
          <div className="md:col-span-3">
            <Button
              data-wf="b-0-1"
              onClick={openCreate}
              className="w-full h-11 inline-flex items-center justify-center gap-2 text-sm font-medium transition-opacity hover:opacity-90"
              style={btnPrimary}
            >
              <Plus className="w-4 h-4" aria-hidden="true" />
              Add employee
            </Button>
          </div>
          <div className="md:col-span-3">
            <Button
              data-wf="b-0-2"
              onClick={(ev) => { returnFocus.current = ev.currentTarget; setImp({ stage: 'idle', file: '', error: '' }); setImportOpen(true); later(() => { const el = document.getElementById('import-close'); if (el) el.focus(); }, 30); }}
              className="w-full h-11 inline-flex items-center justify-center gap-2 text-sm transition-colors hover:bg-white/5"
              style={btnQuiet}
            >
              <Upload className="w-4 h-4" aria-hidden="true" />
              Import from spreadsheet
            </Button>
          </div>
        </div>

        <div className="my-7 h-px w-full" style={{ backgroundColor: HAIR_SOFT }} />

        {/* Row 2 — search + filters */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-6">
            <Label htmlFor="dir-search" className={label + ' block mb-2'} style={{ color: brand.neutralColor }}>
              Search by name or work email
            </Label>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: brand.neutralColor }} aria-hidden="true" />
              <Input
                id="dir-search"
                data-wf="b-1-0"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ravi Kumar, priya.nair@quorq.ai…"
                className="w-full h-11 pl-10 pr-3 text-sm placeholder:text-[var(--muted)]"
                style={inputStyle}
              />
            </div>
          </div>

          <div className="md:col-span-6" data-wf="b-1-1">
            <div className="flex items-end gap-4">
              <Filter className="w-4 h-4 mb-3.5 shrink-0" style={{ color: brand.accentColor }} aria-hidden="true" />
              <div className="flex-1">
                <Label htmlFor="f-dept" className={label + ' block mb-2'} style={{ color: brand.neutralColor }}>Department</Label>
                <Select id="f-dept" data-wf="i-1-1-0" value={dept} onChange={(e) => setDept(e.target.value)} className="w-full h-11 px-3 text-sm" style={inputStyle}>
                  <option value="all" style={{ backgroundColor: brand.backgroundColor }}>All departments</option>
                  {DEPARTMENTS.map((d) => <option key={d} value={d} style={{ backgroundColor: brand.backgroundColor }}>{d}</option>)}
                </Select>
              </div>
              <div className="flex-1">
                <Label htmlFor="f-status" className={label + ' block mb-2'} style={{ color: brand.neutralColor }}>Status</Label>
                <Select id="f-status" data-wf="i-1-1-1" value={status} onChange={(e) => setStatus(e.target.value)} className="w-full h-11 px-3 text-sm" style={inputStyle}>
                  <option value="all" style={{ backgroundColor: brand.backgroundColor }}>All statuses</option>
                  <option value="active" style={{ backgroundColor: brand.backgroundColor }}>Active</option>
                  <option value="inactive" style={{ backgroundColor: brand.backgroundColor }}>Deactivated</option>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3 — directory */}
        <section className="mt-7" data-wf="b-2-0" aria-labelledby="dir-title">
          <div style={{ backgroundColor: SURFACE, border: '1px solid ' + HAIR, borderRadius: brand.radius }}>
            <div className="px-5 py-4 md:px-6 flex flex-wrap items-baseline justify-between gap-3" style={{ borderBottom: '1px solid ' + HAIR_SOFT }}>
              <h2 id="dir-title" className="text-[20px]" style={{ fontFamily: brand.fontHeading }}>
                Employee directory —{' '}
                <span style={{ color: brand.accentColor, fontVariantNumeric: 'tabular-nums' }}>
                  {isFiltered ? filtered.length + ' of ' + total : total + ' records'}
                </span>
                {isFiltered ? <span style={{ color: brand.accentColor }}> records</span> : null}
              </h2>
              <p className="text-xs flex items-center gap-2" style={{ color: brand.neutralColor, fontVariantNumeric: 'tabular-nums' }}>
                <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                Synced 10:42 IST · records and documents held in India (ap-south-1)
              </p>
            </div>

            {filtered.length === 0 ? (
              <div className="px-6 py-14">
                <Empty
                  title="No record matches those filters"
                  description={'Nothing in the directory matches ' + (query.trim() ? '“' + query.trim() + '”' : 'this combination') + (dept !== 'all' ? ' in ' + dept : '') + (status !== 'all' ? ' with status ' + (status === 'active' ? 'Active' : 'Deactivated') : '') + '. Check the spelling, widen the department or status filter, or clear the search box to see all ' + total + ' records.'}
                />
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table className="w-full text-sm" style={{ fontVariantNumeric: 'tabular-nums', minWidth: '1000px' }}>
                  <THead>
                    <TR style={{ borderBottom: '1px solid ' + HAIR_SOFT }}>
                      <TH scope="col" data-wf="i-2-0-0" className={'text-left font-normal px-5 py-3 ' + label} style={{ color: brand.neutralColor }}>Name</TH>
                      <TH scope="col" data-wf="i-2-0-1" className={'text-left font-normal px-5 py-3 ' + label} style={{ color: brand.neutralColor }}>Work email</TH>
                      <TH scope="col" data-wf="i-2-0-2" className={'text-left font-normal px-5 py-3 ' + label} style={{ color: brand.neutralColor }}>Designation</TH>
                      <TH scope="col" data-wf="i-2-0-3" className={'text-left font-normal px-5 py-3 ' + label} style={{ color: brand.neutralColor }}>Department</TH>
                      <TH scope="col" data-wf="i-2-0-4" className={'text-left font-normal px-5 py-3 ' + label} style={{ color: brand.neutralColor }}>Reporting manager</TH>
                      <TH scope="col" data-wf="i-2-0-5" className={'text-left font-normal px-5 py-3 ' + label} style={{ color: brand.neutralColor }}>Employment start date</TH>
                      <TH scope="col" data-wf="i-2-0-6" className={'text-left font-normal px-5 py-3 ' + label} style={{ color: brand.neutralColor }}>Role</TH>
                      <TH scope="col" data-wf="i-2-0-7" className={'text-left font-normal px-5 py-3 ' + label} style={{ color: brand.neutralColor }}>Status</TH>
                      <TH scope="col" className="px-5 py-3"><span className="sr-only">Row actions</span></TH>
                    </TR>
                  </THead>
                  <TBody>
                    {filtered.map((r) => {
                      const sel = r.id === selectedId;
                      return (
                        <TR
                          key={r.id}
                          className={(flashId === r.id ? 'vel-flash ' : '') + 'transition-colors hover:bg-white/[0.04]'}
                          style={{
                            borderBottom: '1px solid ' + HAIR_SOFT,
                            backgroundColor: sel ? SURFACE_HI : 'transparent',
                            boxShadow: sel ? 'inset 2px 0 0 ' + brand.accentColor : 'none'
                          }}
                        >
                          <TD className="px-5 py-3.5 align-middle">
                            <div className="flex items-center gap-3">
                              <Avatar name={r.first_name + ' ' + r.last_name} className="w-8 h-8 shrink-0" />
                              <span className="block">
                                <span className="block" style={{ color: brand.primaryColor }}>{r.first_name} {r.last_name}</span>
                                <span className="block text-[11px] tracking-[0.12em]" style={{ color: brand.accentColor }}>{r.id}</span>
                              </span>
                            </div>
                          </TD>
                          <TD className="px-5 py-3.5 align-middle" style={{ color: brand.neutralColor }}>{r.work_email}</TD>
                          <TD className="px-5 py-3.5 align-middle">{r.designation}</TD>
                          <TD className="px-5 py-3.5 align-middle" style={{ color: brand.neutralColor }}>{r.department}</TD>
                          <TD className="px-5 py-3.5 align-middle" style={{ color: brand.neutralColor }}>{r.manager || '— none —'}</TD>
                          <TD className="px-5 py-3.5 align-middle">{fmtDate(r.employment_start_date)}</TD>
                          <TD className="px-5 py-3.5 align-middle">
                            <Badge
                              className="inline-flex items-center px-2 py-0.5 text-[11px] tracking-[0.08em]"
                              style={{
                                borderRadius: brand.radius,
                                border: '1px solid ' + (r.role === 'Employee' ? HAIR : brand.accentColor),
                                backgroundColor: r.role === 'Employee' ? 'transparent' : 'rgba(143,174,139,0.12)',
                                color: r.role === 'Employee' ? brand.neutralColor : brand.accentColor
                              }}
                            >
                              {r.role}
                            </Badge>
                          </TD>
                          <TD className="px-5 py-3.5 align-middle">
                            <span className="inline-flex items-center gap-1.5" style={{ color: r.is_active ? brand.primaryColor : brand.neutralColor }}>
                              {r.is_active
                                ? <CheckCircle className="w-3.5 h-3.5" style={{ color: brand.accentColor }} aria-hidden="true" />
                                : <X className="w-3.5 h-3.5" style={{ color: DANGER }} aria-hidden="true" />}
                              {r.is_active ? 'Active' : 'Deactivated'}
                            </span>
                            {!r.is_active && r.employment_end_date ? (
                              <span className="block text-[11px] mt-0.5" style={{ color: brand.neutralColor }}>Left {fmtDate(r.employment_end_date)}</span>
                            ) : null}
                          </TD>
                          <TD className="px-5 py-3.5 align-middle text-right">
                            <Button
                              onClick={(ev) => openEdit(r, ev)}
                              aria-label={'Edit record for ' + r.first_name + ' ' + r.last_name}
                              className="h-9 px-3 inline-flex items-center gap-1.5 text-xs transition-colors hover:bg-white/10"
                              style={btnQuiet}
                            >
                              <Edit className="w-3.5 h-3.5" aria-hidden="true" />
                              Edit
                            </Button>
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

        {/* Row 5 — rules note */}
        <p
          data-wf="b-4-0"
          className="mt-5 text-sm flex items-start gap-3 px-5 py-4"
          style={{ color: brand.neutralColor, border: '1px solid ' + HAIR_SOFT, borderLeft: '2px solid ' + brand.accentColor, borderRadius: brand.radius }}
        >
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: brand.accentColor }} aria-hidden="true" />
          <span className="max-w-[80ch] leading-relaxed">
            Name, work email and employment start date are required. Deactivated users can no longer sign in, but their records are retained.
          </span>
        </p>

        {/* Row 6 — documents */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6">
          <section className="md:col-span-8" data-wf="b-5-0" aria-labelledby="docs-title">
            <div style={{ backgroundColor: SURFACE, border: '1px solid ' + HAIR, borderRadius: brand.radius }}>
              <div className="px-5 py-4 md:px-6 flex flex-wrap items-center justify-between gap-3" style={{ borderBottom: '1px solid ' + HAIR_SOFT }}>
                <h2 id="docs-title" className="text-[20px]" style={{ fontFamily: brand.fontHeading }}>
                  Documents on file — {selected.first_name} {selected.last_name}
                </h2>
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] uppercase tracking-[0.14em]"
                  style={{ border: '1px solid ' + brand.accentColor, color: brand.accentColor, borderRadius: brand.radius }}
                >
                  <Check className="w-3 h-3" aria-hidden="true" />
                  S3 · ap-south-1 Mumbai
                </span>
              </div>

              {selectedDocs.length === 0 ? (
                <div className="px-6 py-10">
                  <Empty
                    title="Nothing on file yet"
                    description={selected.first_name + ' ' + selected.last_name + ' joined on ' + fmtDate(selected.employment_start_date) + ' and has no documents against ' + selected.id + '. Upload an ID proof as PDF, JPG or PNG, up to 10 MB.'}
                  />
                </div>
              ) : (
                <ul className="divide-y" style={{ borderColor: HAIR_SOFT }}>
                  {selectedDocs.map((d, i) => (
                    <li
                      key={d.id}
                      data-wf={i < 2 ? 'i-5-0-' + i : undefined}
                      className="px-5 md:px-6 py-4 flex items-center justify-between gap-4"
                      style={{ borderTop: i === 0 ? 'none' : '1px solid ' + HAIR_SOFT }}
                    >
                      <div className="flex items-start gap-3 min-w-0">
                        <FileText className="w-4 h-4 mt-0.5 shrink-0" style={{ color: brand.accentColor }} aria-hidden="true" />
                        <div className="min-w-0">
                          <p className="text-sm truncate">
                            <span style={{ color: brand.neutralColor }}>{d.doc_type} — </span>
                            {d.file_name}
                          </p>
                          <p className="text-xs mt-1" style={{ color: brand.neutralColor, fontVariantNumeric: 'tabular-nums' }}>
                            {fmtSize(d.size_bytes)} · {fmtDate(d.uploaded_at)} · uploaded by {d.uploaded_by}
                          </p>
                        </div>
                      </div>
                      <Button
                        onClick={() => say('Signed download link for ' + d.file_name + ' created — valid 5 minutes, audit logged.')}
                        aria-label={'Download ' + d.file_name}
                        className="h-9 px-3 inline-flex items-center gap-1.5 text-xs shrink-0 transition-colors hover:bg-white/10"
                        style={btnQuiet}
                      >
                        <Download className="w-3.5 h-3.5" aria-hidden="true" />
                        Download
                      </Button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>

          <div className="md:col-span-4">
            <div className="p-5" style={{ backgroundColor: SURFACE, border: '1px solid ' + HAIR, borderRadius: brand.radius }}>
              <Button
                data-wf="b-5-1"
                onClick={startUpload}
                disabled={upload.state === 'uploading'}
                className="w-full h-11 inline-flex items-center justify-center gap-2 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-60"
                style={btnPrimary}
              >
                <Upload className="w-4 h-4" aria-hidden="true" />
                {upload.state === 'uploading' ? 'Uploading…' : 'Upload document'}
              </Button>

              <p className="mt-3 text-xs leading-relaxed" style={{ color: brand.neutralColor }}>
                PDF, JPG or PNG up to 10 MB. Files are written to Amazon S3 in Mumbai and served only through short-lived signed links.
              </p>

              {upload.state === 'uploading' ? (
                <div className="mt-4 vel-fade" role="status">
                  <p className="text-xs" style={{ color: brand.primaryColor }}>Encrypting and storing {upload.name}…</p>
                  <div className="relative mt-2 h-[3px] overflow-hidden vel-bar" style={{ backgroundColor: HAIR }} />
                </div>
              ) : null}

              {upload.state === 'error' ? (
                <div className="mt-4 p-3 vel-fade" role="alert" style={{ border: '1px solid ' + DANGER, borderRadius: brand.radius, backgroundColor: 'rgba(197,128,109,0.10)' }}>
                  <p className="text-xs flex items-start gap-2" style={{ color: brand.primaryColor }}>
                    <AlertCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: DANGER }} aria-hidden="true" />
                    <span>{upload.error}</span>
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* Row 4 — edit / create modal */}
      {editOpen ? (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 md:p-8 vel-fade" style={{ backgroundColor: SCRIM }}>
          <div
            data-wf="b-3-0"
            role="dialog"
            aria-modal="true"
            aria-labelledby="edit-title"
            tabIndex={-1}
            onKeyDown={(e) => panelKey(e, closeEdit)}
            className="w-full max-w-[880px] vel-rise"
            style={{ backgroundColor: '#1a2621', border: '1px solid ' + HAIR, borderRadius: brand.radius, boxShadow: '0 24px 60px rgba(0,0,0,0.55)' }}
          >
            <div className="px-6 py-5 flex items-start justify-between gap-4" style={{ borderBottom: '1px solid ' + HAIR_SOFT }}>
              <div>
                <p className={label} style={{ color: brand.accentColor }}>{mode === 'create' ? 'New record' : form.id}</p>
                <h2 id="edit-title" className="mt-1.5 text-[26px] leading-tight" style={{ fontFamily: brand.fontHeading }}>
                  {mode === 'create' ? 'Add employee' : 'Edit employee — ' + form.first_name + ' ' + form.last_name}
                </h2>
              </div>
              <Button
                id="edit-close"
                onClick={closeEdit}
                aria-label="Close without saving"
                className="h-9 w-9 inline-flex items-center justify-center shrink-0 hover:bg-white/10"
                style={{ borderRadius: brand.radius, color: brand.primaryColor, backgroundColor: 'transparent', border: '1px solid ' + HAIR }}
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </Button>
            </div>

            <form onSubmit={saveRecord}>
              <div className="px-6 py-6 space-y-5 max-h-[62vh] overflow-y-auto">
                {Object.keys(errors).length ? (
                  <div role="alert" className="px-4 py-3 vel-fade" style={{ border: '1px solid ' + DANGER, borderRadius: brand.radius, backgroundColor: 'rgba(197,128,109,0.10)' }}>
                    <p className="text-sm flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: DANGER }} aria-hidden="true" />
                      <span>Nothing was saved. {Object.keys(errors).length} required {Object.keys(errors).length === 1 ? 'field needs' : 'fields need'} attention — everything you typed is still here.</span>
                    </p>
                  </div>
                ) : null}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {field('first_name', 'First name', { required: true, wf: 'i-3-0-0', placeholder: 'Ravi' })}
                  {field('last_name', 'Last name', { required: true, wf: 'i-3-0-1', placeholder: 'Kumar' })}
                  {field('work_email', 'Work email', { required: true, wf: 'i-3-0-2', type: 'email', placeholder: 'ravi.kumar@quorq.ai' })}
                  {field('phone', 'Phone', { wf: 'i-3-0-3', placeholder: '+91 98450 11223' })}
                </div>

                {field('address', 'Address', { wf: 'i-3-0-4', type: 'textarea', hint: 'Processed under the DPDP Act 2023 employment legitimate-use basis.' })}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {field('designation', 'Designation', { wf: 'i-3-0-5', placeholder: 'Senior Backend Engineer' })}
                  {field('department', 'Department', { wf: 'i-3-0-6', type: 'select', options: DEPARTMENTS.map((d) => ({ value: d, label: d })) })}
                  {field('manager', 'Reporting manager', { wf: 'i-3-0-7', type: 'select', options: [{ value: '', label: '— none —' }].concat(managers.map((m) => ({ value: m, label: m }))) })}
                  {field('employment_start_date', 'Employment start date', { required: true, wf: 'i-3-0-8', type: 'date' })}
                </div>

                <div className="pt-1">
                  <div className="h-px w-full mb-5" style={{ backgroundColor: HAIR_SOFT }} />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {field('role', 'Role', {
                      wf: 'i-3-0-9',
                      type: 'select',
                      disabled: isSelf,
                      options: ROLES.map((r) => ({ value: r, label: r })),
                      hint: isSelf
                        ? 'You cannot change your own role. Meera Krishnan (HR admin) can do it — ask in #people-ops.'
                        : 'Employee: self-service only. Manager: approvals and team views. HR admin: all records, policies and reports.'
                    })}
                    <div className="flex items-end">
                      <p className="text-xs leading-relaxed" style={{ color: brand.neutralColor }}>
                        {mode === 'create'
                          ? 'A sign-in invite goes to the work email as soon as the record is saved.'
                          : 'Role changes take effect the next time ' + form.first_name + ' signs in.'}
                      </p>
                    </div>
                  </div>
                </div>

                {confirmOff ? (
                  <div className="px-4 py-4 vel-fade" role="alertdialog" aria-label="Confirm deactivation" style={{ border: '1px solid ' + DANGER, borderRadius: brand.radius, backgroundColor: 'rgba(197,128,109,0.10)' }}>
                    <p className="text-sm leading-relaxed">
                      Deactivate {form.first_name} {form.last_name}’s login? They are signed out immediately and cannot sign in again. The record, attendance history and {(docs[form.id] || []).length} stored documents are retained.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Button type="button" onClick={deactivate} className="h-10 px-4 text-sm" style={{ backgroundColor: DANGER, color: brand.backgroundColor, border: '1px solid ' + DANGER, borderRadius: brand.radius }}>
                        Yes, deactivate account
                      </Button>
                      <Button type="button" onClick={() => setConfirmOff(false)} className="h-10 px-4 text-sm" style={btnQuiet}>
                        Keep access
                      </Button>
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="px-6 py-5 flex flex-wrap items-center justify-between gap-3" style={{ borderTop: '1px solid ' + HAIR_SOFT }}>
                <Button
                  type="button"
                  data-wf="i-3-0-11"
                  disabled={mode === 'create' || isSelf || !form.is_active}
                  onClick={() => setConfirmOff(true)}
                  className="h-11 px-4 inline-flex items-center gap-2 text-sm transition-colors hover:bg-white/5 disabled:opacity-45 disabled:cursor-not-allowed"
                  style={{ backgroundColor: 'transparent', color: DANGER, border: '1px solid ' + DANGER, borderRadius: brand.radius }}
                >
                  <Trash className="w-4 h-4" aria-hidden="true" />
                  {form.is_active ? 'Deactivate account' : 'Account already deactivated'}
                </Button>

                <div className="flex items-center gap-3">
                  <Button type="button" onClick={closeEdit} className="h-11 px-4 text-sm transition-colors hover:bg-white/5" style={btnQuiet}>
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    data-wf="i-3-0-10"
                    disabled={saving}
                    className="h-11 px-5 inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-70"
                    style={btnPrimary}
                  >
                    {saving ? <Clock className="w-4 h-4" aria-hidden="true" /> : <Check className="w-4 h-4" aria-hidden="true" />}
                    {saving ? 'Saving…' : 'Save record'}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      {/* Row 7 — import modal, Row 8 — result table */}
      {importOpen ? (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 md:p-8 vel-fade" style={{ backgroundColor: SCRIM }}>
          <div
            data-wf="b-6-0"
            role="dialog"
            aria-modal="true"
            aria-labelledby="import-title"
            tabIndex={-1}
            onKeyDown={(e) => panelKey(e, () => { setImportOpen(false); if (returnFocus.current) returnFocus.current.focus(); })}
            className="w-full max-w-[880px] vel-rise"
            style={{ backgroundColor: '#1a2621', border: '1px solid ' + HAIR, borderRadius: brand.radius, boxShadow: '0 24px 60px rgba(0,0,0,0.55)' }}
          >
            <div className="px-6 py-5 flex items-start justify-between gap-4" style={{ borderBottom: '1px solid ' + HAIR_SOFT }}>
              <div>
                <p className={label} style={{ color: brand.accentColor }}>Bulk intake</p>
                <h2 id="import-title" className="mt-1.5 text-[26px] leading-tight" style={{ fontFamily: brand.fontHeading }}>
                  Import employees from spreadsheet
                </h2>
              </div>
              <Button
                id="import-close"
                onClick={() => { setImportOpen(false); if (returnFocus.current) returnFocus.current.focus(); }}
                aria-label="Close import"
                className="h-9 w-9 inline-flex items-center justify-center shrink-0 hover:bg-white/10"
                style={{ borderRadius: brand.radius, color: brand.primaryColor, backgroundColor: 'transparent', border: '1px solid ' + HAIR }}
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </Button>
            </div>

            <div className="px-6 py-6 space-y-6 max-h-[66vh] overflow-y-auto">
              <p className="text-sm leading-relaxed max-w-[72ch]" style={{ color: brand.neutralColor }}>
                One row per employee, with the columns <span style={{ color: brand.primaryColor }}>first_name, last_name, work_email, phone, address, designation, department, manager_email, employment_start_date</span>. Valid rows are created even when others fail.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Button
                  data-wf="i-6-0-0"
                  onClick={() => say('Template downloaded — quorq-hrms-employee-import-template.xlsx')}
                  className="h-11 px-4 inline-flex items-center gap-2 text-sm transition-colors hover:bg-white/5"
                  style={btnQuiet}
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  Download template (.xlsx)
                </Button>

                <Label htmlFor="sheet-file" className="sr-only">Choose spreadsheet to import</Label>
                <input id="sheet-file" ref={sheetRef} type="file" className="sr-only" accept=".xlsx,.xls,.csv" onChange={onPickSheet} />
                <Button
                  data-wf="i-6-0-1"
                  onClick={() => sheetRef.current && sheetRef.current.click()}
                  className="h-11 px-4 inline-flex items-center gap-2 text-sm transition-colors hover:bg-white/5"
                  style={btnQuiet}
                >
                  <FileText className="w-4 h-4" aria-hidden="true" />
                  Choose spreadsheet
                </Button>
              </div>

              <div className="px-4 py-3 text-sm flex items-center gap-2" style={{ border: '1px dashed ' + HAIR, borderRadius: brand.radius, color: imp.file ? brand.primaryColor : brand.neutralColor }}>
                {imp.file ? <Check className="w-4 h-4" style={{ color: brand.accentColor }} aria-hidden="true" /> : <Upload className="w-4 h-4" aria-hidden="true" />}
                {imp.file ? imp.file + ' selected' : 'No spreadsheet chosen yet'}
              </div>

              {imp.stage === 'error' ? (
                <div role="alert" className="px-4 py-3 vel-fade" style={{ border: '1px solid ' + DANGER, borderRadius: brand.radius, backgroundColor: 'rgba(197,128,109,0.10)' }}>
                  <p className="text-sm flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: DANGER }} aria-hidden="true" />
                    <span>{imp.error}</span>
                  </p>
                </div>
              ) : null}

              <Button
                data-wf="i-6-0-2"
                disabled={imp.stage !== 'ready'}
                onClick={runImport}
                className="h-11 px-5 inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-45 disabled:cursor-not-allowed"
                style={btnPrimary}
              >
                {imp.stage === 'running' ? <Clock className="w-4 h-4" aria-hidden="true" /> : <Check className="w-4 h-4" aria-hidden="true" />}
                {imp.stage === 'running' ? 'Validating rows…' : 'Run import'}
              </Button>

              {imp.stage === 'running' ? (
                <div role="status" className="vel-fade">
                  <p className="text-xs" style={{ color: brand.neutralColor, fontVariantNumeric: 'tabular-nums' }}>Checking emails, departments and start dates — row 50 of 50.</p>
                  <div className="relative mt-2 h-[3px] overflow-hidden vel-bar" style={{ backgroundColor: HAIR }} />
                </div>
              ) : null}

              {imp.stage === 'done' ? (
                <section data-wf="b-7-0" aria-labelledby="import-result" className="vel-in">
                  <div style={{ border: '1px solid ' + HAIR, borderRadius: brand.radius }}>
                    <div className="px-5 py-4 flex flex-wrap items-center justify-between gap-2" style={{ borderBottom: '1px solid ' + HAIR_SOFT }}>
                      <h3 id="import-result" className="text-[18px]" style={{ fontFamily: brand.fontHeading }}>
                        Import result — <span style={{ color: brand.accentColor, fontVariantNumeric: 'tabular-nums' }}>48 of 50 rows created</span>
                      </h3>
                      <span className="inline-flex items-center gap-1.5 text-xs" style={{ color: WARN }}>
                        <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
                        2 rows need fixing and re-uploading
                      </span>
                    </div>
                    <div className="overflow-x-auto">
                      <Table className="w-full text-sm" style={{ fontVariantNumeric: 'tabular-nums', minWidth: '640px' }}>
                        <THead>
                          <TR style={{ borderBottom: '1px solid ' + HAIR_SOFT }}>
                            <TH scope="col" data-wf="i-7-0-0" className={'text-left font-normal px-5 py-3 ' + label} style={{ color: brand.neutralColor }}>Row</TH>
                            <TH scope="col" data-wf="i-7-0-1" className={'text-left font-normal px-5 py-3 ' + label} style={{ color: brand.neutralColor }}>Name</TH>
                            <TH scope="col" data-wf="i-7-0-2" className={'text-left font-normal px-5 py-3 ' + label} style={{ color: brand.neutralColor }}>Work email</TH>
                            <TH scope="col" data-wf="i-7-0-3" className={'text-left font-normal px-5 py-3 ' + label} style={{ color: brand.neutralColor }}>Error</TH>
                          </TR>
                        </THead>
                        <TBody>
                          {IMPORT_ERRORS.map((r) => (
                            <TR key={r.row} style={{ borderBottom: '1px solid ' + HAIR_SOFT }}>
                              <TD className="px-5 py-3.5 align-top" style={{ color: brand.accentColor }}>{r.row}</TD>
                              <TD className="px-5 py-3.5 align-top">{r.name}</TD>
                              <TD className="px-5 py-3.5 align-top" style={{ color: brand.neutralColor }}>{r.work_email}</TD>
                              <TD className="px-5 py-3.5 align-top">
                                <span className="flex items-start gap-2">
                                  <AlertCircle className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: DANGER }} aria-hidden="true" />
                                  <span>{r.error}</span>
                                </span>
                              </TD>
                            </TR>
                          ))}
                        </TBody>
                      </Table>
                    </div>
                  </div>
                </section>
              ) : null}
            </div>

            <div className="px-6 py-5 flex justify-end gap-3" style={{ borderTop: '1px solid ' + HAIR_SOFT }}>
              <Button
                onClick={() => { setImportOpen(false); if (returnFocus.current) returnFocus.current.focus(); }}
                className="h-11 px-4 text-sm transition-colors hover:bg-white/5"
                style={btnQuiet}
              >
                {imp.stage === 'done' ? 'Back to directory' : 'Cancel import'}
              </Button>
            </div>
          </div>
        </div>
      ) : null}

      {/* toast */}
      {toast ? (
        <div className="fixed bottom-6 right-6 z-[60] max-w-[380px] vel-rise" role="status" aria-live="polite">
          <div
            className="flex items-start gap-3 px-4 py-3.5"
            style={{ backgroundColor: '#1a2621', border: '1px solid ' + HAIR, borderLeft: '2px solid ' + (toast.tone === 'warn' ? WARN : brand.accentColor), borderRadius: brand.radius, boxShadow: '0 16px 40px rgba(0,0,0,0.5)' }}
          >
            {toast.tone === 'warn'
              ? <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: WARN }} aria-hidden="true" />
              : <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: brand.accentColor }} aria-hidden="true" />}
            <p className="text-sm leading-relaxed flex-1">{toast.text}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
