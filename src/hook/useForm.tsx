import { useState, ChangeEvent } from 'react'

interface FormValues {
  [key: string]: string
}

const useForm = (initialValues: FormValues) => {
  const [values, setValues] = useState(initialValues)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const resetForm = () => {
    setValues(initialValues)
  }

  return {
    values,
    handleChange,
    resetForm,
  }
}

export default useForm
