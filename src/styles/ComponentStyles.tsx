import {
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
  '& .MuiSvgIcon-root': {
    height: '2em',
    fontSize: '2.5rem',
  },
})

export { BottomNav, BottomNavAction }
