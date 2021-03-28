import { IonContent, IonPage, IonText } from '@ionic/react'
import { Button, makeStyles } from '@material-ui/core'
import React from 'react'
import { Navbar } from '../components/Navbar'

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
  return (
    <IonPage className={classes.root}>
      <IonContent>
        <IonText>
          <h1>HomePage</h1>
        </IonText>
        {/* if checkedin != true */}
        <IonText>You are not checked in anywhere </IonText>
        <br></br>
        <div className={classes.buttons}>
          <Button
            className={classes.inButton}
            variant="contained"
            color="primary"
          >
            Check In
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.inButton}
          >
            Check Out
          </Button>
        </div>
      </IonContent>
      <Navbar></Navbar>
    </IonPage>
  )
}
