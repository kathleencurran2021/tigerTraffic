import React from 'react'
import { BuildingProps } from './Building'

const Julian: React.FC<BuildingProps> = (BuildingProps) => {
  return <h1>{BuildingProps.peopleInside}</h1>
}
