import React, { Component } from "react";
import styled from 'styled-components'
import { Reveal, RevealGlobalStyles } from 'react-genie'
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
        <RevealGlobalStyles />
        <Reveal>
          <ProfilePicture image={myInfo.image} />
        </Reveal>
        < Reveal>
          <Links name={myInfo.name} contactLinks={myInfo.contactLinks} />
        </Reveal>
        <Reveal>
          <Introduction introduction={myInfo.introduction} resume={myInfo.resume} />
        </Reveal>
        <Reveal>
          <SmallHeading>Skills</SmallHeading>
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <SmallHeading>Portfolio</SmallHeading>
        </Reveal>
        {projectsdata.map((project, index) => <Reveal><Project key={index} project={project} /></Reveal>)}
        <Reveal> <SmallHeading>{myInfo.name} - Copyright © {new Date().getFullYear()}</SmallHeading></Reveal>
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
