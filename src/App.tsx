import { Redirect, Route } from 'react-router-dom'
import { Switch } from 'react-router'
import { IonApp, IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { HomePage } from './pages/HomePage'
import { MapPage } from './pages/MapPage'
import { UserPage } from './pages/UserPage'
import { CheckInPage } from './pages/CheckInPage'
import { Database, Storage } from '@ionic/storage'
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
import { Plugins, LocalNotification } from '@capacitor/core'

/* Theme variables */
import './theme/variables.css'
import { SplashPage } from './pages/SplashPage'
import { useEffect, useState } from 'react'
import { Building, BuildingProps, Hoover, Julian } from './components/Building'
import { BuildingContext } from './context/BuildingContext'
import { CheckinContext } from './context/CheckinContext'
import { DefaultUser, UserProps } from './components/User'
import { UserContext } from './context/UserContext'

import { TimeContext, timeProps } from './context/TimeContext'

import notifications from '../../tigerTraffic/src/components/Notifications'
const { LocalNotifications } = Plugins

const App: React.FC = () => {
  const [building, setBuilding] = useState<BuildingProps>(Building)
  const [checkin, setCheckin] = useState<boolean>(false)
  const [user, setUser] = useState<UserProps>(DefaultUser)
  const [time, setTime] = useState<number>(0)
  const [isPlaying, setPlaying] = useState<boolean>(false)
  const minuteTime = (time / 60).toFixed(1)

  useEffect(() => {
    if (building == Hoover && time > 5) {
      setCheckin(false)
      Hoover.peopleInside -= 1
      Hoover.seatsAvailable += 1
      setBuilding(Building)
      notifications.schedule()
      setPlaying(false)
      setTime(0)
    }
    // checks a user out after 2 hours
    if (time == 7200) {
      notifications.schedule(building)

      // setCheckin(false)
      // building.peopleInside -= 1
      // building.seatsAvailable += 1
      // setBuilding(Building)
      // setPlaying(false)
      // setTime(0)
    }
    // if (time > 20) {
    //   notifications.schedule(building)
    // }
  })

  useEffect(() => {
    console.log(time)
  }, [time])

  return (
    <IonApp>
      <UserContext.Provider value={{ user, setUser }}>
        <CheckinContext.Provider value={{ checkin, setCheckin }}>
          <BuildingContext.Provider value={{ building, setBuilding }}>
            <TimeContext.Provider value={{ time, setTime }}>
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
                    <Route path="/welcome" component={SplashPage} />
                  </Switch>
                </IonRouterOutlet>
              </IonReactRouter>
            </TimeContext.Provider>
          </BuildingContext.Provider>
        </CheckinContext.Provider>
      </UserContext.Provider>
    </IonApp>
  )
}

export default App
