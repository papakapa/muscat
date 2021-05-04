import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDD8k79jrwgvqtBSm3g81HSrOB6NRhGG-U",
  authDomain: "mus-cat.firebaseapp.com",
  projectId: "mus-cat",
  storageBucket: "mus-cat.appspot.com",
  messagingSenderId: "989037471808",
  appId: "1:989037471808:web:05e31dfbb9d158450757a5"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { storage, firebase as default };
