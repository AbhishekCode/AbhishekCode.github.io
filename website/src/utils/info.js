import profileImage from '../assets/profile.png'
import fbicon from "../assets/fb.png";
import twittericon from "../assets/twitter.png";
import linkedInicon from "../assets/linkedin.png";
import emailIcon from "../assets/email.png";
import githubicon from "../assets/github.png";
import blogIcon from "../assets/blog.png";
import stackoverflowIcon from "../assets/stackoverflow.png";

export const myInfo = {
    image: profileImage,
    name: "Abhishek Singh",
    contactLinks: [
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
    ],
    introduction: "Software Developer with more than 4 years of experience. I have worked on various Websites, mobile applications and Games. I like to build user interface.<br/><br/> Currently I'm doing frontend development using ReactJs and React-Native.",
    resume: "https://abhishekcode.github.io/resume/"
}