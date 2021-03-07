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
      </IonContent>
      <Navbar></Navbar>
    </IonPage>
  )
}
