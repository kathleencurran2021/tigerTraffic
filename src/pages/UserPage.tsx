import { IonContent, IonPage, IonText } from '@ionic/react'
import { Button, makeStyles } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { Building } from '../components/Building'
import { Navbar } from '../components/Navbar'
import { BuildingContext } from '../context/BuildingContext'
import { CheckinContext } from '../context/CheckinContext'
import { UserContext } from '../context/UserContext'
import { Link as RouterLink } from 'react-router-dom'

import { TimeContext } from '../context/TimeContext'
import { UseInterval } from '../components/Stopwatch'
import { Database } from '@ionic/storage'

import { Plugins } from '@capacitor/core'

const { Storage } = Plugins

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
    '&:hover': {
      backgroundColor: '#63666a',
      color: 'white',
    },
    '&::after': {
      backgroundColor: '#63666a',
      color: 'white',
    },
  },
  logout: {
    marginTop: '14rem',
    fontSize: '1rem',
    backgroundColor: '#63666a',
    color: 'white',
    height: '3rem',
    width: '8rem',
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
  const [db, setDB] = useState<Database | null>(null)

  const minuteTime = (time / 60).toFixed(1)

  const handleCheckout = () => {
    setCheckin(false)
    setBuilding(Building)
    building.peopleInside -= 1
    building.seatsAvailable += 1
    setPlaying(false)
    setTime(0)
  }

  async function getObject() {
    const ret: any = await Storage.get({ key: 'user' })
    const use = ret.value
    setUser({ email: use, isCheckedIn: false })
  }

  async function clear() {
    await Storage.clear()
  }

  useEffect(() => {
    getObject()
  }, [])

  function handleLogout() {
    clear()
  }

  useEffect(() => {
    checkin ? setPlaying(!isPlaying) : setPlaying(false)
    console.log('playing?', isPlaying)
    // console.log('b', db)
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
          {/* <Button onClick={getObject}>YEs</Button> */}
          <h3>You are currently logged in as {user.email}</h3>

          {(checkin && building != Building && (
            <IonText>
              You have been in <b>{building.name}</b> for{' '}
              {time < 60 ? <b>{time} seconds</b> : <b>{minuteTime} minutes</b>}
            </IonText>
          )) ||
            ''}

          {checkin ? (
            <Button
              className={classes.button}
              variant="contained"
              onClick={handleCheckout}>
              Check Out of Spot
            </Button>
          ) : (
            <Button className={classes.button} variant="contained" disabled>
              Check Out of Spot
            </Button>
          )}
        </div>

        <Button
          className={classes.logout}
          variant="contained"
          color="primary"
          component={RouterLink}
          to={'/welcome'}
          onClick={handleLogout}>
          Log Out
        </Button>
      </IonContent>
      <Navbar></Navbar>
    </IonPage>
  )
}
