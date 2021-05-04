import { IonButton, IonLabel, IonList, IonNav, IonToolbar } from '@ionic/react'
import { BottomNavigationAction } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import MapIcon from '@material-ui/icons/Map'
import PersonIcon from '@material-ui/icons/Person'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { BottomNav, BottomNavAction } from '../styles/ComponentStyles'

const Navbar = () => {
  const [value, setValue] = useState('/')
  const history = useHistory()

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    history.push(newValue)
    setValue(newValue)
  }

  return (
    <BottomNav value={value} onChange={handleChange} showLabels>
      <BottomNavAction icon={<HomeIcon />} value="/homepage"></BottomNavAction>
      <BottomNavAction icon={<MapIcon />} value="/map"></BottomNavAction>
      <BottomNavAction icon={<PersonIcon />} value="/user"></BottomNavAction>
      {/* <BottomNavAction label="Home" value="/homepage"></BottomNavAction>
      <BottomNavAction label="Map" value="/map"></BottomNavAction>
      <BottomNavAction label="User" value="/user"></BottomNavAction> */}
    </BottomNav>
  )
}

export { Navbar }
