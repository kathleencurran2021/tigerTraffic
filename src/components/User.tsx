import React from 'react'

export interface UserProps {
  isCheckedIn: boolean
  email: string
}

const DefaultUser: UserProps = {
  isCheckedIn: false,
  email: '',
}

export interface UserState {
  user: UserProps
  setUser: React.Dispatch<React.SetStateAction<UserProps>>
}

export { DefaultUser }
