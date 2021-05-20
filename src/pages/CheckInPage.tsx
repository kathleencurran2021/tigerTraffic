import {
  Accordion,
  AccordionDetails,
  Button,
  Container,
  makeStyles,
} from '@material-ui/core'
import { AccordionSummary } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import React, { useContext, useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { BuildingProps, buildingArray, Hoover } from './../components/Building'
import { CheckinPageContent } from '../styles/CheckinPageStyles'
import { CheckinContext } from '../context/CheckinContext'
import { BuildingContext } from '../context/BuildingContext'
import { TimeContext } from '../context/TimeContext'
import { UseInterval } from '../components/Stopwatch'

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    marginBottom: '5rem',
    '@media (min-height: 800px)': {
      marginTop: '3.6rem',
    },
  },
  page: {
    marginBottom: '4rem',
    maxHeight: '100%',
    overflow: 'auto',
  },
  text: {
    textAlign: 'center',
    width: '100%',
    height: '100%',
    overflow: 'auto',
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
    setPlaying(true)
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

  useEffect(() => {
    if (building == Hoover && time == 5) {
      setPlaying(false)
    }
  })

  return (
    // <Container className={classes.root}>
    <CheckinPageContent className={classes.page}>
      <Container className={classes.root}>
        <h1 className={classes.text}>Check In </h1>

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
      </Container>
      <Navbar />
    </CheckinPageContent>
    // </Container>
  )
}
