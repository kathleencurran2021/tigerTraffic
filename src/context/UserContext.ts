import React, { createContext } from 'react'
import { Building, BuildingProps, Julian } from '../components/Building'
import { UserProps, UserState } from '../components/User'

const DefaultUser: UserProps = {
  isCheckedIn: false,
  email: '',
  // howLongCheckedIn: 0,
  // timesCheckedIn: [],
}

const defaultUserState: UserState = {
  user: DefaultUser,
  setUser: () => {},
}

const UserContext = createContext<UserState>(defaultUserState)

export { UserContext }
