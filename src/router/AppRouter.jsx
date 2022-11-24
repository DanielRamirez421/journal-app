import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"

import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { authSliceName, authStatusConstants, login } from "../auth/store/authSlice"
import { routerConstants } from "../core/constants/router.constants"
import { firebaseAuth } from "../firebase/config"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { CheckingAuth } from "../ui/components/CheckingAuth"

export const AppRouter = () => {

  const { status } = useSelector(state => state[authSliceName]);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged( firebaseAuth, async ( user ) => {
      if ( !user ) return dispatch( logout() );
      const { uid, email, displayName: displayedName, photoURL } = user;
      dispatch( login({ uid, email, displayedName, photoURL }) );
    })
}, []);

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
