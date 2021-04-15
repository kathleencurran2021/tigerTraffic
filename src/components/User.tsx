import React from 'react'

export interface UserProps {
  isCheckedIn: boolean
  email: string
  // howLongCheckedIn: number
  // timesCheckedIn: []
}

const DefaultUser: UserProps = {
  isCheckedIn: false,
  email: '',
  // howLongCheckedIn: 0,
  // timesCheckedIn: [],
}

export interface UserState {
  user: UserProps
  setUser: React.Dispatch<React.SetStateAction<UserProps>>
}

export { DefaultUser }
