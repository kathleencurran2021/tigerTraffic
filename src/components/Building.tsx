import React from 'react'

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

export interface BuildingState {
  building: BuildingProps
  setBuilding: React.Dispatch<React.SetStateAction<BuildingProps>>
}

let Julian: BuildingProps = {
  name: 'Julian',
  peopleInside: 79,
  capacity: 80,
  seatsAvailable: 1,
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
  studySpaces: 0,
}

let GCPA: BuildingProps = {
  name: 'GCPA',
  capacity: 97,
  peopleInside: 41,
  seatsAvailable: 97 - 41,
  studySpaces: 2,
}

let Roy: BuildingProps = {
  name: 'Roy',
  capacity: 290,
  peopleInside: 172,
  seatsAvailable: 290 - 172,
  studySpaces: 4,
}

let Harrison: BuildingProps = {
  name: 'Harrison',
  capacity: 51,
  peopleInside: 2,
  seatsAvailable: 49,
  studySpaces: 3,
}

const buildingArray = [Julian, Hoover, Roy, GCPA]

export { Building, Julian, Hoover, GCPA, Roy, buildingArray }
