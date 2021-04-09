import { IonContent, IonPage, IonText } from '@ionic/react'
import React from 'react'
import { Navbar } from '../components/Navbar'

export const UserPage = () => {
  return (
    <IonPage>
      <IonContent>
        <div style={{ marginLeft: '.5rem' }}>
          <h2 style={{ textAlign: 'center' }}>
            Current Building: <b>Julian</b>
          </h2>
          <IonText>
            You have been in <b>Julian</b> for <b>27.6 minutes</b>
          </IonText>
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
