import type { HobbyProject } from "../types";

const linkClass =
  "inline-flex items-center rounded-md bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700 transition hover:bg-blue-100 dark:bg-blue-950/50 dark:text-blue-300 dark:hover:bg-blue-950";

interface HobbyProjectsProps {
  hobby: HobbyProject[];
}

export default function HobbyProjects({ hobby }: HobbyProjectsProps) {
  if (!hobby || hobby.length === 0) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {hobby.map(item => (
        <article
          key={item.name}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <h3 className="font-bold text-slate-900 dark:text-white">
            {item.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {item.description}
          </p>
          {(item.repo || item.link) && (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.repo && (
                <a
                  href={item.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Code
                </a>
              )}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Live Demo
                </a>
              )}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}
