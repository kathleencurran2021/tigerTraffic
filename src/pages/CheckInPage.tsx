import { IonButton, IonContent } from '@ionic/react'
import {
  Accordion,
  AccordionDetails,
  Button,
  makeStyles,
} from '@material-ui/core'
import { AccordionSummary } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { CheckInPageContent } from './pagesStyling'
import { BuildingProps, Building } from './../components/Building'
import { AccordionSum, CheckinAccord } from '../components/ComponentStyles'

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
    left: '143px',
  },
}))

export const CheckInPage: React.FC<CheckinProps> = ({ Building }) => {
  //may need to set the state as the actual building, so --> useState(Julian.peopleInside)
  const [peopleInsideCount, setPeopleInsideCount] = useState(10)
  // const [building, setBuilding] = useState()
  const classes = useStyles()

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
          {/* <Typography>{`${Building.name} Study Spaces`}</Typography> */}
          <Typography>{`${Building.name} total capacity: ${Building.capacity}`}</Typography>
          <Typography>{`Seats in use: ${Building.peopleInside}`}</Typography>
          <Typography>{`Seats Available: ${Building.seatsAvailable}`}</Typography>
        </AccordionSum>
        <AccordionDetails>
          <AccordionSum
            expandIcon={`+`}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Prevo</Typography>
          </AccordionSum>
        </AccordionDetails>
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
      <Button className={classes.button}>Check In</Button>
      <Navbar />
    </CheckInPageContent>
  )
}
