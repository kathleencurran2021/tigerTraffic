import {
  Accordion,
  AccordionSummary,
  BottomNavigation,
  BottomNavigationAction,
  styled,
} from '@material-ui/core'
import React from 'react'

const CheckinPageContent = styled('div')({
  overflow: 'scroll',
  maxHeight: '100%',
  '& .Julian-details': {
    display: 'block',
  },
  '& .Hoover-details ': {
    display: 'block',
  },
})

export { CheckinPageContent }
