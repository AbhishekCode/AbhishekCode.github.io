import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import {
  submitResumeForm,
  triggerResumeDownload,
} from "../utils/resumeDownload";

interface ResumeDownloadButtonProps {
  resumeUrl: string;
}

export default function ResumeDownloadButton({
  resumeUrl,
}: ResumeDownloadButtonProps) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    emailRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const handleDownloadClick = () => {
    setError(null);
    setOpen(true);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const trimmedEmail = email.trim();

    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      await submitResumeForm({ email: trimmedEmail, name });
      setOpen(false);
      setEmail("");
      setName("");
      triggerResumeDownload(resumeUrl);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleDownloadClick}
        className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
      >
        Download Resume
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="presentation"
        >
          <button
            type="button"
            aria-label="Close dialog"
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-[1px]"
            onClick={() => setOpen(false)}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-700 dark:bg-slate-900"
          >
            <h2
              id={titleId}
              className="text-lg font-semibold text-slate-900 dark:text-white"
            >
              Confirm your email
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Share your email to download the resume. Responses are collected
              for outreach records only.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div>
                <label
                  htmlFor="resume-email"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  ref={emailRef}
                  id="resume-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-blue-500 focus:ring-2 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="resume-name"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Your name
                </label>
                <input
                  id="resume-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={event => setName(event.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-blue-500 focus:ring-2 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                  placeholder="Optional"
                />
              </div>

              {error && (
                <p className="text-sm text-red-600 dark:text-red-400" role="alert">
                  {error}
                </p>
              )}

              <div className="flex flex-wrap justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Submitting…" : "Submit & download"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
