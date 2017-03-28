import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import profileImage from '../assets/profile.png'
const imageSize = 200;
const borderSize = 5;

export default class ProfilePicture extends Component {
  render() {
    return (
        <div className={css(styles.container)}>
            <div className={css(styles.imageContainer)}>
                <img src={profileImage} height={imageSize} width={imageSize} alt="profile"/>
            </div>
        </div>
    );
  }
}

const styles = StyleSheet.create({
    container: {
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'center',
       alignItems: 'center',
       zIndex:2,
       padding: 20
    },
    imageContainer:{
       display: 'flex',
       marginTop: 50,
       height: imageSize,
       width:imageSize,
       borderRadius: borderSize+ imageSize/2,
       overflow: 'hidden',
       borderWidth: borderSize,
       borderColor: 'white',
       borderStyle: 'solid'
    }
});

