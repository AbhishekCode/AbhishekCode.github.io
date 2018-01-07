import React, { Component } from "react";
import { StyleSheet, css } from "aphrodite";
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import { cardWidth, OpenSans } from "../utils/config";

export default class Skills extends Component {
  render() {
    return (
      <Card className={css(styles.container)}>
        <div className={css(styles.cardTexts)}>
          <ul>
            <li>
              <strong>Programming Languesges</strong> HTML, CSS, JavaScript, Java, C#
            </li>
            <br />
            <li>
              <strong>Framework/Libraries</strong> ReactJS, React-Native, Redux, Bootstrap
            </li>
            <br />
            <li>
              <strong> IDE:</strong> Netbeans , XCode , Visual Studio, Android Studio , Webstorm.
            </li>
            <br />
            <li>
              <strong>Source Control</strong> Git
            </li>
            <br />
            <li>
              <strong>Operating System</strong> Mac , linux
            </li>
          </ul>
        </div>
      </Card>
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
    fontSize: 16,
    fontWeight: 300,
    color: "#000000"
  }
});
