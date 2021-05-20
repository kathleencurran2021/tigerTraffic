import { createContext } from 'react'
import { UserProps, UserState } from '../components/User'

// creates User Context
const DefaultUser: UserProps = {
  isCheckedIn: false,
  email: '',
}

const defaultUserState: UserState = {
  user: DefaultUser,
  setUser: () => {},
}

const UserContext = createContext<UserState>(defaultUserState)

export { UserContext }
