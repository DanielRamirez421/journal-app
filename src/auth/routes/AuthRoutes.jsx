import { Routes, Route, Navigate } from "react-router-dom";
import { routerConstants } from "../../core/constants/router.constants";
import { authConstants } from "../constants/auth.constants";
import { LoginPage, RegisterPage } from "../pages";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path={authConstants.LOGIN}    element={<LoginPage />} />
      <Route path={authConstants.REGISTER} element={<RegisterPage />} />
      <Route 
        path={"/*"} 
        element={
          <Navigate to={`/${routerConstants.AUTH}/${authConstants.LOGIN}`} />
        } 
      />
    </Routes>
  );
};
