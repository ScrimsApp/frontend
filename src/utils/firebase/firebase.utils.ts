import firebase from 'firebase/app';

import { firebaseConfig } from '../../config/firebase.config';

firebase.initializeApp(firebaseConfig);

export const cloudStorage = firebase.storage();
