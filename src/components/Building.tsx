import { number } from 'prop-types'
import React from 'react'

interface SomeStudySpot {
  name: string
  peopleInside: number
  capacity: number
  canCheckIn: boolean
}

interface Building {
  peopleInside: number
  capacity: number
  seatsAvailable: number
  studySpaces: number
  studySpot: SomeStudySpot
}

// let JulianProps: Building = {
//   peopleInside: 34,
//   capacity: 80,
//   seatsAvailable: 46,
//   studySpaces: 4,
//   studySpot: {
//     name: 'Prevo',
//     peopleInside: 3,
//     capacity: 15,
//     canCheckIn: true,
//   },
// }

interface BuildingProps {
  peopleInside: number
  capacity: number
  seatsAvailable: number
  studySpaces: number
  studySpot: {
    name: string
    peopleInside: number
    capacity: number
    canCheckIn: boolean
  }
}

export type { BuildingProps }
