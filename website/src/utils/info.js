import profileImage from "../assets/profile.png";
import fbicon from "../assets/fb.png";
import twittericon from "../assets/twitter.png";
import linkedInicon from "../assets/linkedin.png";
import emailIcon from "../assets/email.png";
import githubicon from "../assets/github.png";
import blogIcon from "../assets/blog.png";
import stackoverflowIcon from "../assets/stackoverflow.png";
import webicon from "../assets/webicon.png";

const getIcon = name => {
  switch (name) {
    case "github":
      return githubicon;
    case "StackOverFlow":
      return stackoverflowIcon;
    case "blog":
      return blogIcon;
    case "Twitter":
      return twittericon;
    case "facebook":
      return fbicon;
    case "LinkedIn":
      return linkedInicon;
    case "Email":
      return emailIcon;
    default:
      return webicon;
  }
};

export const myInfo = () => {
  return new Promise((resolve, reject) => {
    let url = "https://api.github.com/gists/9052ef9a070e0d5ab046fa3464d026c4";
    fetch(url)
      .then(response => {
        if (response.status === 200) {
          response.json().then(data => {
            let profileData = JSON.parse(
              data.files["personalData.json"].content
            );
            profileData.image = profileImage;
            profileData.contactLinks &&
              profileData.contactLinks.forEach(element => {
                element.icon = getIcon(element.name);
              });
            let info = {
              personalData: profileData,
              projectData: JSON.parse(data.files["projectdata.json"].content)
            };
            resolve(info);
          });
        }
      })
      .catch(error => {
        reject(error);
      });
  });
};
