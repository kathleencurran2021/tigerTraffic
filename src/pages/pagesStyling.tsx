import React from 'react'
import { IonButton, IonInput, IonPage } from '@ionic/react'

import { styled } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

const GoButton = styled(Button)({
  backgroundColor: '#ffc72c',
  color: 'black',
  marginTop: '3rem',

  marginLeft: '96px',
  boxShadow: '2px 2px lightgray',
  fontSize: '2rem',
  height: '3rem',
  textAlign: 'center',
  textTransform: 'capitalize',
  width: '5rem',
  display: 'flex',
  alignSelf: 'center',
  verticalAlign: 'middle',
})

const HomeContent = styled(IonPage)({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
})

const HomeButtonDiv = styled('div')({
  textAlign: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  alignItems: 'center',
  marginTop: '2rem',
})

const InOutButton = styled(Button)({
  width: '17rem',
  height: '12rem',
  margin: '.5rem',
})

export { GoButton, HomeContent, HomeButtonDiv, InOutButton }
