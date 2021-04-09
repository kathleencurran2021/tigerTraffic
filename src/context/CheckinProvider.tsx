import { any } from 'prop-types'
import React, { useState } from 'react'
import { Building, Julian } from '../components/Building'
import { BuildingContext } from './BuildingContext'
import { CheckinContext } from './CheckinContext'

// export const CheckinProvider: React.FC = ({ children }: any) => {
//   const [checkin, setCheckin] = useState(false)
//   const context = {
//     setCheckin: () => {
//       any
//     },
//     checkin: Boolean,
//   }

// return (
//   <CheckinContext.Provider value={context}>
//     {children}
//   </CheckinContext.Provider>
// )
// }
