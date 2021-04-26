import { IonContent, IonPage, IonText } from '@ionic/react'
import { Button, makeStyles } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { Building } from '../components/Building'
import { Navbar } from '../components/Navbar'
import { BuildingContext } from '../context/BuildingContext'
import { CheckinContext } from '../context/CheckinContext'
import { UserContext } from '../context/UserContext'
import { useStopwatch } from 'react-timer-hook'
import { TimeContext } from '../context/TimeContext'
import { UseInterval } from '../components/Stopwatch'

const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'center',
    marginLeft: '.5rem',
  },
  button: {
    backgroundColor: '#ffc72c',
    color: 'black',
    marginTop: '4rem',
    height: '3rem',
  },
}))

export const UserPage = () => {
  const delay = 1000
  const { checkin, setCheckin } = useContext(CheckinContext)
  const { building, setBuilding } = useContext(BuildingContext)
  const { user, setUser } = useContext(UserContext)
  const { time, setTime } = useContext(TimeContext)
  const classes = useStyles()
  const [isPlaying, setPlaying] = useState<boolean>(false)

  const minuteTime = (time / 60).toFixed(1)

  const handleCheckout = () => {
    setCheckin(false)
    setBuilding(Building)
    building.peopleInside -= 1
    building.seatsAvailable += 1
    setPlaying(false)
    setTime(0)
  }

  useEffect(() => {
    checkin ? setPlaying(!isPlaying) : setPlaying(false)
    console.log('playing?', isPlaying)
  }, [])

  UseInterval(
    () => {
      setTime(time + 1)
    },
    isPlaying ? delay : null
  )
  useEffect(() => {
    console.log('trying checkin user', checkin)
    console.log('hb building?', building)
    console.log('time', time)
  }, [checkin, building])

  return (
    <IonPage>
      <IonContent className={classes.root}>
        <div>
          {/* if you are checked in, include the building, if note print None */}
          <h2>
            Current Building:
            {(checkin && building != Building && <b> {building.name}</b>) ||
              ' None'}
          </h2>
          <h3>You are currently logged in with {user.email}</h3>

          {(checkin && building != Building && (
            <IonText>
              You have been in <b>{building.name}</b> for{' '}
              {time < 60 ? <b>{time} seconds</b> : <b>{minuteTime} minutes</b>}
            </IonText>
          )) ||
            ''}

          {/* <h3 style={{ textAlign: 'center' }}>Your Check-ins:</h3> */}
          {/* <div>
            <IonText>Julian: 87.2 minutes</IonText>
            <br></br>
            <IonText>Julian: 47 minutes</IonText>
            <br></br>
            <IonText>Julian: 146.8 minutes</IonText>
          </div> */}
          {checkin == true ? (
            <Button className={classes.button} onClick={handleCheckout}>
              Check Out of Spot
            </Button>
          ) : (
            <Button
              className={classes.button}
              disabled
              onClick={handleCheckout}>
              Check Out of Spot
            </Button>
          )}
        </div>
      </IonContent>
      <Navbar></Navbar>
    </IonPage>
  )
}
