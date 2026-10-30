// @ts-nocheck -- generated from the approved design under its JS runtime contract; not hand-written TypeScript.
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import { Icons } from "@/lib/icons";
import { brand } from "@/lib/brand";
import { useNavigate } from "@/lib/navigate";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { Check } = Icons;

const PRODUCT = "HRM System";
const HAIRLINE = "1px solid rgba(255,255,255,0.10)";

// The one account wired up in this preview build.
const DEMO_ACCOUNT = { work_email: "anita.deshmukh@quorq.ai", password: "Monsoon#2026" };
const RESET_SENT_AT = "09:14";
const RESET_EXPIRES_AT = "10:14";

export default function Screen() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [status, setStatus] = React.useState("idle"); // idle | loading | error
  const [error, setError] = React.useState(null); // { line, detail }
  const [notice, setNotice] = React.useState(null);

  const [modal, setModal] = React.useState(null); // null | 'reset' | 'newpw'
  const [resetEmail, setResetEmail] = React.useState("");
  const [resetError, setResetError] = React.useState(null);
  const [sentTo, setSentTo] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [pwError, setPwError] = React.useState(null);

  const timerRef = React.useRef(null);
  const dialogRef = React.useRef(null);
  const returnFocusRef = React.useRef(null);
  const forgotRef = React.useRef(null);

  React.useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  React.useEffect(() => {
    if (!modal) return;
    const node = dialogRef.current;
    if (!node) return;
    const first = node.querySelector("input, button");
    if (first) first.focus();
  }, [modal]);

  const field = { border: HAIRLINE, borderRadius: brand.radius, height: 46, backgroundColor: "rgba(0,0,0,0.25)", color: brand.primaryColor };
  const label = { color: brand.neutralColor, letterSpacing: "0.18em" };
  const panel = { backgroundColor: "rgba(255,255,255,0.04)", border: HAIRLINE, borderRadius: brand.radius };

  function closeModal() {
    setModal(null);
    setResetError(null);
    setPwError(null);
    const back = returnFocusRef.current;
    if (back && back.focus) back.focus();
  }

  function onDialogKeyDown(e) {
    if (e.key === "Escape") {
      e.stopPropagation();
      closeModal();
      return;
    }
    if (e.key !== "Tab") return;
    const node = dialogRef.current;
    if (!node) return;
    const items = Array.prototype.slice.call(
      node.querySelectorAll('button, input, [href], [tabindex]:not([tabindex="-1"])')
    ).filter((el) => !el.disabled);
    if (items.length === 0) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  function handleSignIn(e) {
    e.preventDefault();
    setNotice(null);
    if (!email.trim() || !password) {
      setStatus("error");
      setError({ line: "Enter your work email and password.", detail: "Both fields are needed before we can check your access." });
      return;
    }
    setStatus("loading");
    setError(null);
    timerRef.current = setTimeout(() => {
      const ok = email.trim().toLowerCase() === DEMO_ACCOUNT.work_email && password === DEMO_ACCOUNT.password;
      if (ok) {
        navigate("dashboard");
      } else {
        setStatus("error");
        setError({ line: "Invalid email or password.", detail: "Check the address and try again, or request a reset link." });
      }
    }, 700);
  }

  function handleSendReset(e) {
    e.preventDefault();
    const value = resetEmail.trim();
    if (!value || value.indexOf("@") === -1) {
      setResetError("Enter the work email address held on your employee record.");
      return;
    }
    setResetError(null);
    setSentTo(value);
    setNewPassword("");
    setConfirmPassword("");
    setPwError(null);
    setModal("newpw");
  }

  function handleSaveNewPassword(e) {
    e.preventDefault();
    if (newPassword.length < 10) {
      setPwError("Use at least 10 characters so the password meets the staff policy.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setPwError("The two passwords do not match. Retype the confirmation.");
      return;
    }
    setPwError(null);
    setModal(null);
    setStatus("idle");
    setError(null);
    setEmail(sentTo);
    setPassword("");
    setNotice("Password updated for " + sentTo + ". Sign in with the new one.");
    const back = forgotRef.current;
    if (back && back.focus) back.focus();
  }

  const loading = status === "loading";

  return (
    <div
      className="flex min-h-screen items-center justify-center px-6 py-12"
      style={{ backgroundColor: brand.backgroundColor, color: brand.primaryColor, fontFamily: brand.fontBody }}
    >
      <style>{`
        .vl-focus:focus-visible { outline: 2px solid ${brand.accentColor}; outline-offset: 2px; }
        @keyframes vl-rise { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes vl-fade { from { opacity: 0; } to { opacity: 1; } }
        .vl-rise { animation: vl-rise 220ms ease-out both; }
        .vl-fade { animation: vl-fade 160ms ease-out both; }
        @media (prefers-reduced-motion: reduce) { .vl-rise, .vl-fade { animation: none; } }
      `}</style>

      <main className="w-full max-w-md p-10" style={panel}>
        {/* Row 1 */}
        <h1 data-wf="b-0-0" className="text-3xl leading-tight" style={{ fontFamily: brand.fontHeading }}>
          Sign in to HRM System
        </h1>
        <div aria-hidden className="mt-3 h-px w-12" style={{ backgroundColor: brand.accentColor }} />

        {/* Row 2 */}
        <p data-wf="b-1-0" className="mt-4 text-sm leading-relaxed" style={{ color: brand.neutralColor }}>
          Use your work email address. Access is restricted to current staff of the organisation.
        </p>

        {/* Row 3 + Row 4 */}
        <form className="mt-8" onSubmit={handleSignIn} noValidate>
          <div data-wf="b-2-0" className="space-y-5">
            {notice ? (
              <p
                role="status"
                className="vl-fade px-3 py-3 text-sm leading-relaxed"
                style={{ border: HAIRLINE, borderRadius: brand.radius, backgroundColor: "rgba(143,174,139,0.10)", color: brand.primaryColor }}
              >
                <Icons.CheckCircle aria-hidden className="mr-2 inline h-4 w-4 align-[-3px]" style={{ color: brand.accentColor }} />
                {notice}
              </p>
            ) : null}

            <div className="space-y-2">
              <label htmlFor="vl-email" className="block text-xs uppercase" style={label}>Work email</label>
              <input
                data-wf="i-2-0-0"
                id="vl-email"
                name="work_email"
                type="email"
                autoComplete="username"
                inputMode="email"
                placeholder="anita.deshmukh@quorq.ai"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={status === "error"}
                aria-describedby="vl-signin-error vl-hint"
                className="vl-focus w-full px-3 text-sm outline-none"
                style={field}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="vl-password" className="block text-xs uppercase" style={label}>Password</label>
              <input
                data-wf="i-2-0-1"
                id="vl-password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-invalid={status === "error"}
                aria-describedby="vl-signin-error vl-hint"
                className="vl-focus w-full px-3 text-sm outline-none"
                style={field}
              />
            </div>

            <p id="vl-hint" className="text-xs leading-relaxed" style={{ color: brand.neutralColor, fontVariantNumeric: "tabular-nums" }}>
              Preview account — anita.deshmukh@quorq.ai / Monsoon#2026
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 items-center gap-4">
            <button
              data-wf="b-3-0"
              type="submit"
              disabled={loading}
              className="vl-focus h-12 w-full text-xs font-bold uppercase tracking-[0.25em] transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-70"
              style={{ backgroundColor: brand.accentColor, color: brand.backgroundColor, borderRadius: brand.radius }}
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>
            <button
              data-wf="b-3-1"
              ref={forgotRef}
              type="button"
              onClick={() => {
                returnFocusRef.current = forgotRef.current;
                setResetEmail(email.trim());
                setResetError(null);
                setModal("reset");
              }}
              className="vl-focus justify-self-start text-xs uppercase underline underline-offset-4 transition-opacity hover:opacity-80"
              style={{ color: brand.accentColor, letterSpacing: "0.18em" }}
            >
              Forgot your password?
            </button>
          </div>
        </form>

        {/* Row 5 */}
        <div data-wf="b-4-0" id="vl-signin-error" role="alert" aria-live="assertive" className="mt-6 min-h-[1.25rem]">
          {status === "error" && error ? (
            <div
              className="vl-fade px-3 py-3"
              style={{ border: HAIRLINE, borderRadius: brand.radius, backgroundColor: "rgba(0,0,0,0.25)" }}
            >
              <p className="flex items-start gap-2 text-sm" style={{ color: brand.primaryColor }}>
                <Icons.AlertCircle aria-hidden className="mt-0.5 h-4 w-4 shrink-0" style={{ color: brand.accentColor }} />
                <span>{error.line}</span>
              </p>
              <p className="mt-1 pl-6 text-xs leading-relaxed" style={{ color: brand.neutralColor }}>{error.detail}</p>
            </div>
          ) : null}
        </div>
      </main>

      {/* Row 6 — Reset your password */}
      {modal === "reset" ? (
        <div className="vl-fade fixed inset-0 z-50 flex items-center justify-center px-6" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
          <div
            data-wf="b-5-0"
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="vl-reset-title"
            onKeyDown={onDialogKeyDown}
            className="vl-rise w-full max-w-md p-8"
            style={{ ...panel, backgroundColor: "#1b2922", boxShadow: "0 24px 60px rgba(0,0,0,0.55)" }}
          >
            <div className="flex items-start justify-between gap-4">
              <h2 id="vl-reset-title" className="text-2xl" style={{ fontFamily: brand.fontHeading }}>Reset your password</h2>
              <button
                type="button"
                aria-label="Close reset password dialog"
                onClick={closeModal}
                className="vl-focus -mr-2 -mt-2 flex h-11 w-11 items-center justify-center transition-opacity hover:opacity-80"
                style={{ borderRadius: brand.radius, color: brand.neutralColor }}
              >
                <Icons.X aria-hidden className="h-4 w-4" />
              </button>
            </div>
            <div aria-hidden className="mt-3 h-px w-12" style={{ backgroundColor: brand.accentColor }} />

            <form className="mt-6 space-y-5" onSubmit={handleSendReset} noValidate>
              <div className="space-y-2">
                <label htmlFor="vl-reset-email" className="block text-xs uppercase" style={label}>Work email</label>
                <input
                  data-wf="i-5-0-0"
                  id="vl-reset-email"
                  name="reset_work_email"
                  type="email"
                  autoComplete="username"
                  placeholder="anita.deshmukh@quorq.ai"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  aria-invalid={Boolean(resetError)}
                  aria-describedby="vl-reset-error vl-reset-validity"
                  className="vl-focus w-full px-3 text-sm outline-none"
                  style={field}
                />
                <p id="vl-reset-error" role="alert" className="min-h-[1rem] text-xs leading-relaxed" style={{ color: brand.primaryColor }}>
                  {resetError ? (
                    <span className="flex items-start gap-2">
                      <Icons.AlertCircle aria-hidden className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: brand.accentColor }} />
                      <span>{resetError}</span>
                    </span>
                  ) : null}
                </p>
              </div>

              <button
                data-wf="i-5-0-1"
                type="submit"
                className="vl-focus h-12 w-full text-xs font-bold uppercase tracking-[0.25em] transition-opacity hover:opacity-90"
                style={{ backgroundColor: brand.accentColor, color: brand.backgroundColor, borderRadius: brand.radius }}
              >
                Send reset link
              </button>

              <p data-wf="i-5-0-2" id="vl-reset-validity" className="text-xs leading-relaxed" style={{ color: brand.neutralColor, fontVariantNumeric: "tabular-nums" }}>
                The link is valid for 60 minutes.
              </p>
            </form>
          </div>
        </div>
      ) : null}

      {/* Row 7 — Set a new password */}
      {modal === "newpw" ? (
        <div className="vl-fade fixed inset-0 z-50 flex items-center justify-center px-6" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
          <div
            data-wf="b-6-0"
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="vl-newpw-title"
            aria-describedby="vl-newpw-sub"
            onKeyDown={onDialogKeyDown}
            className="vl-rise w-full max-w-md p-8"
            style={{ ...panel, backgroundColor: "#1b2922", boxShadow: "0 24px 60px rgba(0,0,0,0.55)" }}
          >
            <div className="flex items-start justify-between gap-4">
              <h2 id="vl-newpw-title" className="text-2xl" style={{ fontFamily: brand.fontHeading }}>Set a new password</h2>
              <button
                type="button"
                aria-label="Close set new password dialog"
                onClick={closeModal}
                className="vl-focus -mr-2 -mt-2 flex h-11 w-11 items-center justify-center transition-opacity hover:opacity-80"
                style={{ borderRadius: brand.radius, color: brand.neutralColor }}
              >
                <Icons.X aria-hidden className="h-4 w-4" />
              </button>
            </div>
            <div aria-hidden className="mt-3 h-px w-12" style={{ backgroundColor: brand.accentColor }} />

            <p id="vl-newpw-sub" className="mt-4 text-xs leading-relaxed" style={{ color: brand.neutralColor, fontVariantNumeric: "tabular-nums" }}>
              You opened the link sent to {sentTo} at {RESET_SENT_AT}. It expires at {RESET_EXPIRES_AT}.
            </p>

            <form className="mt-6 space-y-5" onSubmit={handleSaveNewPassword} noValidate>
              <div className="space-y-2">
                <label htmlFor="vl-new-password" className="block text-xs uppercase" style={label}>New password</label>
                <input
                  data-wf="i-6-0-0"
                  id="vl-new-password"
                  name="new_password"
                  type="password"
                  autoComplete="new-password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  aria-invalid={Boolean(pwError)}
                  aria-describedby="vl-newpw-error"
                  className="vl-focus w-full px-3 text-sm outline-none"
                  style={field}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="vl-confirm-password" className="block text-xs uppercase" style={label}>Confirm new password</label>
                <input
                  data-wf="i-6-0-1"
                  id="vl-confirm-password"
                  name="confirm_new_password"
                  type="password"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  aria-invalid={Boolean(pwError)}
                  aria-describedby="vl-newpw-error"
                  className="vl-focus w-full px-3 text-sm outline-none"
                  style={field}
                />
              </div>

              <p id="vl-newpw-error" role="alert" className="min-h-[1rem] text-xs leading-relaxed" style={{ color: brand.primaryColor }}>
                {pwError ? (
                  <span className="flex items-start gap-2">
                    <Icons.AlertCircle aria-hidden className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: brand.accentColor }} />
                    <span>{pwError}</span>
                  </span>
                ) : null}
              </p>

              <button
                data-wf="i-6-0-2"
                type="submit"
                className="vl-focus h-12 w-full text-xs font-bold uppercase tracking-[0.25em] transition-opacity hover:opacity-90"
                style={{ backgroundColor: brand.accentColor, color: brand.backgroundColor, borderRadius: brand.radius }}
              >
                Save new password
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}
