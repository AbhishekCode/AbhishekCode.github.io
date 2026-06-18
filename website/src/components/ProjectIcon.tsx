import { useState } from "react";

interface ProjectIconProps {
  src?: string;
  name: string;
}

export default function ProjectIcon({ src, name }: ProjectIconProps) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !src?.trim() || failed;
  const initial = (name.trim() || "P").charAt(0).toUpperCase();

  if (showPlaceholder) {
    return (
      <div
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-gradient-to-br from-slate-100 to-slate-200 text-sm font-bold text-slate-500 dark:border-slate-700 dark:from-slate-800 dark:to-slate-900 dark:text-slate-400"
        aria-hidden="true"
      >
        {initial}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt=""
      onError={() => setFailed(true)}
      className="h-10 w-10 shrink-0 rounded-lg border border-slate-100 bg-white object-contain p-1 dark:border-slate-700"
    />
  );
}
