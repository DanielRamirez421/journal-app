import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { routerConstants } from "../core/constants/router.constants"
import { JournalRoutes } from "../journal/routes/JournalRoutes"

export const AppRouter = () => {
  return (
    
    <Routes>
      <Route 
        path={`${routerConstants.AUTH}/*`}
        element={ <AuthRoutes /> }
      /> 
      <Route 
        path="/*"
        element={ <JournalRoutes /> }
      />
    </Routes>

  )
}
