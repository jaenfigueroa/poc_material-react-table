import { useState, useEffect } from 'react'

function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T) => void] {
  // Obtener el valor almacenado en el localStorage o usar el valor inicial
  const storedValue = localStorage.getItem(key)
  const initial = storedValue ? JSON.parse(storedValue) : initialValue

  // Crear un estado para almacenar el valor actual
  const [value, setValue] = useState<T>(initial)

  // Actualizar el localStorage cuando cambie el valor
  useEffect(() => {
    if (value === null) {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(value))
    }
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage
