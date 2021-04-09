import { any, bool } from 'prop-types'
import React, { createContext } from 'react'
import { Building, BuildingProps, Julian } from '../components/Building'

interface checkinProps {
  checkin: boolean
  setCheckin: (x: boolean) => void
}

const CheckinContext = createContext<checkinProps>({
  checkin: false,
  setCheckin: () => {},
})

export { CheckinContext }
