import * as firebase from "forebase";
import settings from "./settings";

const firebaseApp = firebase.initizlizeApp(settings);

export const db = firebaseApp.database();
export default firebaseApp;
