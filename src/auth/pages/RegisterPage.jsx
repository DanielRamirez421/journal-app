import { Link as RouterLink } from "react-router-dom";
import { Grid, TextField, Link, Button,Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";


export const RegisterPage = () => {
  return (
    <AuthLayout title="Create account">
      <form>
        <Grid container>
          <Grid item xs={12}>
            <TextField
              label="Full Name"
              type="text"
              placeholder="Full Name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@domain.com"
              fullWidth
              sx={{ my: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
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
