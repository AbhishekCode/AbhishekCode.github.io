import React, { Component } from "react";
import styled from 'styled-components'
import { Reveal, RevealGlobalStyles } from 'react-genie'
import "./App.css";
import { getWidth, getHeight, OpenSans } from "./utils/config";
import ProfilePicture from "./containers/ProfilePicture";
import Links from "./containers/Links";
import Introduction from "./containers/Introduction";
import Project from "./containers/Project";
import Skills from "./containers/Skills";
import HobbyProjects from './containers/HobbyProjects'
import { SmallHeading } from "./components/heading";
import { myInfo } from "./utils/info";


class App extends Component {
  state = {
    myInfo: {},
    projectsdata: []
  }

  componentWillMount() {
    myInfo().then(
      response => this.setState({ myInfo: response.personalData, projectsdata: response.projectData })
    )
  }

  render() {
    const profileData = this.state.myInfo
    const projectsdata = this.state.projectsdata
    return (
      <AppContainer>
        <RevealGlobalStyles />
        <Reveal>
          <ProfilePicture image={profileData.image} />
        </Reveal>
        < Reveal>
          <Links name={profileData.name} contactLinks={profileData.contactLinks} />
        </Reveal>
        <Reveal>
          <Introduction introduction={profileData.introduction} resume={profileData.resume} />
        </Reveal>
        <Reveal>
          <SmallHeading>Skills</SmallHeading>
        </Reveal>
        <Reveal>
          <Skills skills={profileData.skills} />
        </Reveal>
        <Reveal>
          <SmallHeading>Hobby Projects</SmallHeading>
        </Reveal>
        <Reveal>
          <HobbyProjects hobby={profileData.hobby} />
        </Reveal>
        <Reveal>
          <SmallHeading>Portfolio</SmallHeading>
        </Reveal>
        {projectsdata.map((project, index) => <Reveal key={index}><Project key={index} project={project} /></Reveal>)}
        <Reveal> <SmallHeading>{profileData.name} - Copyright © {new Date().getFullYear()}</SmallHeading></Reveal>
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
