import { IonContent, IonPage, IonText } from '@ionic/react'
import React, { useContext, useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { useHistory } from 'react-router-dom'
import { GoButton } from './pagesStyling'
import { UserContext } from '../context/UserContext'

import { Plugins } from '@capacitor/core'

const { Storage } = Plugins

export const SplashPage = () => {
  const history = useHistory()
  const [textVal, setTextVal] = useState('')
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const { user, setUser } = useContext(UserContext)

  useEffect(() => {
    console.log('user stuff', user, user.email)
    setUser({ email: textVal, isCheckedIn: false })
  }, [textVal])

  async function setObj() {
    await Storage.set({
      key: 'user',
      value: user.email,
    })
  }

  const handleEmail = () => {
    if (textVal!.endsWith('@depauw.edu')) {
      setError(false)
      console.log(error)

      setUser({ email: textVal, isCheckedIn: false })
      console.log('user before pushing', user)
      setObj()
      history.push('/homepage')
    } else {
      setError(true)
      setErrorMessage('Enter a DPU address and try again')
      console.log(error)
    }
  }

  const handleLogin = () => {
    handleEmail()
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
            onChange={(e) => setTextVal(e.target.value)}></TextField>
          <GoButton onClick={() => handleLogin()}>Go</GoButton>
        </form>
      </IonContent>
    </IonPage>
  )
}
