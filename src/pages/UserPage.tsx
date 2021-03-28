import { IonContent, IonPage, IonText } from '@ionic/react'
import React from 'react'
import { Navbar } from '../components/Navbar'

export const UserPage = () => {
  return (
    <IonPage>
      <IonContent>
        <IonText>
          <h1>User Page</h1>
        </IonText>
        <h2>
          Current Building: <b>Julian</b>
        </h2>
        <IonText>
          You have been in <b>Julian</b> for <b>27.6 minutes</b>
        </IonText>
        <h3>Previous Study Log:</h3>
        <IonText>Julian: 87.2 minutes</IonText>
        <br></br>
        <IonText>Julian: 47 minutes</IonText>
        <br></br>
        <IonText>Julian: 146.8 minutes</IonText>
      </IonContent>
      <Navbar></Navbar>
    </IonPage>
  )
}
