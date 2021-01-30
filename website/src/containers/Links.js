import styled from "styled-components";
import { Name } from "../components/heading";

const marginTop = -50;
const iconSize = 40;

export default function Links({ name, contactLinks }) {
  return (
    <LinksViewContainer>
      <Name>{name}</Name>
      <SocialIconContainer>
        {contactLinks &&
          contactLinks.map((link, i) => (
            <Button key={i} onClick={() => window.open(link.link)}>
              <img
                src={link.icon}
                height={iconSize}
                width={iconSize}
                alt={link.name}
              />
            </Button>
          ))}
      </SocialIconContainer>
    </LinksViewContainer>
  );
}

const LinksViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  background-color: #3a4556;
`;
const SocialIconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 20px;
  background-color: transparent;
`;

const Button = styled.button`
  background: transparent;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: none;
`;
