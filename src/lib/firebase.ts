import { FirebaseOptions, getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { firebaseConfig } from "../../env";

function createFirebaseApp(config: FirebaseOptions) {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}

export const firebaseApp = createFirebaseApp(firebaseConfig);
export const firebaseFirestore = getFirestore(firebaseApp);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseStorage = getStorage();

