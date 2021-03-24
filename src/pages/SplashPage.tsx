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
// import { UserContext } from './../components/AuthContext'
// import { isLoggedIn } from '../utils/isLoggedIn'

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
  margin-left: 6.5rem;
  box-shadow: 2px 2px lightgray;
  font-size: 2rem;
  height: 3rem;
  text-align: center;
  text-transform: capitalize;
  width: 5rem;
  display: flex;
  align-self: center;
`

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
          <GoButton
            className="go-button"
            onClick={() => handleEmail()}
            // routerLink="/homepage"
          >
            Go
          </GoButton>
        </form>
      </IonContent>
    </IonPage>
  )
}

{
  /* <EmailInput
          className="email-input"
          placeholder="Enter your DePauw email"
          inputMode="email"
          autofocus={true}
        ></EmailInput> */
}
