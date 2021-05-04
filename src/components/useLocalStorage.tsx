import React, { useEffect, useState } from 'react'

export const UseLocalStorage = (key: string, defaultVal: string) => {
  const stored = localStorage.getItem(key)
  const initialVal = stored ? JSON.parse(stored) : defaultVal
  const [value, setValue] = useState(initialVal)

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

// const UseLocalStorage = (key: string) => {
//   const [currentValue, setCurrentValue] = useState<string | null>(() =>
//     localStorage.getItem(key)
//   )

//   useEffect(() => {
//     const handler = (e: StorageEvent) => {
//       if (e.storageArea === localStorage && e.key === key) {
//         setCurrentValue(e.newValue)
//       }
//     }
//     window.addEventListener('storage', handler)
//     return () => {
//       window.removeEventListener('storage', handler)
//     }
//   })

//   useEffect(() => {
//     localStorage.setItem(key, currentValue as string)
//   }, [key, currentValue])

//   return [currentValue, setCurrentValue] as const
// }
