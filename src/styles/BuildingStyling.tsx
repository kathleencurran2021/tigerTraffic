import React from 'react'
import { IonButton, IonInput } from '@ionic/react'
// import styled from 'styled-components'
import { styled } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { device } from '../utils/MediaQueries'

const JulianButton = styled(Button)({
  position: 'fixed',
  marginLeft: '15rem',
  marginTop: '7.5rem',
  backgroundColor: ' #ffc72c',
  padding: '6px 16px',
  '&:hover': {
    backgroundColor: '#63666a',
    color: 'white',
  },
})

const LillyButton = styled(Button)({
  position: 'fixed',
  marginLeft: '15rem',
  marginTop: '3rem',
  backgroundColor: '#63666a',
  color: 'white',
  '&:hover': {
    backgroundColor: '#63666a',
    color: 'white',
  },
})
const HooverButton = styled(Button)({
  position: 'fixed',
  marginLeft: '7rem',
  marginTop: '12rem',
  backgroundColor: '#ffc72c',
  color: 'black',
  '&:hover': {
    backgroundColor: '#63666a',
    color: 'white',
  },
})
const UBButton = styled(Button)({
  position: 'fixed',
  marginLeft: '1.5rem',
  marginTop: '12rem',
  backgroundColor: '#63666a',
  color: 'white',
  width: '4.3rem',
  '&:hover': {
    backgroundColor: '#63666a',
    color: 'white',
  },
})
const HarrisonButton = styled(Button)({
  position: 'fixed',
  marginLeft: '14rem',
  marginTop: '16rem',
  backgroundColor: '#63666a',
  color: 'white',
  '&:hover': {
    backgroundColor: '#63666a',
    color: 'white',
  },
})

const GCPAButton = styled(Button)({
  position: 'fixed',
  marginLeft: '7rem',
  marginTop: '4rem',
  backgroundColor: '#ffc72c',
  color: 'black',
  '&:hover': {
    backgroundColor: '#63666a',
    color: 'white',
  },
})

const PCCMButton = styled(Button)({
  position: 'fixed',
  marginLeft: '.5rem',
  marginTop: '4rem',
  backgroundColor: '#63666a',
  color: 'white',
  transform: 'rotate(90deg)',
  '&:hover': {
    backgroundColor: '#63666a',
    color: 'white',
  },
})

const EastCoButton = styled(Button)({
  position: 'fixed',
  marginLeft: '5.5rem',
  marginTop: '20rem',
  backgroundColor: '#63666a',
  color: 'white',
  '&:hover': {
    backgroundColor: '#63666a',
    color: 'white',
  },
})

const RoyButton = styled(Button)({
  position: 'fixed',
  marginLeft: '16.5rem',
  marginTop: '20rem',
  backgroundColor: '#ffc72c',
  color: 'black',
  transform: 'rotate(270deg)',
  '&:hover': {
    backgroundColor: '#63666a',
    color: 'white',
  },
})

const AsburyButton = styled(Button)({
  position: 'fixed',
  marginLeft: '15rem',
  marginTop: '25.2rem',
  backgroundColor: '#63666a',
  color: 'white',
  '&:hover': {
    backgroundColor: '#63666a',
    color: 'white',
  },
})

export {
  JulianButton,
  LillyButton,
  HooverButton,
  UBButton,
  HarrisonButton,
  GCPAButton,
  EastCoButton,
  AsburyButton,
  RoyButton,
  PCCMButton,
}
