import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography, Alert } from "@mui/material";
import { Google } from "@mui/icons-material";

import { routerConstants } from "../../core/constants/router.constants";
import { authConstants } from "../constants/auth.constants";

import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../shared/hooks";
import { startGoogleLogin, startLoginWithEmailPassword } from "../store/authThunks";
import { authSliceName, authStatusConstants } from "../store/authSlice";
import { useMemo, useState } from "react";

const EMAIL = "email";
const PASSWORD = "password";


const formData = {
  [EMAIL]: '',
  [PASSWORD]: '',
}

const formValidations = {
  [EMAIL]: [
    [(value) => value.length > 0, 'Email is required'],
    [(value) => value.includes('@'), 'Must contain "@"'],
    [(value) => value.includes('.'), 'Email is not valid'],
  ],
  [PASSWORD]: [
    [(value) => value.length > 0, 'Password is required'],
    [(value) => value.length > 5, 'Password must be at least 6 characters'],
  ],
}


export const LoginPage = () => {

  const { status, errorMessage } = useSelector(state => state[authSliceName]);
  const isUserAuthenticating = useMemo(() => status === authStatusConstants.AUTHENTICATING, [status]);
  
  const [ isFormSubmited, setIsFormSubmited ] = useState(false);
  const { onInputChange, email, password, formState,
    emailValid, passwordValid, isFormValid } = useForm(formData, formValidations);
    
    const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmited(true);

    if (!isFormValid) return;
    dispatch( startLoginWithEmailPassword(email, password) );
  };

  const OnGoogleLogin = () => {
    dispatch( startGoogleLogin() );
  };

  return (
    <AuthLayout title="Login">
        <form onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label={"Email"}
                type={"email"}
                placeholder={"email@domain.com"}
                fullWidth
                name={EMAIL}
                value={email}
                onChange={onInputChange}
                error={!!emailValid && isFormSubmited}
                helperText={ isFormSubmited ? emailValid : '' }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={"Password"}
                type={"password"}
                placeholder={"password"}
                onChange={onInputChange}
                name={PASSWORD}
                value={password}
                fullWidth
                error={!!passwordValid && isFormSubmited}
                helperText={ isFormSubmited ? passwordValid : '' }
              />
            </Grid>
          </Grid>
          <Grid 
            item 
            xs={ 12 }
            sx={{ mt: 2 }}
            display={ !!errorMessage ? '': 'none' }>
              <Alert severity='error'>{ errorMessage }</Alert>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 0 }}>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isUserAuthenticating}
                variant="contained" 
                fullWidth
                type="submit"
                onClick={onSubmit}
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isUserAuthenticating}
                variant="contained" 
                fullWidth
                onClick={OnGoogleLogin}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link
              component={RouterLink}
              to={`/${routerConstants.AUTH}/${authConstants.REGISTER}`}
            >
              Crear una cuenta
            </Link>
          </Grid>
        </form>
    </AuthLayout>
  );
};
