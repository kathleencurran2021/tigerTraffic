import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonPage,
  IonText,
} from '@ionic/react'
import React from 'react'
import styled from 'styled-components'
import { Navbar } from '../components/Navbar'
import TextField from '@material-ui/core/TextField'

const EmailInput = styled(IonInput)`
  width: 80%;
  background-color: lightgray;
  margin: 10rem 1rem 0 2rem;
  border: black 2px;
`

//why is this capitalized
const GoButton = styled(IonButton)`
  background-color: #ffc72c;
  color: black;
  margin-left: 30%;
  margin-top: 7rem;
  margin-bottom: 5rem;
  font-size: 2rem;
  height: 3rem;
  text-align: center;
`

export const SplashPage = () => {
  return (
    <IonPage>
      <IonContent>
        <IonText className="splash-header">
          <h1>Welcome to Tiger Traffic</h1>
        </IonText>
        <EmailInput
          className="email-input"
          placeholder="Enter your DePauw email"
          inputMode="email"
        ></EmailInput>
        <GoButton routerLink="/homepage">Go</GoButton>
      </IonContent>
    </IonPage>
  )
}
