import React from 'react'
import { IonButton, IonInput } from '@ionic/react'

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

export { GoButton }
