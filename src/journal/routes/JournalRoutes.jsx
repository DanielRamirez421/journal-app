import { JournalPage } from "../pages/JournalPage"
import { Routes, Route, Navigate } from "react-router-dom";
import { routerConstants } from "../../core/constants/router.constants";

export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path={routerConstants.ROOT} element={<JournalPage />} />
      <Route path='/*' element={<Navigate to={routerConstants.ROOT} />} />
    </Routes>
  )
}
