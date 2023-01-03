import { registerUserWithUsernameAndPassword, signInWithGoogle, signInWithUsernameAndPassword, singOutFirebase } from "../../firebase/providers";
import { checkingCredentials, logout, login } from "./authSlice";
import { addUserIfNotExist } from "../utils/store.utils";

export const checkAuth = (email, password) => async (dispatch) => {
  dispatch( checkingCredentials() );
};

export const startCreateUserUsingEmailAndPassword = (email, password, displayedName) => async (dispatch) => {
  dispatch( checkingCredentials() );
  const result = await registerUserWithUsernameAndPassword({email, password, displayedName});
  if (!result.ok) return dispatch( logout( result ) );
  dispatch( login( result ) );
  addUserIfNotExist( result );
};

export const startGoogleLogin = () => async (dispatch) => {
  dispatch( checkingCredentials() );
  const result = await signInWithGoogle();
  if (!result.ok) return dispatch( logout( result ) );
  dispatch( login( result ) );
  addUserIfNotExist( result );
}

export const startLoginWithEmailPassword = (email, password) => async (dispatch) => {
  dispatch( checkingCredentials() );
  const result = await signInWithUsernameAndPassword({email, password});
  if (!result.ok) return dispatch( logout( result ) );
  dispatch( login( result ) );
};


export const startLogout = () => async (dispatch) => {
  const result = await singOutFirebase();
  if (!result.ok) throw new Error('Error logout from firebase');
  dispatch( logout( {errorMessage: null}) );
}