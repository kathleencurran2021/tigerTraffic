import React, { createContext } from 'react'
import { BuildingProps, BuildingState, Building } from '../components/Building'

// creates Building context
const defaultBuildingState: BuildingState = {
  building: Building,
  setBuilding: (): void => {},
}

const BuildingContext = createContext<BuildingState>(defaultBuildingState)

export { BuildingContext }
