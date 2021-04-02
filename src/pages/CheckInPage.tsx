import { IonContent } from '@ionic/react'
import { Accordion, AccordionDetails } from '@material-ui/core'
import { AccordionSummary } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { CheckInPageContent } from './pagesStyling'
import { BuildingProps, Building } from './../components/Building'

interface ModalProps {
  Building: BuildingProps
}

export const CheckInPage = () => {
  //may need to set the state as the actual building, so --> useState(Julian.peopleInside)
  const [peopleInsideCount, setPeopleInsideCount] = useState(10)
  // const [building, setBuilding] = useState()

  return (
    <CheckInPageContent>
      <h1 className="title">Check In</h1>
      <Accordion>
        <AccordionSummary
          expandIcon={`^`}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{`Build`}</Typography>
          <Typography>{'capacity'}</Typography>
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
