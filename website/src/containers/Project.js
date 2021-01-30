import styled from "styled-components";
import { OpenSans } from "../utils/config";
import { Card, Heading, RowDiv, Link } from "../components/heading";

export default function Projects({ project }) {
  return (
    <Card>
      <RowDiv>
        {project.icon && (
          <img
            src={project.icon}
            height={40}
            width={"auto"}
            alt="profile"
            style={{ backgroundColor: "#fff", marginRight: 10 }}
          />
        )}
        <Heading>{project.name}</Heading>
      </RowDiv>
      <br />
      <CardText>
        {project.description}
        <br /> <br />
        {project.tech && (
          <span>
            <strong>Tools Used:: </strong> {project.tech}{" "}
          </span>
        )}
      </CardText>
      <div>
        {project.url && (
          <Link
            onClick={() => {
              window.open(project.url);
            }}>
            Website
          </Link>
        )}
        {project.android && (
          <Link
            onClick={() => {
              window.open(project.android);
            }}>
            Android
          </Link>
        )}
        {project.ios && (
          <Link
            onClick={() => {
              window.open(project.ios);
            }}>
            iOS
          </Link>
        )}
      </div>
    </Card>
  );
}

const CardText = styled.div`
  width: 100%;
  font-family: ${OpenSans};
  font-size: 16px;
  font-weight: 300;
  color: #000000;
`;
