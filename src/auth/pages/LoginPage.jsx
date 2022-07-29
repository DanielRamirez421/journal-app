import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { routerConstants } from "../../core/constants/router.constants";
import { authConstants } from "../constants/auth.constants";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label={"Email"}
                type={"email"}
                placeholder={"email@domain.com"}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label={"Password"}
                type={"password"}
                placeholder={"password"}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
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
