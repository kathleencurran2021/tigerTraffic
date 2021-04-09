import { IonContent, IonPage, IonText } from '@ionic/react'
import {
  Box,
  Button,
  Container,
  Dialog,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core'
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
} from './../components/BuildingStyling'
import {
  Building,
  BuildingProps,
  Hoover,
  Julian,
} from './../components/Building'
import { BuildingContext } from '../context/BuildingContext'
import { CheckinContext } from '../context/CheckinContext'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
  boxRules: {
    height: 476,
    width: '100%',
  },
}))

export const MapPage = () => {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)
  const [building, setBuilding] = useState(Building)

  // const { isCheckedIn, whatBuilding } = useContext(CheckinContext)
  // const { setCheckedIn, isCheckedIn } = useContext(CheckinContext)
  // const { isCheckedIn, setCheckedIn } = useContext(CheckinContext)
  // const [building] = useState(whatBuilding)
  // const whatBuilding = useContext(CheckinContext)
  // const whatBuilding = useContext(BuildingContext)
  // const { building, setBuilding } = useContext(BuildingContext)
  // const { checkin, setCheckin } = useContext(CheckinContext)

  // useEffect(() => {
  //   console.log('trying checkin', building)
  // }, [building])

  const handleOpen = (someBuilding: BuildingProps) => {
    setOpen(true)
    console.log('open is true')
    setBuilding(someBuilding)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <IonPage>
      <IonContent>
        <IonText>
          <h1>
            <b>Study Map</b>
          </h1>
        </IonText>
        <Container>
          <IonText className={classes.root}>
            <Typography>South Quad &uarr;</Typography>
          </IonText>
          <Box className={classes.boxRules} border={1}>
            <LillyButton variant="contained" disabled>
              Lilly
            </LillyButton>
            <PCCMButton variant="contained" disabled>
              PCCM
            </PCCMButton>
            <JulianButton
              variant="contained"
              onClick={() => handleOpen(Julian)}
            >
              Julian
            </JulianButton>
            <UBButton variant="contained" disabled>
              UB
            </UBButton>
            <HooverButton
              variant="contained"
              onClick={() => handleOpen(Hoover)}
            >
              Hoover
            </HooverButton>
            <GCPAButton variant="contained" disabled>
              GCPA
            </GCPAButton>
            <HarrisonButton variant="contained" disabled>
              Harrison
            </HarrisonButton>
            <EastCoButton variant="contained" disabled>
              East<br></br>College
            </EastCoButton>
            <RoyButton variant="contained" disabled>
              Roy O.<br></br>West
            </RoyButton>
            <AsburyButton variant="contained" disabled>
              Asbury
            </AsburyButton>
          </Box>
          <IonText className={classes.root}>
            <Typography>Seminary St. &darr;</Typography>
          </IonText>
        </Container>
        <MapModal
          isOpen={open}
          title={building.name}
          handleClose={handleClose}
          Building={building}
        >
          <h1>Welcome to {building.name}</h1>
        </MapModal>
      </IonContent>
      <Navbar></Navbar>
    </IonPage>
  )
}
