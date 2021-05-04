import { eventNames } from 'process'
// import React, { useEffect, useRef } from 'react'

// interface EventHandler<T extends Event = Event> {
//   (e: T): void
// }

// interface WindowEventHook {
//   <K extends keyof WindowEventMap>(
//     eventName: K,
//     handler: EventHandler<WindowEventMap[K]>
//   ): void
// }

// const useWindowEvent: WindowEventHook = (eventName, handler) => {
//   const handlerRef = useRef<typeof handler>()

//   useEffect(() => {
//     handlerRef.current = handler
//   }, [handler])

//   useEffect(() => {
//     const eventListener: typeof handler = (event) => handlerRef.current(event)
//     window.addEventListener(eventName, eventListener)

//     return () => {
//       window.removeEventListener(eventName, eventListener)
//     }
//   }, [eventName])
// }
