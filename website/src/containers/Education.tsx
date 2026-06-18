import type { Education as EducationType } from "../types";

interface EducationProps {
  education: EducationType;
}

export default function Education({ education }: EducationProps) {
  if (!education) return null;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h3 className="font-bold text-slate-900 dark:text-white">
        {education.degree}
      </h3>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
        {education.school}
      </p>
      {education.period && (
        <p className="mt-1 text-sm text-slate-500">{education.period}</p>
      )}
    </section>
  );
}
