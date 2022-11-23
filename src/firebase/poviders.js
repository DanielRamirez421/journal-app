import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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