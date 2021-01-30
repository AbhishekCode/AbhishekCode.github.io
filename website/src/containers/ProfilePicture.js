import styled from "styled-components";

const imageSize = 200;
const borderSize = 5;

export default function ProfilePicture({ image }) {
  return (
    <ProfileViewContainer>
      <ImageContainer>
        <img src={image} height={imageSize} width={imageSize} alt="profile" />
      </ImageContainer>
    </ProfileViewContainer>
  );
}

const ProfileViewContainer = styled.div`
  display: flex;
  flex-direction: "column";
  justify-content: "center";
  align-items: "center";
  z-index: 2;
`;

const ImageContainer = styled.div`
  display: flex;
  margin-top: 50px;
  height: ${imageSize}px;
  width: ${imageSize}px;
  border-radius: ${borderSize + imageSize / 2}px;
  overflow: hidden;
  border: ${borderSize}px solid white;
`;
