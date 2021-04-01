import {
  IonButton,
  IonContent,
  IonInput,
  IonItem,
  IonPage,
  IonText,
} from '@ionic/react'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Navbar } from '../components/Navbar'
import TextField from '@material-ui/core/TextField'
import { useHistory } from 'react-router-dom'
import { GoButton } from './pagesStyling'

export const SplashPage = () => {
  const history = useHistory()
  const [textVal, setTextVal] = useState('')
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleEmail = () => {
    //fix this syntax omg
    if (textVal!.endsWith('@depauw.edu')) {
      setError(false)
      console.log(error)
      // setIsAuthorized(true)
      history.push('/homepage')
    } else {
      setError(true)
      setErrorMessage('Enter a DPU address and try again')
      console.log(error)
    }
  }

  return (
    <IonPage>
      <IonContent className="splash-content">
        <IonText className="splash-header">
          <h1>Welcome to Tiger Traffic</h1>
        </IonText>
        <form className="email-form">
          <TextField
            id="email-input"
            label="Enter your DPU Email"
            error={error}
            required
            helperText={errorMessage}
            fullWidth={true}
            value={textVal}
            onChange={(e) => setTextVal(e.target.value)}
          ></TextField>
          <GoButton onClick={() => handleEmail()}>Go</GoButton>
        </form>
      </IonContent>
    </IonPage>
  )
}
