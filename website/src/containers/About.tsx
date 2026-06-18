interface AboutProps {
  introduction: string;
}

export default function About({ introduction }: AboutProps) {
  if (!introduction) return null;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
      <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
        {introduction}
      </p>
    </section>
  );
}
