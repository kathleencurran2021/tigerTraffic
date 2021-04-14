import { IonContent, IonPage, IonText } from '@ionic/react'
import { Button, makeStyles } from '@material-ui/core'
import { yellow } from '@material-ui/core/colors'
import React, { useContext, useEffect } from 'react'
import { Building } from '../components/Building'
import { Navbar } from '../components/Navbar'
import { BuildingContext } from '../context/BuildingContext'
import { CheckinContext } from '../context/CheckinContext'

const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'center',
  },
  button: {
    color: 'yellow',
  },
}))

export const UserPage = () => {
  const { checkin, setCheckin } = useContext(CheckinContext)
  const { building, setBuilding } = useContext(BuildingContext)
  const classes = useStyles()

  useEffect(() => {
    console.log('trying checkin user', checkin)
    console.log('hb building?', building)
  }, [checkin, building])

  return (
    <IonPage>
      <IonContent className={classes.root}>
        <div style={{ marginLeft: '.5rem' }}>
          <h2 style={{ textAlign: 'center' }}>
            Current Building:{' '}
            {(checkin && building != Building && <b>{building.name}</b>) ||
              'None'}
          </h2>
          {(checkin && building != Building && (
            <IonText>
              You have been in <b>{building.name}</b> for <b>'27.6 minutes'</b>
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
          <Button className={classes.button}>Check Out of Spot</Button>
        </div>
      </IonContent>
      <Navbar></Navbar>
    </IonPage>
  )
}
