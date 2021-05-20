import { IonContent, IonPage, IonText } from '@ionic/react'
import { Button, makeStyles } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Link as RouterLink } from 'react-router-dom'
import { CheckinContext } from '../context/CheckinContext'
import { BuildingContext } from '../context/BuildingContext'
import { Building, Hoover } from '../components/Building'
import { UserContext } from '../context/UserContext'
import { TimeContext } from '../context/TimeContext'
import { UseInterval } from '../components/Stopwatch'

// styling for home page elements
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  },
  text: {
    '@media (min-height: 800px)': {
      //allows for the 'safe zone' notch on the iphone
      // the safe zone is 44pt --> 3.6 rem
      marginTop: '3.6rem',
    },
  },
  buttons: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      justifyContent: 'center',
      verticalAlign: 'middle',
      alignItems: 'center',
      marginTop: '2rem',
    },
    '@media (min-height: 800px)': {
      marginTop: '2rem',
    },
  },
  inButton: {
    width: '17rem',
    height: '12rem',
    margin: '.5rem',
    '@media (min-height: 800px)': {
      width: '19rem',
      height: '15rem',
      margin: '.5rem',
    },
  },
}))

export const HomePage: React.FC = () => {
  const classes = useStyles()
  const { checkin, setCheckin } = useContext(CheckinContext)
  const { building, setBuilding } = useContext(BuildingContext)
  const { time, setTime } = useContext(TimeContext)
  const { user, setUser } = useContext(UserContext)
  const [isPlaying, setPlaying] = useState<boolean>(false)
  const delay = 1000

  // timer
  UseInterval(
    () => {
      setTime(time + 1)
    },
    isPlaying ? delay : null
  )

  useEffect(() => {
    checkin ? setPlaying(!isPlaying) : setPlaying(false)
    console.log('playing?', isPlaying)
  }, [])

  // handles user checkout
  const handleCheckout = () => {
    setCheckin(false)
    setBuilding(Building)
    console.log('CHECKING STUFF', building)
    building.peopleInside -= 1
    building.seatsAvailable += 1
    setPlaying(false)
    setTime(0)
  }

  useEffect(() => {
    if (building == Hoover && time == 5) {
      setPlaying(false)
    }
  })

  return (
    <IonPage className={classes.root}>
      <IonContent>
        <div className={classes.text}>
          <IonText>
            <h1>HomePage</h1>
          </IonText>
          {/* changes home text depending on checkin status */}
          {(checkin && building != Building && (
            <IonText>You are checked in to {building.name}</IonText>
          )) || <IonText>You are not checked in anywhere</IonText>}
        </div>
        <br></br>
        <div className={classes.buttons}>
          {/* changes button enable/disable depending on checkin status */}
          {(checkin == false && (
            <Button
              className={classes.inButton}
              variant="contained"
              color="primary"
              component={RouterLink}
              to={'/checkin'}>
              Check In
            </Button>
          )) || (
            <Button
              className={classes.inButton}
              variant="contained"
              color="primary"
              component={RouterLink}
              to={'/checkin'}
              disabled>
              Check In
            </Button>
          )}
          <br></br>{' '}
          {/* changes button enable/disable depending on checkin status */}
          {checkin == true ? (
            <Button
              variant="contained"
              color="secondary"
              className={classes.inButton}
              onClick={handleCheckout}>
              Check Out
            </Button>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              className={classes.inButton}
              onClick={handleCheckout}
              disabled>
              Check Out
            </Button>
          )}
        </div>
      </IonContent>
      <Navbar></Navbar>
    </IonPage>
  )
}
