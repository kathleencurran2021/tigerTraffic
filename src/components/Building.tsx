import { number } from 'prop-types'
import React from 'react'

//static: name, capacity, studySpaces
//dynamic: peopleInside, canCheckIn, seatsAvailable

interface SomeStudySpot {
  name: string
  peopleInside: number
  capacity: number
  canCheckIn: boolean
}

export interface BuildingProps {
  name: string
  peopleInside: number
  capacity: number
  seatsAvailable: number
  studySpaces: number
  // studySpot: {
  //   name: string
  //   peopleInside: number
  //   capacity: number
  //   canCheckIn: boolean
  // }
}
const Building: BuildingProps = {
  name: '',
  peopleInside: 0,
  capacity: 0,
  seatsAvailable: 0,
  studySpaces: 0,
  // studySpot: SomeStudySpot,
}

let Julian: BuildingProps = {
  name: 'Julian',
  peopleInside: 34,
  capacity: 80,
  seatsAvailable: 46,
  studySpaces: 4,
  // studySpot: {
  //   name: 'Prevo',
  //   peopleInside: 3,
  //   capacity: 15,
  //   canCheckIn: true,
  // },
}

let Hoover: BuildingProps = {
  name: 'Hoover',
  peopleInside: 100,
  capacity: 230,
  seatsAvailable: 130,
  studySpaces: 4,
  // studySpot: {
  //   name: 'Prevo',
  //   peopleInside: 3,
  //   capacity: 15,
  //   canCheckIn: true,
  // },
}

export { Building, Julian }
