import { IonContent, IonPage, IonText } from '@ionic/react'
import { Button, makeStyles } from '@material-ui/core'
import React, { useContext, useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { Link as RouterLink } from 'react-router-dom'
import { CheckinContext } from '../context/CheckinContext'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  },
  buttons: {
    textAlign: 'center',
    justifyContent: 'center',
    verticalAlign: 'middle',
    alignItems: 'center',
    marginTop: '2rem',
    // display: 'flex',
  },
  inButton: {
    width: '17rem',
    height: '12rem',
    margin: '.5rem',
  },
}))

export const HomePage: React.FC = () => {
  const classes = useStyles()
  const { checkin, setCheckin } = useContext(CheckinContext)

  useEffect(() => {
    console.log('trying checkin home', checkin)
  }, [checkin])

  const handleCheckin = () => {
    setCheckin(true)
  }

  const handleCheckout = () => {
    setCheckin(false)
  }

  return (
    <IonPage className={classes.root}>
      <IonContent>
        <IonText>
          <h1>HomePage</h1>
        </IonText>
        {/* if checkedin != true */}
        <IonText>You are checked in to Julian</IonText>
        <br></br>
        <div className={classes.buttons}>
          <Button
            className={classes.inButton}
            variant="contained"
            color="primary"
            component={RouterLink}
            to={'/checkin'}
            onClick={handleCheckin}
          >
            Check In
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.inButton}
            onClick={handleCheckout}
          >
            Check Out
          </Button>
        </div>
      </IonContent>
      <Navbar></Navbar>
    </IonPage>
  )
}
