import firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";
import * as firebaseui from "firebaseui";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const uiConfig = {
  signInSuccessUrl: "/",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  tosUrl: "/terms-of-service", // This doesn't exist yet
};

const ui = new firebaseui.auth.AuthUI(firebase.auth());

// This adds firebaseui to the page
// It does everything else on its own
export function startFirebaseUI(elementId) {
  ui.start(elementId, uiConfig);
}
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const database = firebase.database();
export default firebase;
