import firebase from 'firebase/storage';

import firebaseConfig from '../../config/firebase';

const app = firebase.initializeApp(firebaseConfig);

export default app;
