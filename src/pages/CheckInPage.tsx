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
// import { BigNotif } from '../components/Notifications'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {
  BuildingProps,
  Building,
  Hoover,
  Julian,
  buildingArray,
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
    console.log('What building are we checking into?', Building)
    setCheckin(true)
    setBuilding(Building)
    console.log(building)
    Building.peopleInside += 1
    Building.seatsAvailable -= 1
    setPlaying(isPlaying)
  }

  UseInterval(
    () => {
      setTime(time + 1)
    },
    isPlaying ? delay : null
  )

  useEffect(() => {
    console.log('seats available', building.seatsAvailable)
  }, [building.seatsAvailable])

  useEffect(() => {
    console.log('trying checkin checkinpage', checkin)
    console.log('hb building CHECKIN?', building)
  }, [checkin, building])

  return (
    <CheckinPageContent>
      <h1 className={classes.root}>Check In </h1>
      {/* maps each building and creates an accordion for each  */}
      {buildingArray.map((build, index) => (
        <Accordion
          className={build.name + 'accordion'}
          expanded={expanded == 'panel' + index}
          onChange={handleChange('panel' + index)}>
          <AccordionSummary
            className={'accordion-summmary-' + index}
            expandIcon={<ExpandMoreIcon />}
            aria-controls={'panel' + index + 'bh-content'}
            id={'panel' + index + 'bh-header'}>
            <h1>{build.name}</h1>
          </AccordionSummary>
          <AccordionDetails
            style={{ display: 'block' }}
            className={build.name + '-details'}>
            <Typography>{`${build.name} total capacity: ${build.capacity}\n`}</Typography>
            <br></br>
            <Typography>{`Seats in use: ${build.peopleInside}`}</Typography>
            {/* Checks to see if the spot is full */}
            {build.peopleInside == build.capacity ? (
              <Typography>
                Spot is <b>FULL</b>
              </Typography>
            ) : (
              <Typography>{`Seats Available: ${build.seatsAvailable}`}</Typography>
            )}

            {checkin == true || build.peopleInside == build.capacity ? (
              <Button className={classes.button} variant="contained" disabled>
                Check In
              </Button>
            ) : (
              <Button
                className={classes.button}
                variant="contained"
                onClick={() => handleCheckin(build)}>
                Check In
              </Button>
            )}
          </AccordionDetails>
        </Accordion>
      ))}

      <Navbar />
    </CheckinPageContent>
  )
}
