import { IonButton, IonContent } from '@ionic/react'
import {
  Accordion,
  AccordionDetails,
  Button,
  makeStyles,
} from '@material-ui/core'
import { AccordionSummary } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { CheckInPageContent } from './pagesStyling'
import { BuildingProps, Building } from './../components/Building'
import { AccordionSum, CheckinAccord } from '../components/ComponentStyles'
import { CheckinContext } from '../context/CheckinContext'
import { BuildingContext } from '../context/BuildingContext'

interface CheckinProps {
  Building: BuildingProps
}

const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'center',
  },
  boxRules: {
    height: 476,
    width: '100%',
  },
  button: {
    textAlign: 'center',
    backgroundColor: '#ffc72c',
    marginTop: '1rem',
    left: '106px',
  },
}))

export const CheckInPage = () => {
  //may need to set the state as the actual building, so --> useState(Julian.peopleInside)
  const { checkin, setCheckin } = useContext(CheckinContext)
  const { building, setBuilding } = useContext(BuildingContext)
  const classes = useStyles()

  const handleCheckin = () => {
    setCheckin(true)
    console.log()
    setBuilding(building)
    console.log('before people', building.peopleInside)

    building.peopleInside += 1
    console.log('after people', building.peopleInside)
  }

  useEffect(() => {
    console.log('trying checkin checkinpage', checkin)
    console.log('hb building?', building)
  }, [checkin, building])

  return (
    <CheckInPageContent>
      <h1 style={{ textAlign: 'center' }} className="checkin-header">
        Check In {Building.name}
      </h1>
      <CheckinAccord className="main-accordion">
        <AccordionSum
          expandIcon={`+`}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{`${building.name} total capacity: ${building.capacity}`}</Typography>
          <Typography>{`Seats in use: ${building.peopleInside}`}</Typography>
          <Typography>{`Seats Available: ${building.seatsAvailable}`}</Typography>
          {checkin == true ? (
            <Button className={classes.button} disabled>
              Check In
            </Button>
          ) : (
            <Button className={classes.button} onClick={handleCheckin}>
              Check In
            </Button>
          )}
        </AccordionSum>
        {/* <AccordionDetails>
          <AccordionSum
            expandIcon={`+`}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Prevo</Typography>
          </AccordionSum>
        </AccordionDetails> */}
        {/* <AccordionDetails>
          <AccordionSum
            expandIcon={`+`}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>First Floor</Typography>
          </AccordionSum>
        </AccordionDetails> */}
      </CheckinAccord>

      <Navbar />
    </CheckInPageContent>
  )
}
