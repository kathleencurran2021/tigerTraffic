import { Build } from 'ionicons/dist/types/stencil-public-runtime'
import React, { useState } from 'react'
import { Building, Julian } from '../components/Building'
import { BuildingContext } from './BuildingContext'

// export const CheckContextProvider: React.FC = ({ children }) => {
//   const [isCheckedIn, setCheckedIn] = useState(false)
//   const [whatBuilding, setBuilding] = useState(Building)

//   return (
//     <CheckinContext.Provider value={{ isCheckedIn, whatBuilding }}>
//       {children}
//     </CheckinContext.Provider>
//   )
// }

// const BuildingProvider: React.FC = ({ children }) => {
//   const [building, setBuilding] = useState('')

//   return (
//     <BuildingContext.Provider value={'context'}>
//       {children}
//     </BuildingContext.Provider>
//   )
// }
