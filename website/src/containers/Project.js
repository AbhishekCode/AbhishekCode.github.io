import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import { cardWidth, OpenSans } from "../utils/config";

export default class Projects extends Component {
  render() {
    const { project } = this.props;
    return (
      <Card className={css(styles.container)} containerStyle={{ width: "90%", padding: "5%" }}>
        <CardHeader title={project.name} subtitle={project.description} avatar={project.icon} />
        <CardText className={css(styles.cardTexts)}>
          <strong>Description: </strong> {project.description}
          <br /> <br />
          <strong>Language/Tools/Technologies: </strong> {project.tech}
          <br /> <br />
          <strong>Contribution: </strong> {project.contribution}
          <br /> <br />
        </CardText>
        <CardActions>
          {project.url && (
            <FlatButton
              label="Link"
              onClick={() => {
                window.open(project.url);
              }}
            />
          )}
        </CardActions>
      </Card>
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
