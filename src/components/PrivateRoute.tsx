import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
// import { isLogin } from '../utils'

interface PrivateRouteProps extends RouteProps {
  children: React.ReactNode
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  ...rest
}: any) => {
  const isAuthorized = true
  return (
    <Route {...rest}>
      {isAuthorized ? children : <Redirect to="/welcome" />}
    </Route>
  )
}

export default PrivateRoute
