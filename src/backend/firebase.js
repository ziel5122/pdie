import firebase from 'firebase/app';

import config from '../../config/firebase';

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const storage = firebase.storage();

export default { database, storage };
