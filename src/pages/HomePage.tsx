import { IonContent, IonPage, IonText } from '@ionic/react'
import React from 'react'
import { Navbar } from '../components/Navbar'

export const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonText>
          <h1>HomePage</h1>
        </IonText>
      </IonContent>
      <Navbar></Navbar>
    </IonPage>
  )
}
