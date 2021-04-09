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
  '&  .MuiAccordionSummary-root': {
    display: 'block',
  },
  '& .MuiAccordionSummary-expandIcon': {
    '&::after': {
      color: 'blue',
    },
  },
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

export { BottomNav, BottomNavAction, AccordionSum, CheckinAccord }
