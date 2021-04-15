import React, { useContext, useEffect, useRef, useState } from 'react'
import { TimeContext } from '../context/TimeContext'

export function UseInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    if (delay == null) {
      return
    }
    const id = setInterval(() => savedCallback.current(), delay)
    return () => clearInterval(id)
  }, [delay])
}

// function Stopwatch() {
//   const { time, setTime } = useContext(TimeContext)
//   let [count, setCount] = useState(0)
//   let delay = 1000

//   setInterval(function () {
//     setTime(time + 1)
//   }, 1000)

// }

// function useInterval(callback: any, delay: number) {
//   const savedCallback = useRef();

//   useEffect(() => {
//     savedCallback.current = callback;
//   }, [callback]);

//   useEffect(() => {
//     function tick() {
//       savedCallback.current();
//     }
//     if (delay !== null) {
//       let id = setInterval(tick, delay);
//       return () => clearInterval(id)
//     }
//   }, [delay])
// }
