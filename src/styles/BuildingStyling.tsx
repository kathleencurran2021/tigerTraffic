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
  backgroundColor: '#ffc72c',
  color: 'black',
  '&:hover': {
    backgroundColor: '#63666a',
    color: 'white',
  },
  '&:disabled': {
    backgroundColor: 'darkgrey',
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
  '@media (min-height: 800px)': {
    marginLeft: '8.5rem',
    marginTop: '14rem',
  },
})

const UBButton = styled(Button)({
  position: 'fixed',
  marginLeft: '1.5rem',
  marginTop: '12rem',
  backgroundColor: '#ffc72c',
  color: 'white',
  width: '4.3rem',
  '&:hover': {
    backgroundColor: '#63666a',
    color: 'white',
  },
  '@media (min-height: 800px)': {
    marginLeft: '2rem',
    marginTop: '14rem',
  },
  '&:disabled': {
    backgroundColor: 'darkgrey',
    color: 'white',
  },
})
const HarrisonButton = styled(Button)({
  position: 'fixed',
  marginLeft: '14rem',
  marginTop: '16rem',
  backgroundColor: '#ffc72c',
  color: 'black',
  '&:hover': {
    backgroundColor: '#63666a',
    color: 'white',
  },
  '@media (min-height: 800px)': {
    marginLeft: '14rem',
    marginTop: '19.5rem',
  },
})

const GCPAButton = styled(Button)({
  position: 'fixed',
  marginLeft: '7rem',
  marginTop: '4rem',
  backgroundColor: '#ffc72c',
  color: 'black',
  '&::after': {
    backgroundColor: '#63666a',
    color: 'white',
  },
})

const PCCMButton = styled(Button)({
  position: 'fixed',
  marginLeft: '.5rem',
  marginTop: '4rem',
  backgroundColor: '#ffc72c',
  color: 'black',
  transform: 'rotate(90deg)',
  '&:active': {
    backgroundColor: '#63666a',
    color: 'white',
  },
  '@media (min-height: 800px)': {
    marginLeft: '1rem',
    marginTop: '5rem',
  },
})

const EastCoButton = styled(Button)({
  position: 'fixed',
  marginLeft: '5.5rem',
  marginTop: '20rem',
  backgroundColor: '#ffc72c',
  color: 'black',
  '&:hover': {
    backgroundColor: '#63666a',
    color: 'white',
  },
  '@media (min-height: 800px)': {
    marginLeft: '5.5rem',
    marginTop: '22rem',
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
  '@media (min-height: 800px)': {
    marginLeft: '16.5rem',
    marginTop: '24.5rem',
  },
})

const AsburyButton = styled(Button)({
  position: 'fixed',
  marginLeft: '15rem',
  marginTop: '25.2rem',
  backgroundColor: '#ffc72c',
  color: 'black',
  '&:hover': {
    backgroundColor: '#63666a',
    color: 'white',
  },
  '@media (min-height: 800px)': {
    marginLeft: '15rem',
    marginTop: '31.2rem',
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
