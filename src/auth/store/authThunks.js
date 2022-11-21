import { checkCredentials, checkGoogleAuth } from "./authSlice";

export const checkAuth = (email, password) => async (dispatch) => {
  dispatch( checkCredentials() );
};

export const startGoogleLogin = () => async (dispatch) => {
  dispatch( checkGoogleAuth() );
}