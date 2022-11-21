import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";

import { routerConstants } from "../../core/constants/router.constants";
import { authConstants } from "../constants/auth.constants";

import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../shared/hooks";
import { checkAuth } from "../store/authThunks";
import { checkGoogleAuth } from "../store/authSlice";

const EMAIL = "email";
const PASSWORD = "password";

export const LoginPage = () => {

  const dispatch = useDispatch();
  const { onInputChange, formState, email, password } = useForm({ [EMAIL]: "", [PASSWORD]: "" });
  

  const onSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      dispatch( checkAuth() );
    }
  };

  const OnGoogleLogin = () => {
    dispatch( checkGoogleAuth() );
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
                onChange={onInputChange}
                name={EMAIL}
                value={email}
                fullWidth
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
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button 
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
