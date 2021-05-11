import { IonContent, IonPage, IonText } from '@ionic/react'
import { Box, Container, makeStyles, Typography } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { MapModal } from './../components/MapModal'
import {
  JulianButton,
  UBButton,
  LillyButton,
  PCCMButton,
  HooverButton,
  GCPAButton,
  HarrisonButton,
  EastCoButton,
  RoyButton,
  AsburyButton,
} from '../styles/BuildingStyling'
import {
  BuildingProps,
  Hoover,
  Julian,
  GCPA,
  Roy,
} from './../components/Building'
import { BuildingContext } from '../context/BuildingContext'
import { CheckinContext } from '../context/CheckinContext'
import { TimeContext } from '../context/TimeContext'
import { UseInterval } from '../components/Stopwatch'

const useStyles = makeStyles((theme) => ({
  root: {
    '@media (min-height: 800px)': {
      marginTop: '3.6rem',
    },
  },

  text: {
    textAlign: 'center',
  },
  boxRules: {
    height: 476,
    width: '100%',
    '@media (min-height: 800px)': {
      height: 580,
    },
  },
}))

export const MapPage = () => {
  const delay = 1000

  const classes = useStyles()
  const { checkin, setCheckin } = useContext(CheckinContext)
  const { time, setTime } = useContext(TimeContext)

  const [open, setOpen] = React.useState(false)
  const { building, setBuilding } = useContext(BuildingContext)
  const [isPlaying, setPlaying] = useState<boolean>(false)

  useEffect(() => {
    console.log('trying mapPage', building)
  }, [building])

  const handleOpen = (someBuilding: BuildingProps) => {
    setOpen(true)
    console.log('open is true')
    setBuilding(someBuilding)
    console.log('What building?', building)
  }

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    if (building == Hoover && time == 5) {
      setPlaying(false)
    }
  })

  return (
    <IonPage>
      <IonContent>
        <Container className={classes.root}>
          <IonText>
            <h1>
              <b>Study Map</b>
            </h1>
          </IonText>

          <IonText className={classes.text}>
            <Typography>South Quad &uarr;</Typography>
          </IonText>
          <Box className={classes.boxRules} border={1}>
            <LillyButton variant="contained" disabled>
              Lilly
            </LillyButton>
            <PCCMButton variant="contained">PCCM</PCCMButton>
            <JulianButton
              variant="contained"
              onClick={() => handleOpen(Julian)}>
              Julian
            </JulianButton>
            <UBButton variant="contained" disabled>
              UB
            </UBButton>
            <HooverButton
              variant="contained"
              onClick={() => handleOpen(Hoover)}>
              Hoover
            </HooverButton>
            <GCPAButton variant="contained" onClick={() => handleOpen(GCPA)}>
              GCPA
            </GCPAButton>
            <HarrisonButton variant="contained">Harrison</HarrisonButton>
            <EastCoButton variant="contained">
              East<br></br>College
            </EastCoButton>
            <RoyButton variant="contained" onClick={() => handleOpen(Roy)}>
              Roy O.<br></br>West
            </RoyButton>
            <AsburyButton variant="contained">Asbury</AsburyButton>
          </Box>
          <IonText className={classes.text}>
            <Typography>Seminary St. &darr;</Typography>
          </IonText>
        </Container>
        <MapModal
          isOpen={open}
          title={building.name}
          handleClose={handleClose}
          Building={building}>
          <h1>Welcome to {building.name}</h1>
        </MapModal>
      </IonContent>
      <Navbar></Navbar>
    </IonPage>
  )
}
