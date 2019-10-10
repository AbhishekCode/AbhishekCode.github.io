import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import "./App.css";
import { getWidth, getHeight, OpenSans } from "./utils/config";
import projectsdata from "./utils/projectsdata";
import ProfilePicture from "./containers/ProfilePicture";
import Links from "./containers/Links";
import Introduction from "./containers/Introduction";
import Project from "./containers/Project";
import Skills from "./containers/Skills";

class App extends Component {
  render() {
    return (
      <div className={css(styles.app)}>
        <ProfilePicture />
        <Links />
        <Introduction />
        <h3 className={css(styles.projectHeading)}>Skills</h3>
        <Skills />
        <h3 className={css(styles.projectHeading)}>Selected Projects</h3>
        {projectsdata.map((project, index) => <Project key={index} project={project} />)}
        <div className={css(styles.copyrightText)}>Abhishek Singh - Copyright © {new Date().getFullYear()}</div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    minHeight: getHeight(),
    height: "auto",
    width: getWidth(),
    backgroundColor: "#3a4556",
    fontFamily: OpenSans
  },
  projectHeading: {
    color: "#fff",
    fontFamily: OpenSans,
    fontSize: 25,
    fontWeight: 600,
    textDecoration: "underline"
  },
  copyrightText: {
    color: "#fff",
    fontFamily: OpenSans,
    fontSize: 15,
    fontWeight: 400
  }
});

export default App;
