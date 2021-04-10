export const firebaseConfig = {
  apiKey:
    process.env.FIREBASE_APIKEY || 'AIzaSyCjYwB4LiWriEoV6AHRm8Sa9ET-8RpyBaM',
  authDomain: process.env.FIREBASE_AUTHDOMAIN || 'scrimsapp.firebaseapp.com',
  projectId: process.env.FIREBASE_PROJECTID || 'scrimsapp',
  storageBucket: process.env.FIREBASE_STORAGEBUCKET || 'scrimsapp.appspot.com',
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID || '714173194628',
  appId:
    process.env.FIREBASE_APPID || '1:714173194628:web:1c0a6ca6d148e4c901fdd1',
  measurementId: process.env.FIREBASE_MEASUREMENTID || 'G-WTFHXRTFDT',
};
