import React, { Component } from "react";
import styled from 'styled-components'
import "./App.css";
import { getWidth, getHeight, OpenSans } from "./utils/config";
import projectsdata from "./utils/projectsdata";
import ProfilePicture from "./containers/ProfilePicture";
import Links from "./containers/Links";
import Introduction from "./containers/Introduction";
import Project from "./containers/Project";
import Skills from "./containers/Skills";
import { SmallHeading } from "./components/heading";
import { myInfo } from "./utils/info";

class App extends Component {
  render() {
    return (
      <AppContainer>
        <ProfilePicture image={myInfo.image} />
        <Links name={myInfo.name} contactLinks={myInfo.contactLinks} />
        <Introduction introduction={myInfo.introduction} resume={myInfo.resume} />
        <SmallHeading>Skills</SmallHeading>
        <Skills />
        <SmallHeading>Portfolio</SmallHeading>
        {projectsdata.map((project, index) => <Project key={index} project={project} />)}
        <SmallHeading>{myInfo.name} - Copyright © {new Date().getFullYear()}</SmallHeading>
      </AppContainer>
    );
  }
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
  font-family: ${OpenSans}
`
export default App;
