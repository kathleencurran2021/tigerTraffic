import React from 'react'
import { IonButton, IonInput } from '@ionic/react'

import { styled } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

// const EmailInput = styled(IonInput)`
//   width: 80%;
//   padding-left: 1rem;
//   margin: 10rem 1rem 0 2.2rem;
//   border-bottom: 1px solid gray;
//   display: flex;
//   align-items: center;
//   justifycontent: center;
// `

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
