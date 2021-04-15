import React, { createContext } from 'react'

interface checkinProps {
  checkin: boolean
  setCheckin: (x: boolean) => void
}

const CheckinContext = createContext<checkinProps>({
  checkin: false,
  setCheckin: () => {},
})

export { CheckinContext }
