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
import React from 'react'
import { Navbar } from '../components/Navbar'
import { MapModal } from './../components/MapModal'
import { Julian } from './../components/BuildingStyling'

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
  boxRules: {
    height: 540,
    width: 370,
    // position: 'absolute',
  },
  // julian: {
  //   position: 'fixed',
  //   marginLeft: '15rem',
  //   marginTop: '7.5rem',
  //   backgroundColor: ' #ffc72c',
  // },
  lilly: {
    position: 'fixed',
    marginLeft: '15rem',
    marginTop: '3rem',
    backgroundColor: '#63666a',
    color: 'white',
  },
  hoover: {
    position: 'fixed',
    marginLeft: '7rem',
    marginTop: '12rem',
    backgroundColor: '#63666a',
    color: 'white',
  },
  ub: {
    position: 'fixed',
    marginLeft: '1.5rem',
    marginTop: '12rem',
    backgroundColor: '#63666a',
    color: 'white',
  },
  harrison: {
    position: 'fixed',
    marginLeft: '15rem',
    marginTop: '16rem',
    backgroundColor: '#63666a',
    color: 'white',
  },
  gcpa: {
    position: 'fixed',
    marginLeft: '7rem',
    marginTop: '4rem',
    backgroundColor: '#63666a',
    color: 'white',
  },
  eastco: {
    position: 'fixed',
    marginLeft: '5.5rem',
    marginTop: '20rem',
    backgroundColor: '#63666a',
    color: 'white',
  },
  roy: {
    position: 'fixed',
    marginLeft: '19rem',
    marginTop: '20rem',
    backgroundColor: '#63666a',
    color: 'white',
  },
  asbury: {
    position: 'fixed',
    marginLeft: '15rem',
    marginTop: '24rem',
    backgroundColor: '#63666a',
    color: 'white',
  },
}))

export const MapPage = () => {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <IonPage>
      <IonContent>
        <IonText>
          <h1>Map Page</h1>
        </IonText>
        <Container>
          <IonText className={classes.root}>
            <Typography>South Quad &uarr;</Typography>
          </IonText>
          <Box className={classes.boxRules} border={1}>
            <Button className={classes.lilly} variant="contained" disabled>
              Lilly
            </Button>
            <Julian onClick={handleOpen} className="julian">
              Julian
            </Julian>
            <Button className={classes.hoover} variant="contained">
              Hoover
            </Button>
            <Button className={classes.ub} variant="contained" disabled>
              UB
            </Button>
            <Button className={classes.gcpa} variant="contained" disabled>
              GCPA
            </Button>
            <Button className={classes.harrison} variant="contained" disabled>
              Harrison
            </Button>
            <Button className={classes.eastco} variant="contained" disabled>
              {`East \nCollege`}
            </Button>
            <Button className={classes.roy} variant="contained" disabled>
              Roy
            </Button>
            <Button className={classes.asbury} variant="contained" disabled>
              Asbury
            </Button>
          </Box>
          <IonText className={classes.root}>
            <Typography>Seminary St. &darr;</Typography>
          </IonText>
        </Container>
        <MapModal isOpen={open} title="Julian" handleClose={handleClose}>
          <h1>Welcome to Julian</h1>
        </MapModal>
      </IonContent>
      <Navbar></Navbar>
    </IonPage>
  )
}
