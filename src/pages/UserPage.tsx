import { IonContent, IonPage, IonText } from '@ionic/react'
import React, { useContext } from 'react'
import { Navbar } from '../components/Navbar'
import { CheckinContext } from '../context/CheckinContext'

export const UserPage = () => {
  const { checkin, setCheckin } = useContext(CheckinContext)
  return (
    <IonPage>
      <IonContent>
        <div style={{ marginLeft: '.5rem' }}>
          <h2 style={{ textAlign: 'center' }}>
            Current Building: <b>{checkin == true ? 'building' : 'None'}</b>
          </h2>
          {checkin == true ? (
            <IonText>
              You have been in <b>Julian</b> for <b>27.6 minutes</b>
            </IonText>
          ) : (
            ''
          )}
          <h3 style={{ textAlign: 'center' }}>Your Check-ins:</h3>
          <div>
            <IonText>Julian: 87.2 minutes</IonText>
            <br></br>
            <IonText>Julian: 47 minutes</IonText>
            <br></br>
            <IonText>Julian: 146.8 minutes</IonText>
          </div>
        </div>
      </IonContent>
      <Navbar></Navbar>
    </IonPage>
  )
}
