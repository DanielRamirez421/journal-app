import { doc, setDoc } from "firebase/firestore/lite"
import { firestoreContants } from "../../core/constants/firebase.constants";
import { firebaseDB } from "../../firebase/config";

export const addUserIfNotExist = async ({ uid, email, displayedName }) => {
  const usersDocRef = doc( firebaseDB, firestoreContants.users, uid );
  await setDoc( usersDocRef, { uid, email, name: displayedName } );
}