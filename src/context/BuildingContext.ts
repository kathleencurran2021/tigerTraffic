import React, { createContext } from 'react'
import { BuildingProps, BuildingState, Julian } from '../components/Building'

const Building: BuildingProps = {
  name: '',
  peopleInside: 0,
  capacity: 0,
  seatsAvailable: 0,
  studySpots: [],
}

const defaultBuildingState: BuildingState = {
  building: Building,
  setBuilding: (): void => {},
}

const BuildingContext = createContext<BuildingState>(defaultBuildingState)

export { BuildingContext }
