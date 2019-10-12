import React, { Component } from "react";
import styled from 'styled-components'

import fbicon from "../assets/fb.png";
import twittericon from "../assets/twitter.png";
import linkedInicon from "../assets/linkedin.png";
import emailIcon from "../assets/email.png";
import githubicon from "../assets/github.png";
import blogIcon from "../assets/blog.png";
import stackoverflowIcon from "../assets/stackoverflow.png";
import { OpenSans } from "../utils/config";

const marginTop = -50;
const iconSize = 40;

const ContactLinks = [
  {
    icon: githubicon,
    link: "https://github.com/AbhishekCode",
    name: "github"
  },
  {
    icon: stackoverflowIcon,
    link: "http://stackoverflow.com/users/2009703/abhishek",
    name: "StackOverFlow"
  },
  {
    icon: blogIcon,
    link: "https://medium.com/@Abvishek",
    name: "blog"
  },
  {
    icon: twittericon,
    link: "https://www.twitter.com/abvishek",
    name: "Twitter"
  },
  {
    icon: fbicon,
    link: "https://www.facebook.com/AbhishekSingh1313",
    name: "facebook"
  },
  {
    icon: linkedInicon,
    link: "https://in.linkedin.com/in/abhisheksingh1313",
    name: "LinkedIn"
  },
  {
    icon: emailIcon,
    link: "mailto:abhishekcode1@gmail.com",
    name: "GMail"
  },
]

export default class Links extends Component {
  render() {
    return (
      <LinksViewContainer>
        <Name>Abhishek Singh</Name>
        <SocialIconContainer>
          {ContactLinks.map(link =>
            <Button onClick={() => window.open(link.link)}>
              <img src={link.icon} height={iconSize} width={iconSize} alt={link.name} />
            </Button>
          )}
        </SocialIconContainer>
      </LinksViewContainer>
    );
  }
}


const LinksViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: ${marginTop}px;
  padding: 20px;
  background-color: #3a4556;
`

const Name = styled.h1`
  margin-top: 40px;
  font-family: ${OpenSans};
  font-size: 30px,
  font-weight: 600;
  color: white;
`

const SocialIconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 20px;
  background-color: transparent;
`

const Button = styled.button`
  background: transparent;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: none;
`;


