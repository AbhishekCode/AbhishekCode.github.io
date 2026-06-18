import type { JobExperience } from "../types";

interface ExperienceProps {
  experience: JobExperience[];
}

export default function Experience({ experience }: ExperienceProps) {
  if (!experience || experience.length === 0) return null;

  return (
    <div className="space-y-5">
      {experience.map((job, index) => (
        <article
          key={`${job.company}-${index}`}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {job.company}
                {job.role && (
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    {" "}
                    — {job.role}
                  </span>
                )}
              </h3>
              {job.subtitle && (
                <p className="mt-1 text-sm italic text-slate-500 dark:text-slate-400">
                  {job.subtitle}
                </p>
              )}
              {job.roleLine && (
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {job.roleLine}
                </p>
              )}
            </div>
            <div className="shrink-0 text-sm text-slate-500 dark:text-slate-400">
              {job.period}
              {job.location && (
                <span className="block sm:text-right">{job.location}</span>
              )}
            </div>
          </div>

          {job.highlights && job.highlights.length > 0 && (
            <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4 dark:border-slate-800">
              {job.highlights.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}
