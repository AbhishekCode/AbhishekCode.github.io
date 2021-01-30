import styled from "styled-components";
import { Card, Link } from "../components/heading";
import { OpenSans } from "../utils/config";

export default function HobbyProjects({ hobby }) {
  return (
    <Card>
      <ol>
        {hobby &&
          hobby.map(item => (
            <ListContainer key={item.name}>
              <strong>{item.name}</strong>
              <p>{item.description}</p>
              <Link onClick={() => window.open(item.repo)}>Code</Link>
              <Link onClick={() => window.open(item.link)}>Link</Link>
            </ListContainer>
          ))}
      </ol>
    </Card>
  );
}

const ListContainer = styled.li`
  width: 100%;
  font-family: ${OpenSans};
  font-size: 16px;
  font-weight: 300;
  color: #000000;
`;
