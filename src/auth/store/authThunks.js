import { signInWithGoogle } from "../../firebase/poviders";
import { checkCredentials, checkGoogleAuth, logout, login } from "./authSlice";

export const checkAuth = (email, password) => async (dispatch) => {
  dispatch( checkCredentials() );
};

export const startGoogleLogin = () => async (dispatch) => {
  dispatch( checkGoogleAuth() );
  const result = await signInWithGoogle();

  if (!result.ok) {
    dispatch( logout( result ) );
    return;
  }

  dispatch( login( result ) );
}