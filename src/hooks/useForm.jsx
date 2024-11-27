'use client'

import { useState, useMemo, useEffect, useCallback } from 'react'
import { deleteFalsys } from '../helpers/transformObjects'


export const useForm = (
  initialForm = {},
  formValidations = {}
) => {
  const [formState, setFormState] = useState(initialForm)
  const [formValidation, setFormValidation] = useState({})

  const onInputChange = (event) => {
    const { name, value } = event.target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const onInputChangeNoName = (value) => {
    setFormState({
      ...formState,
      ...value
    })
  }

  const formatearFormState = () => {
    setFormState(initialForm)
  }

  const formErrorsValidation = useMemo(
    () => deleteFalsys(formValidation),
    [formValidation]
  )

  const validations = useCallback(() => {
    const messagesErrorToValidations = {}
    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMesagge] = formValidations[formField]
      messagesErrorToValidations[formField] = fn(formState[formField] ?? '')
        ? null
        : errorMesagge
    }
    setFormValidation(messagesErrorToValidations)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formState])
  
  useEffect(() => {
    setFormState(initialForm)
  }, [initialForm])

  useEffect(() => {
    validations()
  }, [validations])

  return {
    formState,
    onInputChange,
    formErrorsValidation,
    formatearFormState,
    onInputChangeNoName
  }
}
