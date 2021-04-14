import { Redirect, Route } from 'react-router-dom'
import { Switch } from 'react-router'
import { IonApp, IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { HomePage } from './pages/HomePage'
import { MapPage } from './pages/MapPage'
import { UserPage } from './pages/UserPage'
import { CheckInPage } from './pages/CheckInPage'
import PrivateRoute from './components/PrivateRoute'
// import { UserContext, UserProvider } from './components/AuthContext'
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'
import { SplashPage } from './pages/SplashPage'
import { useContext, useState } from 'react'
import { Building, BuildingProps, Julian } from './components/Building'
import { BuildingContext } from './context/BuildingContext'
import { CheckinContext } from './context/CheckinContext'

// const { user } = useContext(UserContext)

const App: React.FC = () => {
  const [building, setBuilding] = useState<BuildingProps>(Building)
  const [checkin, setCheckin] = useState<boolean>(false)

  return (
    <IonApp>
      {/* <BuildingContext.Provider value={(building, setBuilding)}> */}
      <CheckinContext.Provider value={{ checkin, setCheckin }}>
        <BuildingContext.Provider value={{ building, setBuilding }}>
          <IonReactRouter>
            <IonRouterOutlet>
              <Switch>
                <Route exact path="/">
                  <Redirect to="/welcome" />
                </Route>
                <PrivateRoute exact path="/homepage">
                  <HomePage />
                </PrivateRoute>
                <PrivateRoute exact path="/map">
                  <MapPage />
                </PrivateRoute>
                <PrivateRoute path="/user">
                  <UserPage />
                </PrivateRoute>
                <PrivateRoute exact path="/checkin">
                  <CheckInPage />
                </PrivateRoute>
                {/* <PrivateRoute exact component={CheckInPage}>
                <CheckInPage Building={Julian} />
              </PrivateRoute> */}
                <Route path="/welcome" component={SplashPage} />
              </Switch>
            </IonRouterOutlet>
          </IonReactRouter>
        </BuildingContext.Provider>
      </CheckinContext.Provider>
      {/* </BuildingContext.Provider> */}
    </IonApp>
  )
}

export default App
