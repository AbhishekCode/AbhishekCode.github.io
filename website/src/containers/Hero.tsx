import ResumeDownloadButton from "../components/ResumeDownloadButton";
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
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
            {resume && <ResumeDownloadButton resumeUrl={resume} />}
            {phone && (
              <a
                href={`tel:${phone.replace(/\s+/g, "")}`}
                title={phone}
                aria-label={`Call ${phone}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-blue-700 dark:hover:bg-slate-700 dark:hover:text-blue-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.85 21 3 13.15 3 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.2 2.2z" />
                </svg>
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
