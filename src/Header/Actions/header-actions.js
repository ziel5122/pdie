import firebase from 'firebase/app';
import 'firebase/storage';
import IconButton from 'material-ui/IconButton';
import ActionSearch from 'material-ui/svg-icons/action/search';
import Photo from 'material-ui/svg-icons/image/photo';
import TextField from 'material-ui/TextField';
import React from 'react';

import config from '../../../config/firebase.js';
import Search from '../Search';
import styles from './styles';

let imageBackground;
let imageColor;
let imageHeight;

firebase.initializeApp(config);

const ref = firebase.storage().ref('images/github.png');

const HeaderCenter = ({
  imageOpen,
  imageUploadUrl,
  setImageUploadUrl,
  toggleImage,
}) => {
  //let reader;
  //if (typeof window !== undefined) reader = new FileReader();

  if (imageOpen) {
    imageBackground = 'darkgray';
    imageColor = 'white',
    imageHeight = '56px';
  } else {
    imageBackground = 'white';
    imageColor = 'darkgray',
    imageHeight = '40px';
  }
/*
  reader.onloadend = () => {
    setImageUploadUrl(reader.result);
  };
*/
  return (
    <div style={styles.headerActions}>
      <div style={{
          ...styles.imageWrapper,
          background: imageBackground,
          height: imageHeight,
      }}>
        {
          imageUploadUrl ? (
            <Photo
              onClick={() => toggleImage()}
              style={{
                ...styles.imageButton,
                color: imageColor,
              }}
            />
          ) : (
            <label htmlFor="image-input">
              <Photo
                onClick={() => toggleImage()}
                style={{
                  ...styles.imageButton,
                  color: imageColor,
                }}
              />
            </label>
          )
        }
        <input
          id="image-input"
          onChange={(e) => {
            reader.readAsDataURL(e.target.files[0]);
            //ref.put(e.target.files[0]).then(snapshot => console.log('uploaded file'));
          }}
          style={{ display: 'none' }}
          type="file"
        />
      </div>
      <Search />
    </div>
  );
};

export default HeaderCenter;
