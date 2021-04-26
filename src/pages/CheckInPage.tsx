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

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {
  BuildingProps,
  Building,
  Hoover,
  Julian,
} from './../components/Building'
import { CheckinPageContent } from '../styles/CheckinPageStyles'
import { CheckinContext } from '../context/CheckinContext'
import { BuildingContext } from '../context/BuildingContext'
import { TimeContext } from '../context/TimeContext'
import { UseInterval } from '../components/Stopwatch'

interface CheckinProps {
  Building: BuildingProps
}

const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'center',
    width: '100%',
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
  const { checkin, setCheckin } = useContext(CheckinContext)
  const { building, setBuilding } = useContext(BuildingContext)
  const { time, setTime } = useContext(TimeContext)
  const [isPlaying, setPlaying] = useState<boolean>(false)

  const [expanded, setExpanded] = React.useState<string | false>(false)

  const classes = useStyles()
  const delay = 1000

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false)
  }

  const handleCheckin = (Building: BuildingProps) => {
    setCheckin(true)
    console.log()
    setBuilding(Building)
    building.peopleInside += 1
    building.seatsAvailable -= 1
    setPlaying(!isPlaying)
  }

  const handleCheckout = () => {
    setCheckin(false)
    setBuilding(Building)
    building.peopleInside -= 1
    building.seatsAvailable += 1
    setPlaying(false)
    setTime(0)
  }

  UseInterval(
    () => {
      setTime(time + 1)
    },
    isPlaying ? delay : null
  )

  useEffect(() => {
    console.log('trying checkin checkinpage', checkin)
    console.log('hb building CHECKIN?', building)
  }, [checkin, building])

  return (
    <CheckinPageContent>
      <h1 className={classes.root}>Check In </h1>
      <Accordion
        className="Julian-accordion"
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}>
        <AccordionSummary
          className="first-accordion-summary"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header">
          <h1>Julian</h1>
        </AccordionSummary>

        {/* I know theres a way to loop this so I dont have to do it so many times */}

        <AccordionDetails className="Julian-details">
          <Typography>{`${Julian.name} total capacity: ${Julian.capacity}`}</Typography>
          <Typography>{`Seats in use: ${Julian.peopleInside}`}</Typography>

          {/* if the people insde is equal to the building's capacity, then display FULL instead of seat available */}
          {Julian.peopleInside == Julian.capacity ? (
            <Typography>
              Spot is <b>FULL</b>
            </Typography>
          ) : (
            <Typography>{`Seats Available: ${Julian.seatsAvailable}`}</Typography>
          )}
          {/* disables button if checked in */}
          {checkin == true || Julian.peopleInside == Julian.capacity ? (
            <Button className={classes.button} disabled>
              Check In
            </Button>
          ) : (
            <Button
              className={classes.button}
              onClick={() => handleCheckin(Julian)}>
              Check In
            </Button>
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="Julian-accordion"
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}>
        <AccordionSummary
          className="second-accordion-summary"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header">
          <h1>Hoover</h1>
        </AccordionSummary>

        <AccordionDetails className="Hoover-details">
          <Typography>{`${Hoover.name} total capacity: ${Hoover.capacity}`}</Typography>
          <Typography>{`Seats in use: ${Hoover.peopleInside}`}</Typography>

          {/* if the people insde is equal to the building's capacity, then display FULL instead of seat available */}
          {Hoover.peopleInside == Hoover.capacity ? (
            <Typography>
              Spot is <b>FULL</b>
            </Typography>
          ) : (
            <Typography>{`Seats Available: ${Hoover.seatsAvailable}`}</Typography>
          )}
          {/* disables button if checked in */}
          {checkin == true ? (
            <Button className={classes.button} disabled>
              Check In
            </Button>
          ) : (
            <Button
              className={classes.button}
              onClick={() => handleCheckin(Hoover)}>
              Check In
            </Button>
          )}
        </AccordionDetails>
      </Accordion>
      {/* <Button className={classes.button} disabled onClick={handleCheckout}>
        Check Out
      </Button> */}

      <Navbar />
    </CheckinPageContent>
  )
}
