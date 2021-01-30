import styled from "styled-components";
import { OpenSans } from "../utils/config";
import { Card, Link } from "../components/heading";

export default function ProfilePicture({ resume, introduction }) {
  const openResume = () => {
    window.open(resume);
  };
  const introHtml = { __html: introduction };
  return (
    <Card>
      <IntroductionText dangerouslySetInnerHTML={introHtml} />
      <div>
        <Link onClick={openResume}>Resume</Link>
      </div>
    </Card>
  );
}

const IntroductionText = styled.p`
  width: 100%;
  font-family: ${OpenSans},
  font-size: 20px;
  font-weight: 300;
  color: #000000;
`;
