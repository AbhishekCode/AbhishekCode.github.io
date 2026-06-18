import { useEffect, useState } from "react";
import ThemeToggle from "./components/ThemeToggle";
import SectionHeading from "./components/SectionHeading";
import Hero from "./containers/Hero";
import About from "./containers/About";
import Experience from "./containers/Experience";
import Skills from "./containers/Skills";
import Project from "./containers/Project";
import HobbyProjects from "./containers/HobbyProjects";
import Education from "./containers/Education";
import { useTheme } from "./hooks/useTheme";
import { myInfo } from "./utils/info";
import type { PersonalData, PortfolioProject } from "./types";

export default function App() {
  const { toggleTheme, isDark } = useTheme();
  const [profileData, setProfileData] = useState<PersonalData | null>(null);
  const [projectsData, setProjectsData] = useState<PortfolioProject[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    myInfo()
      .then(response => {
        setProfileData(response.personalData);
        setProjectsData(response.projectData);
      })
      .catch((err: unknown) => {
        setError(
          err instanceof Error ? err.message : "Failed to load profile data"
        );
      });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur dark:border-slate-800/80 dark:bg-slate-950/90">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#" className="text-sm font-semibold text-slate-900 dark:text-white">
            {profileData?.name || "Abhishek Kumar Singh"}
          </a>
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300">
            {error}
          </div>
        )}

        {!profileData && !error && (
          <div className="flex min-h-[40vh] items-center justify-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">Loading…</p>
          </div>
        )}

        {profileData && (
          <div className="space-y-12">
            <Hero profile={profileData} />

            {profileData.introduction && (
              <section>
                <SectionHeading>About</SectionHeading>
                <About introduction={profileData.introduction} />
              </section>
            )}

            {profileData.experience && profileData.experience.length > 0 && (
              <section>
                <SectionHeading>Experience</SectionHeading>
                <Experience experience={profileData.experience} />
              </section>
            )}

            {profileData.skills && profileData.skills.length > 0 && (
              <section>
                <SectionHeading>Skills</SectionHeading>
                <Skills skills={profileData.skills} />
              </section>
            )}

            {projectsData.length > 0 && (
              <section>
                <SectionHeading>Portfolio</SectionHeading>
                <div className="grid gap-4 sm:grid-cols-2">
                  {projectsData.map((project, index) => (
                    <Project key={`${project.name}-${index}`} project={project} />
                  ))}
                </div>
              </section>
            )}

            {profileData.hobby && profileData.hobby.length > 0 && (
              <section>
                <SectionHeading>Side Projects</SectionHeading>
                <HobbyProjects hobby={profileData.hobby} />
              </section>
            )}

            {profileData.education && (
              <section>
                <SectionHeading>Education</SectionHeading>
                <Education education={profileData.education} />
              </section>
            )}
          </div>
        )}
      </main>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        {profileData?.name || "Abhishek Kumar Singh"} · © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
