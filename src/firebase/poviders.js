import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { firebaseAuth } from "./config";

const googleAuthProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(firebaseAuth, googleAuthProvider);
    const { displayName, email, photoURL, uid } = result.user;
    return {
      ok: true,
      uid,
      email,
      displayName,
      photoURL, 
    };

  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    }
    
  }
}

export const registerUserWithUsernameAndPassword = async ({email, password, displayedName}) => {
  try {
    const result = await createUserWithEmailAndPassword(firebaseAuth, email, password);
    const { photoURL, uid } = result.user;
    await updateProfile( firebaseAuth.currentUser, { displayName: displayedName } );
    return {
      ok: true,
      uid,
      email,
      displayedName,
      photoURL,
    }
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    }
  }
}