import React from "react";
import styled from "styled-components";
import "./App.css";
import { getWidth, getHeight, OpenSans } from "./utils/config";
import ProfilePicture from "./containers/ProfilePicture";
import Links from "./containers/Links";
import Introduction from "./containers/Introduction";
import Project from "./containers/Project";
import Skills from "./containers/Skills";
import HobbyProjects from "./containers/HobbyProjects";
import { SmallHeading } from "./components/heading";
import { myInfo } from "./utils/info";

export default function App() {
  const [profileData, setProfileData] = React.useState({});
  const [projectsData, setProjectsData] = React.useState([]);

  React.useEffect(() => {
    myInfo().then(response => {
      setProfileData(response.personalData);
      setProjectsData(response.projectData);
    });
  }, []);

  return (
    <AppContainer>
      <ProfilePicture image={profileData.image} />
      <Links name={profileData.name} contactLinks={profileData.contactLinks} />
      <Introduction
        introduction={profileData.introduction}
        resume={profileData.resume}
      />
      <SmallHeading>Skills</SmallHeading>
      <Skills skills={profileData.skills} />
      <SmallHeading>Hobby Projects</SmallHeading>
      <HobbyProjects hobby={profileData.hobby} />
      <SmallHeading>Portfolio</SmallHeading>
      {projectsData.map((project, index) => (
        <Project key={index} project={project} />
      ))}
      <SmallHeading>
        {profileData.name} - Copyright © {new Date().getFullYear()}
      </SmallHeading>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: ${getHeight()}px;
  height: auto;
  width: ${getWidth()}px;
  background-color: #3a4556;
  font-family: ${OpenSans};
`;
