import profileImage from "../assets/profile.png";
import twittericon from "../assets/twitter.png";
import linkedInicon from "../assets/linkedin.png";
import emailIcon from "../assets/email.png";
import githubicon from "../assets/github.png";
import webicon from "../assets/webicon.png";
import type { PersonalData, PortfolioProject, SiteInfo } from "../types";

const GIST_URL =
  "https://api.github.com/gists/9052ef9a070e0d5ab046fa3464d026c4";

interface GistFile {
  content: string;
}

interface GistResponse {
  files: Record<string, GistFile>;
}

const EXCLUDED_CONTACT_NAMES = new Set([
  "StackOverFlow",
  "DevTo",
  "Medium",
  "facebook",
]);

const getIcon = (name: string): string => {
  switch (name) {
    case "github":
      return githubicon;
    case "Twitter":
      return twittericon;
    case "LinkedIn":
      return linkedInicon;
    case "Email":
      return emailIcon;
    default:
      return webicon;
  }
};

const enrichProfile = (profileData: PersonalData): PersonalData => {
  const data: PersonalData = {
    ...profileData,
    image: profileImage,
    resume: "/abhishek-resume.pdf",
  };

  if (data.contactLinks) {
    data.contactLinks = data.contactLinks
      .filter(link => !EXCLUDED_CONTACT_NAMES.has(link.name))
      .map(link => ({
        ...link,
        icon: getIcon(link.name),
      }));
  }

  return data;
};

export const myInfo = (): Promise<SiteInfo> => {
  return fetch(GIST_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load profile data (${response.status})`);
      }
      return response.json() as Promise<GistResponse>;
    })
    .then(data => {
      const personalData = enrichProfile(
        JSON.parse(data.files["personalData.json"].content) as PersonalData
      );
      const projectData = JSON.parse(
        data.files["projectdata.json"].content
      ) as PortfolioProject[];

      return {
        personalData,
        projectData,
      };
    });
};
