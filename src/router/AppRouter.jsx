import { Navigate, Route, Routes } from "react-router-dom"

import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { authStatusConstants } from "../auth/store/authSlice"
import { routerConstants } from "../core/constants/router.constants"
import { useCheckAuth } from "../hooks/useCheckAuth"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { CheckingAuth } from "../ui/components/CheckingAuth"

export const AppRouter = () => {

  const { status } = useCheckAuth();

  if (status === authStatusConstants.AUTHENTICATING) return <CheckingAuth />
  return (
    <Routes>
      {
        (status === authStatusConstants.AUTHENTICATED)
        ? <Route path="/*" element={ <JournalRoutes /> } />
        : <Route path={`${routerConstants.AUTH}/*`} element={ <AuthRoutes /> }/>
      }
      <Route path='/*' element={ <Navigate to='/auth/login' />  } />
    </Routes>
  )
}
