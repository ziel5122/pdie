import * as firebase from 'firebase';
import 'firebase/storage';

import config from '../../config/firebase';

const bucketName = 'imagengine-767ce.appspot.com';

const app = firebase.initializeApp(config)

const storage = app.storage(bucketName);

export default storage;
