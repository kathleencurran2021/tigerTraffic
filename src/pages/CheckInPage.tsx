import { IonContent } from '@ionic/react'
import { Accordion, AccordionDetails } from '@material-ui/core'
import { AccordionSummary } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import React from 'react'
import { Navbar } from '../components/Navbar'
import { CheckInPageContent } from './pagesStyling'
import { BuildingProps } from './../components/Building'

let Julian: BuildingProps = {
  peopleInside: 34,
  capacity: 80,
  seatsAvailable: 46,
  studySpaces: 4,
  studySpot: {
    name: 'Prevo',
    peopleInside: 3,
    capacity: 15,
    canCheckIn: true,
  },
}

export const CheckInPage = (Julian: BuildingProps) => {
  return (
    <CheckInPageContent>
      <h1 className="title">Check In</h1>
      <Accordion>
        <AccordionSummary
          expandIcon={`^`}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{`Julian Study Areas`}</Typography>
          <Typography>{Julian.capacity}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionSummary
            expandIcon={`^`}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Prevo</Typography>
          </AccordionSummary>
        </AccordionDetails>
        <AccordionDetails>
          <AccordionSummary
            expandIcon={`^`}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>First Floor</Typography>
          </AccordionSummary>
        </AccordionDetails>
      </Accordion>
      <Navbar />
    </CheckInPageContent>
  )
}
