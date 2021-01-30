import React from "react";
import styled from "styled-components";
import { OpenSans } from "../utils/config";
import { Card } from "../components/heading";

export default function Skills({ skills }) {
  return (
    <Card>
      <SkillText>
        <ul>
          {skills &&
            skills.map((skill, i) => (
              <React.Fragment key={i}>
                <li>
                  <strong>{skill.heading}</strong> {skill.value}
                </li>
                <br />
              </React.Fragment>
            ))}
        </ul>
      </SkillText>
    </Card>
  );
}

const SkillText = styled.div`
  width: 100%;
  font-family: ${OpenSans};
  font-size: 16px;
  font-weight: 300;
  color: #000000;
`;
