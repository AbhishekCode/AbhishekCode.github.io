import type { Skill } from "../types";

interface SkillsProps {
  skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
  if (!skills || skills.length === 0) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {skills.map((skill, i) => (
        <div
          key={i}
          className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
            {skill.heading}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {skill.value}
          </p>
        </div>
      ))}
    </div>
  );
}
