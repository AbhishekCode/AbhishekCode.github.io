import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import { cardWidth, OpenSans } from "../utils/config";

export default class Projects extends Component {
  render() {
    const { project } = this.props;
    return (
      <div className={css(styles.container)} containerStyle={{ width: "90%", padding: "5%" }}>
        <div title={project.name} subtitle={project.description} avatar={project.icon} />
        <div className={css(styles.cardTexts)}>
          <strong>Description: </strong> {project.description}
          <br /> <br />
          <strong>Language/Tools/Technologies: </strong> {project.tech}
          <br /> <br />
          <strong>Contribution: </strong> {project.contribution}
          <br /> <br />
        </div>
        <div>
          {project.url && (
            <div
              label="Link"
              onClick={() => {
                window.open(project.url);
              }}
            />
          )}
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: cardWidth(),
    zIndex: 2,
    margin: 20
  },
  cardTexts: {
    width: "100%",
    fontFamily: OpenSans,
    fontSize: 16,
    fontWeight: 300,
    color: "#000000"
  }
});
