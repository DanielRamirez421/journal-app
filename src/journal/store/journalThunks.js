import { collection, doc } from "firebase/firestore/lite";
import { firestoreContants } from "../../core/constants/firebase.constants";
import { firebaseDB } from "../../firebase/config";


export const startNewNote = () => async (dispatch, getState) => {
  
  const { auth: { uid, displayName } } = getState();

  // get uid
  const newNote = {
    title: '',
    body: '',
    date: new Date().getTime(),
  };

  const userDocRef = doc( firebaseDB, firestoreContants.users, uid );


  // dispatch create note
  // dispatch activate note
}