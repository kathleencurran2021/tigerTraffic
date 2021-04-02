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
import React, { useState } from 'react'
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
import { Building, BuildingProps, Julian } from './../components/Building'

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

  const handleOpen = () => {
    setOpen(true)
    setBuilding(Julian)
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
            <JulianButton variant="contained" onClick={handleOpen}>
              Julian
            </JulianButton>
            <UBButton variant="contained" disabled>
              UB
            </UBButton>
            <HooverButton variant="contained" disabled>
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
