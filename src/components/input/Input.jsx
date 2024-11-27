import { Input, Textarea } from '@nextui-org/react'
import { errorsValidation } from '../../helpers/validation'

const InputComponent = (props)=> {
  const { errorMessage, isInvalid, color } = errorsValidation({ formErrorsValidationExt: props.formErrorsValidation, name: props.name ?? '' })
  const onClear = () => props.name ? props.onChange({ target: { name: props.name, value: '' } } ) : props.onChange('')
  const handleOnChange = props.name ? props.onChange : (e) => props.onChange(e.target.value)

  return (
    <div className={`${props.classNameComponent}`}>
      {
        props.type === 'textarea' 
          ? (
            <Textarea
              {...props}
              variant={props.variant ?? 'bordered'} 
              size={props.size ?? 'sm'}
              isInvalid={props.isInvalid ?? isInvalid}
              errorMessage={ props.errorMessage ?? errorMessage}
              color={props.color ?? color}
              onClear={onClear}
              onChange={handleOnChange}
            />
            ) 
          : (
              <Input 
                {...props}
                variant={props.variant ?? 'bordered'} 
                size={props.size ?? 'sm'}
                isInvalid={props.isInvalid ?? isInvalid}
                errorMessage={ props.errorMessage ?? errorMessage}
                color={props.color ?? color}
                onClear={onClear}
                min={ props.type === 'number' ? props.min : ''}
                max = { props.type === 'number' ? props.max : ''}
                placeholder={props.type === 'date' ? 'YYYY-MM-DD' : props.placeholder}
                onChange={handleOnChange}
                // name={props.name}
                // label={props.label}
                // placeholder={props.placeholder}
                // isReadOnly={props.isReadOnly}
                // isRequired={props.isRequired}
                // isDisabled={props.isDisabled}
                // description={props.description}
                // defaultValue={props.defaultValue}
                // onChange={props.onChange}
                // startContent={props.startContent}
                // endContent={props.endContent}
                // type={props.type}
                // isClearable={props.isClearable}
                // value={props.value}
              />
            )
      }
    </div>
  )
}

export default InputComponent
