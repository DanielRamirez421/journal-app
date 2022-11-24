import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Grid, TextField, Link, Button,Typography, Alert } from "@mui/material";

import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { authSliceName, authStatusConstants } from "../store/authSlice";
import { startCreateUserUsingEmailAndPassword } from "../store/authThunks";

const formData = {
  displayedName: '',
  email: '',
  password: '',
}

const formValidations = {
  displayedName: [
    [(value) => value.length > 0, 'Display name is required']
  ],
  email: [
    [(value) => value.length > 0, 'Email is required'],
    [(value) => value.includes('@'), 'Must contain "@"'],
    [(value) => value.includes('.'), 'Email is not valid'],
  ],
  password: [
    [(value) => value.length > 0, 'Password is required'],
    [(value) => value.length > 5, 'Password must be at least 6 characters'],
  ],
}

export const RegisterPage = () => {

  const { status, errorMessage } = useSelector(state => state[authSliceName]);
  const isUserAuthenticating = useMemo(() => status === authStatusConstants.AUTHENTICATING, [status]);

  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const { displayedName, email, password, onInputChange, isFormValid,
          displayedNameValid, emailValid, passwordValid, formState } = useForm(formData, formValidations);

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmited(true);

    if (!isFormValid) return;
    dispatch( startCreateUserUsingEmailAndPassword( email.toLowerCase(), password, displayedName ) );
  };

  return (
    <AuthLayout title="Create account">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              label="Full Name"
              type="text"
              placeholder="Full Name"
              fullWidth
              name="displayedName"
              value={displayedName}
              onChange={onInputChange}
              error={!!displayedNameValid && isFormSubmited}
              helperText={ isFormSubmited ? displayedNameValid : '' }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@domain.com"
              fullWidth
              sx={{ my: 2 }}
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && isFormSubmited}
              helperText={ isFormSubmited ? emailValid : '' }
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && isFormSubmited}
              helperText={ isFormSubmited ? passwordValid : '' }
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid 
              item 
              xs={ 12 }
              display={ !!errorMessage ? '': 'none' }>
                <Alert severity='error'>{ errorMessage }</Alert>
            </Grid>
            <Grid item xs={12}>
              <Button
                disabled={isUserAuthenticating}
                type="submit" 
                variant="contained"
                fullWidth>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
