import { useEffect, useState } from 'react'

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem(key)

    if (!savedValue) {
      return initialValue
    }

    try {
      return JSON.parse(savedValue)
    } catch (error) {
      console.error(error)

      return initialValue
    }
  })

  useEffect(() => {
    try {
        localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
        console.error(error)
    }
  }, [key, value])

  return [value, setValue]
}
