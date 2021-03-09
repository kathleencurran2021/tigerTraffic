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
  padding-left: 1rem;
  margin: 10rem 1rem 0 2.2rem;
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
  justifycontent: center;
`

//why is this capitalized
const GoButton = styled(IonButton)`
  background-color: #ffc72c;
  color: black;
  margin-top: 3rem;
  font-size: 2rem;
  height: 3rem;
  text-align: center;
  text-transform: capitalize;
  width: 5rem;
  display: flex;
  alignitems: center;
  justifycontent: center;
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
          autofocus={true}
        ></EmailInput>
        <GoButton routerLink="/homepage">Go</GoButton>
      </IonContent>
    </IonPage>
  )
}
