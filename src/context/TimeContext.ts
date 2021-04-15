import React, { createContext } from 'react'

export interface timeProps {
  time: number
  setTime: (x: number) => void
}

// export const OGTime = {
//   time: 0,
//   setTime: () => {},
// }

const TimeContext = createContext<timeProps>({
  time: 0,
  setTime: () => {},
})

export { TimeContext }
