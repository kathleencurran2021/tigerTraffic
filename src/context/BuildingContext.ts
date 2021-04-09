import React, { createContext } from 'react'
import { Building, BuildingProps, Julian } from '../components/Building'

interface buildContext {
  building: BuildingProps
  setBuilding: (x: BuildingProps) => void
}

const BuildingContext = createContext({
  building: Julian,
  setBuilding: (x: BuildingProps) => void,
})

export { BuildingContext }
