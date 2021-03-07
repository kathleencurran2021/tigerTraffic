import { IonButton, IonNav, IonToolbar } from '@ionic/react'
import React from 'react'

export const Navbar = () => {
  return (
    <IonToolbar>
      <IonButton>
        <h1>Home</h1>
      </IonButton>
      <IonButton>
        <h1>Map</h1>
      </IonButton>
      <IonButton>
        <h1>User</h1>
      </IonButton>
    </IonToolbar>
  )
}
