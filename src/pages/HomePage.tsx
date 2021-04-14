import { IonContent, IonPage, IonText } from '@ionic/react'
import { Button, makeStyles } from '@material-ui/core'
import React, { useContext, useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { Link as RouterLink } from 'react-router-dom'
import { CheckinContext } from '../context/CheckinContext'
import { BuildingContext } from '../context/BuildingContext'
import { Building } from '../components/Building'

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
  const { building, setBuilding } = useContext(BuildingContext)

  useEffect(() => {
    console.log('checkin home', checkin)
    console.log('trying building home', building)
  }, [checkin, building])

  const handleCheckout = () => {
    setCheckin(false)
    setBuilding(Building)
  }

  return (
    <IonPage className={classes.root}>
      <IonContent>
        <IonText>
          <h1>HomePage</h1>
        </IonText>
        {(checkin && building != Building && (
          <IonText>You are checked in to {building.name}</IonText>
        )) || <IonText>You are not checked in anywhere</IonText>}
        <br></br>
        <div className={classes.buttons}>
          {(checkin == false && (
            <Button
              className={classes.inButton}
              variant="contained"
              color="primary"
              component={RouterLink}
              to={'/map'}
            >
              Check In
            </Button>
          )) || (
            <Button
              className={classes.inButton}
              variant="contained"
              color="primary"
              component={RouterLink}
              to={'/checkin'}
              disabled
            >
              Check In
            </Button>
          )}
          <br></br>{' '}
          {checkin == true ? (
            <Button
              variant="contained"
              color="secondary"
              className={classes.inButton}
              onClick={handleCheckout}
            >
              Check Out
            </Button>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              className={classes.inButton}
              onClick={handleCheckout}
              disabled
            >
              Check Out
            </Button>
          )}
        </div>
      </IonContent>
      <Navbar></Navbar>
    </IonPage>
  )
}
