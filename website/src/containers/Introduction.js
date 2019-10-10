import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import { cardWidth, OpenSans } from "../utils/config";

export default class ProfilePicture extends Component {
  openResume = () => {
    console.log("should open url ");
    window.open(`http://www.indexzero.in/resume/`);
  };
  render() {
    return (
      <div className={css(styles.container)}>
        <div title="About Me" subtitle="" />
        <div className={css(styles.cardTexts)}>
          Software Developer with more than 4 years of experience. I have worked on various Websites, mobile applications and Games. I like
          to build user interface. <br /> <br />Currently I'm doing frontend development using ReactJs and React-Native.{" "}
        </div>
        <div>
          <div label="My Resume" onClick={this.openResume} />
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: cardWidth(),
    zIndex: 2,
    padding: 20,
    margin: 20,
    fontSize: 30,
    fontWeight: 600,
    color: "#000000"
  },
  cardTexts: {
    width: "100%",
    fontFamily: OpenSans,
    fontSize: 20,
    fontWeight: 300,
    color: "#000000"
  }
});
