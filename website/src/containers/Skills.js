import React, { Component } from "react";
import styled from 'styled-components'
import { OpenSans } from "../utils/config";
import { Card } from "../components/heading";

export default class Skills extends Component {
  render() {
    return (
      <Card>
        <SkillText>
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
        </SkillText>
      </Card>
    );
  }
}

const SkillText = styled.div`
  width: 100%;
  font-family: ${OpenSans};
  font-size: 16px;
  font-weight: 300;
  color: #000000;
`