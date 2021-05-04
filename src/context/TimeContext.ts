import React, { createContext } from 'react'

export interface timeProps {
  time: number
  setTime: (x: number) => void
}

const TimeContext = createContext<timeProps>({
  time: 0,
  setTime: () => {},
})

export { TimeContext }
