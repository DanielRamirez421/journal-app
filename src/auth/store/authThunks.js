import { registerUserWithUsernameAndPassword, signInWithGoogle, signInWithUsernameAndPassword } from "../../firebase/poviders";
import { checkingCredentials, logout, login } from "./authSlice";

export const checkAuth = (email, password) => async (dispatch) => {
  dispatch( checkingCredentials() );
};

export const startGoogleLogin = () => async (dispatch) => {
  dispatch( checkingCredentials() );
  const result = await signInWithGoogle();
  if (!result.ok) return dispatch( logout( result ) );
  dispatch( login( result ) );
}


export const startCreateUserUsingEmailAndPassword = (email, password, displayedName) => async (dispatch) => {
  dispatch( checkingCredentials() );
  const result = await registerUserWithUsernameAndPassword({email, password, displayedName});
  if (!result.ok) return dispatch( logout( result ) );
  dispatch( login( result ) );
};


export const startLoginWithEmailPassword = (email, password) => async (dispatch) => {
  dispatch( checkingCredentials() );
  const result = await signInWithUsernameAndPassword({email, password});
  if (!result.ok) return dispatch( logout( result ) );
  dispatch( login( result ) );
};