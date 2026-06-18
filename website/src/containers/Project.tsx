import type { PortfolioProject } from "../types";
import ProjectIcon from "../components/ProjectIcon";

const linkClass =
  "inline-flex items-center rounded-md bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700 transition hover:bg-blue-100 dark:bg-blue-950/50 dark:text-blue-300 dark:hover:bg-blue-950";

interface ProjectProps {
  project: PortfolioProject;
}

export default function Project({ project }: ProjectProps) {
  const displayName = project.name || "Project";

  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-800">
      <div className="flex items-start gap-3">
        <ProjectIcon src={project.icon} name={displayName} />
        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-slate-900 dark:text-white">
            {displayName}
          </h3>
          {project.role && (
            <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
              {project.role}
            </p>
          )}
        </div>
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {project.description}
      </p>

      {project.contribution && (
        <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-500">
          {project.contribution}
        </p>
      )}

      {project.tech && (
        <p className="mt-3 text-xs text-slate-500 dark:text-slate-500">
          <span className="font-semibold text-slate-700 dark:text-slate-300">
            Stack:
          </span>{" "}
          {project.tech}
        </p>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Website
          </a>
        )}
        {project.android && (
          <a
            href={project.android}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Android
          </a>
        )}
        {project.ios && (
          <a
            href={project.ios}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            iOS
          </a>
        )}
      </div>
    </article>
  );
}
