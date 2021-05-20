import React from 'react'

export interface BuildingProps {
  name: string
  peopleInside: number
  capacity: number
  seatsAvailable: number
  studySpots: string[]
}

const Building: BuildingProps = {
  name: '',
  peopleInside: 0,
  capacity: 0,
  seatsAvailable: 0,
  studySpots: [],
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
  studySpots: ['Prevo', 'First Floor', 'Second Floor'],
}

let Hoover: BuildingProps = {
  name: 'Hoover',
  peopleInside: 100,
  capacity: 230,
  seatsAvailable: 130,
  studySpots: [],
}

let GCPA: BuildingProps = {
  name: 'GCPA',
  capacity: 97,
  peopleInside: 41,
  seatsAvailable: 97 - 41,
  studySpots: ['First Floor', 'GreatHall'],
}

let Roy: BuildingProps = {
  name: 'Roy',
  capacity: 290,
  peopleInside: 172,
  seatsAvailable: 290 - 172,
  studySpots: ['Basement', 'First Floor', 'Second Floor', 'Third Floor'],
}

let Harrison: BuildingProps = {
  name: 'Harrison',
  capacity: 51,
  peopleInside: 2,
  seatsAvailable: 49,
  studySpots: ['First Floor', 'Second Floor', 'Third Floor'],
}

let Asbury: BuildingProps = {
  name: 'Asbury',
  capacity: 51,
  peopleInside: 2,
  seatsAvailable: 49,
  studySpots: ['First Floor', 'Second Floor', 'Third Floor'],
}

let EastCo: BuildingProps = {
  name: 'East College',
  capacity: 51,
  peopleInside: 2,
  seatsAvailable: 49,
  studySpots: ['First Floor', 'Second Floor', 'Third Floor'],
}
let PCCM: BuildingProps = {
  name: 'PCCM',
  capacity: 51,
  peopleInside: 2,
  seatsAvailable: 49,
  studySpots: ['First Floor', 'Second Floor', 'Third Floor'],
}

const buildingArray = [
  Julian,
  Hoover,
  Roy,
  GCPA,
  Harrison,
  Asbury,
  EastCo,
  PCCM,
]

export {
  Building,
  Julian,
  Hoover,
  GCPA,
  Harrison,
  Roy,
  Asbury,
  EastCo,
  PCCM,
  buildingArray,
}
