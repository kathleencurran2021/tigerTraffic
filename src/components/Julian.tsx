import React from 'react'
import Building from './Building'

export interface Julian extends Building {
  peopleInside: 23
  capacity: 89
  // seatsAvailable: peopleInside - capacity
  studySpaces: 4
}

// export const Julian = (props: Building) => {}
