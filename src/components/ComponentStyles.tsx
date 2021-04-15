import {
  Accordion,
  AccordionSummary,
  BottomNavigation,
  BottomNavigationAction,
  styled,
} from '@material-ui/core'
import React from 'react'

const BottomNav = styled(BottomNavigation)({
  backgroundColor: '#ffc72c',
  color: 'black',
  fontSize: '9rem',
  position: 'fixed',
  bottom: 0,
  width: '100%',
})

const BottomNavAction = styled(BottomNavigationAction)({
  color: 'black',
  '& span': {
    fontSize: '1.7rem',
    color: 'black',
  },
})

const CheckinAccord = styled(Accordion)({
  padding: '2px 12px 2px 12px',
  display: 'block',
  '& .first-accordion-summary': {
    display: 'block',
    textAlign: 'center',
    '& .MuiAccordionSummary-expandIcon': {
      backgroundColor: 'pink',
      textAlign: 'right',
      '& .MuiIconButton-label': {
        textAlign: 'end',
        float: 'right',
      },
      // '&::after': {
      //   color: 'blue',
      // },
    },
  },
  '& .first-acc-details': {
    backgroundColor: 'pink',
  },
  // '&  .MuiAccordionSummary-root': {
  //   display: 'block',
  //   textAlign: 'center',
  //   '& .MuiAccordionSummary-expandIcon': {
  //     '&::after': {
  //       color: 'blue',
  //     },
  //   },
  // },
})

const AccordionSum = styled(AccordionSummary)({
  display: 'block',
  '& .MuiAccordionSummary-content': {
    marginTop: '1rem',
    marginBottom: 0,
    display: 'block',
  },
  '& p': {
    width: '100%',
  },
  // '& .MuiAccordionSummary-expandIcon': {
  //   color: 'red',
  //   padding: '2px 0px 8px 0px',
  //   textAlign: 'right',
  //   marginLeft: '90%',
  // },
})

const CheckInPageContent = styled('div')({
  fontFamily: 'serif',

  '& .title': {
    textAlign: 'center',
  },
})

export {
  BottomNav,
  CheckInPageContent,
  BottomNavAction,
  AccordionSum,
  CheckinAccord,
}
