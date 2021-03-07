import { IonContent, IonPage, IonText } from '@ionic/react'
import React from 'react'
import { Navbar } from '../components/Navbar'

export const MapPage = () => {
  return (
    <IonPage>
      <IonContent>
        <IonText>
          <h1>Map Page</h1>
        </IonText>
      </IonContent>
      <Navbar></Navbar>
    </IonPage>
  )
}
