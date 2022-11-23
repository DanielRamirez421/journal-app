import { createSlice } from "@reduxjs/toolkit";

export const authSliceName = "auth";
export const authStatusConstants = {
  AUTHENTICATED: "authenticated",
  NOT_AUTHENTICATED: "notAuthenticated",
  AUTHENTICATING: "authenticating",
}

const initialState = {
  status: authStatusConstants.NOT_AUTHENTICATED,
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: authSliceName,
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.status = authStatusConstants.AUTHENTICATED;
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.errorMessage = null;
    },
    logout: (state, { payload }) => {
      state.status = authStatusConstants.NOT_AUTHENTICATED;
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = payload.errorMessage;
    },
    checkCredentials: (state, action) => {
      state.status = authStatusConstants.AUTHENTICATING;
    },
    checkGoogleAuth: (state, action) => {
      state.status = authStatusConstants.AUTHENTICATING;
    },
    setErrorMessage: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, checkCredentials, setErrorMessage, checkGoogleAuth } = authSlice.actions;
