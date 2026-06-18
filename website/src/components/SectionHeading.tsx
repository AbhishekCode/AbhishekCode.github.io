import type { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
  id?: string;
}

export default function SectionHeading({ children, id }: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className="mb-6 text-xs font-bold uppercase tracking-[0.15em] text-blue-600 dark:text-blue-400"
    >
      {children}
    </h2>
  );
}
