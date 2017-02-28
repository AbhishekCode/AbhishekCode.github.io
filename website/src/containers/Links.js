import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import {fullWhite} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';

import fbicon from '../assets/fb.png';
import twittericon from '../assets/twitter.png';
import linkedInicon from '../assets/linkedin.png';
import emailIcon from '../assets/email.png';
import githubicon from '../assets/github.png';
import blogIcon from '../assets/blog.png';
import stackoverflowIcon from '../assets/stackoverflow.png';

const marginTop = -80;
const iconSize = 40;

const iconButtonStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: iconSize,
};
const tooltipStyles= {
    marginLeft: 15,
}
const buttonStyle = {
  margin: 12,
};


export default class Links extends Component {
  render() {
    return (
        <div className={css(styles.container)}>
            <span className={css(styles.name)}>Abhishek Singh</span>

            <div className={css(styles.socialIconContainer)}>
                <IconButton style={iconButtonStyle}
                     tooltipStyles={tooltipStyles}
                     href="https://github.com/AbhishekCode" iconClassName={css(styles.githubicon)} 
                     tooltip="Github"
                     tooltipPosition="top-center"
                />
                <IconButton style={iconButtonStyle}
                     tooltipStyles={tooltipStyles}
                     href="http://stackoverflow.com/users/2009703/abhishek" iconClassName={css(styles.soicon)} 
                     tooltip="StackOverFlow"
                     tooltipPosition="top-center"
                />
                <IconButton style={iconButtonStyle}
                     tooltipStyles={tooltipStyles}
                     href="https://medium.com/@Abvishek" iconClassName={css(styles.blogIcon)} 
                     tooltip="Blog"
                     tooltipPosition="top-center"
                />
                <IconButton style={iconButtonStyle}
                     tooltipStyles={tooltipStyles}
                     href="https://www.twitter.com/abvishek" iconClassName={css(styles.twittericon)} 
                     tooltip="Twitter"
                     tooltipPosition="top-center"
                />
                <IconButton style={iconButtonStyle}
                     tooltipStyles={tooltipStyles}
                     href="https://www.facebook.com/AbhishekSingh1313" iconClassName={css(styles.facebookIcon)} 
                     tooltip="Facebook"
                     tooltipPosition="top-center"/>
                <IconButton style={iconButtonStyle}
                     tooltipStyles={tooltipStyles}
                     href="https://in.linkedin.com/in/abhisheksingh1313" iconClassName={css(styles.linkedInIcon)} 
                     tooltip="LinkedIn"
                     tooltipPosition="top-center"/>
                <IconButton style={iconButtonStyle}
                     tooltipStyles={tooltipStyles}
                     href="mailto:abhishekcode1@gmail.com" iconClassName={css(styles.emailIcon)} 
                     tooltip="Email"
                     tooltipPosition="top-center"/>
            </div>
        </div>
    );
  }
}

const iconStyle = {
    width : iconSize,
    height : iconSize,
}

const styles = StyleSheet.create({
    container: {
       display: 'flex',
       flex:1,
       flexDirection: 'column',
       alignItems: 'center',
       justifyContent: 'flex-start',
       marginTop: marginTop,
       padding: 20,
       backgroundColor: '#3a4556',
       borderTopWidth: 5,
       borderTopColor: 'white',
       borderTopStyle: 'solid'
    },
    name:{
       marginTop: 40,
       fontSize: 30,
       fontWeight: 600,
       color: 'white'
    },
    socialIconContainer: {
       display:'flex',
       flexWrap: 'wrap',
       alignItems: 'center',
       justifyContent: 'center',
       flexDirection: 'row',
       marginTop: 40,
       backgroundColor: 'transparent'
    },
    facebookIcon: {
       ...iconStyle,
       backgroundImage: 'url(' + fbicon + ')',
       backgroundSize: iconSize,
       backgroundPosition: 'center center',
       backgroundRepeat: 'no-repeat',
    },
    twittericon: {
       ...iconStyle,
       backgroundImage: 'url(' + twittericon + ')',
       backgroundSize: iconSize,
       backgroundPosition: 'center center',
       backgroundRepeat: 'no-repeat',
    },
    linkedInIcon:{
          ...iconStyle,
       backgroundImage: 'url(' + linkedInicon + ')',
       backgroundSize: iconSize,
       backgroundPosition: 'center center',
       backgroundRepeat: 'no-repeat',
    },
    emailIcon:{
            ...iconStyle,
       backgroundImage: 'url(' + emailIcon + ')',
       backgroundSize: iconSize,
       backgroundPosition: 'center center',
       backgroundRepeat: 'no-repeat',
    },
    githubicon:{
              ...iconStyle,
       backgroundImage: 'url(' + githubicon + ')',
       backgroundSize: iconSize,
       backgroundPosition: 'center center',
       backgroundRepeat: 'no-repeat',
    },
    soicon:{
              ...iconStyle,
       backgroundImage: 'url(' + stackoverflowIcon + ')',
       backgroundSize: iconSize,
       backgroundPosition: 'center center',
       backgroundRepeat: 'no-repeat',
    },
    blogIcon:{
                   ...iconStyle,
       backgroundImage: 'url(' + blogIcon + ')',
       backgroundSize: iconSize,
       backgroundPosition: 'center center',
       backgroundRepeat: 'no-repeat',
    }
});

