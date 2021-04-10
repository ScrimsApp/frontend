import firebase from 'firebase/app';
import 'firebase/storage';

import { firebaseConfig } from '../../config/firebase.config';

import { v4 as uuid } from 'uuid';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

/**
 * Save an image on Firebase Storage with the given Ref
 *
 * @param {File} image The image File
 * @param {string} ref The ref for Firebase Storage folder
 */
export const saveImageOnFirebaseStorage = async (image: File, ref: string) => {
  // Generate a random id for the img
  let imgId = uuid();

  // Ref from the Firebase Storage
  const firebaseStorageRef = cloudStorage.ref(`${ref}/${imgId}`);

  //   Save img on Firebase Storage
  await firebaseStorageRef.put(image);

  //   Get ref to send in the Create Team Post Request
  let uploadedImagePath = await cloudStorage
    .ref(`teams/${imgId}`)
    .getDownloadURL();

  return uploadedImagePath;
};

export const cloudStorage = firebase.storage();

export default firebase;
