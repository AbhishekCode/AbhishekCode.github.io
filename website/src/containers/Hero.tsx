import type { PersonalData } from "../types";

interface HeroProps {
  profile: PersonalData;
}

export default function Hero({ profile }: HeroProps) {
  const {
    image,
    name,
    title,
    tagline,
    location,
    email,
    phone,
    contactLinks,
    resume,
  } = profile;

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
        {image && (
          <div className="shrink-0">
            <img
              src={image}
              alt={name || "Profile"}
              className="h-36 w-36 rounded-full border-4 border-white object-cover shadow-lg ring-2 ring-blue-100 dark:border-slate-800 dark:ring-blue-900/40 sm:h-44 sm:w-44"
            />
          </div>
        )}

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {name}
          </h1>
          {title && (
            <p className="mt-1 text-lg font-semibold text-blue-600 dark:text-blue-400">
              {title}
            </p>
          )}
          {tagline && (
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {tagline}
            </p>
          )}

          <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-slate-600 dark:text-slate-400 md:justify-start">
            {location && <span>{location}</span>}
            {email && (
              <a
                href={`mailto:${email}`}
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                {email}
              </a>
            )}
            {phone && <span>{phone}</span>}
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
            {resume && (
              <a
                href={resume}
                download="abhishek-resume.pdf"
                className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Download Resume
              </a>
            )}
            {contactLinks?.map((link, i) => (
              <a
                key={i}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                title={link.name}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 transition hover:border-blue-300 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-blue-700 dark:hover:bg-slate-700"
              >
                <img
                  src={link.icon}
                  alt={link.name}
                  className="h-5 w-5 object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
