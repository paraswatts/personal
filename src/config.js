import * as firebase from "firebase";

//for this tutorial I have exposed the config object, but for a real production environment, never expose the folowing keys in public repos.


const config = {
  apiKey: "AIzaSyAJ9nf9gTr83ZWzPoSW_TG8wr8U34L759k",
  authDomain: "paras-watts.firebaseapp.com",
  databaseURL: "https://paras-watts.firebaseio.com",
  projectId: "paras-watts",
  storageBucket: "paras-watts.appspot.com",
  messagingSenderId: "959798705229",
  appId: "1:959798705229:web:b070cf2e4d3629e3573004",
  measurementId: "G-8JGT4B3HXW"
};


if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const f = firebase;
// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = firebase.storage();
// Create a storage reference from our storage service
export const storageRef = storage.ref();
export const database = firebase.firestore();
