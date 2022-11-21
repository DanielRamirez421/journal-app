import { createSlice } from "@reduxjs/toolkit";

export const authSliceName = "auth";

const initialState = {
  status: "not-authenticated",
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
    login: (state, action) => {},
    logout: (state, action) => {},
    checkCredentials: (state, action) => {
      state.status = "checking-credentials";
    },
    checkGoogleAuth: (state, action) => {
      state.status = "checking-google-auth";
    },
    setErrorMessage: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, checkCredentials, setErrorMessage, checkGoogleAuth } = authSlice.actions;
