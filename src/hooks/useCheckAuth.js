import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";

import { authSliceName, login, logout } from "../auth/store/authSlice";
import { firebaseAuth } from "../firebase/config";

export const useCheckAuth = () => {

  const { status } = useSelector(state => state[authSliceName]);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged( firebaseAuth, async ( user ) => {
      if ( !user ) return dispatch( logout() );
      const { uid, email, displayName: displayedName, photoURL } = user;
      dispatch( login({ uid, email, displayedName, photoURL }) );
    })
}, []);

return { status };
}
