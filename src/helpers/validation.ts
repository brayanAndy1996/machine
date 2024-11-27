
export const errorsValidation = ({
  formErrorsValidationExt,
  name
}) => {
  const formErrorsValidation = formErrorsValidationExt ?? {}
  const isInvalid = Boolean(formErrorsValidation[name])
  const errorMessage = isInvalid && formErrorsValidation[name]
  const color = isInvalid
    ? 'danger'
    : formErrorsValidationExt === undefined
      ? 'primary'
      : 'success'
  return { isInvalid, errorMessage, color }
}
