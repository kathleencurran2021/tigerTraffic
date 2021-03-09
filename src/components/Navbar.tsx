import { IonButton, IonLabel, IonList, IonNav, IonToolbar } from '@ionic/react'
import React from 'react'

export const Navbar = () => {
  return (
    <IonToolbar className="navToolbar">
      <IonList>
        <IonButton className="navButton" routerLink="/homepage">
          <IonLabel>Home</IonLabel>
        </IonButton>
        <IonButton className="navButton" routerLink="/map">
          <IonLabel>Map</IonLabel>
        </IonButton>
        <IonButton className="navButton" routerLink="/user">
          <IonLabel>User</IonLabel>
        </IonButton>
      </IonList>
    </IonToolbar>
  )
}
