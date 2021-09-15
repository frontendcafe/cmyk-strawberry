import React from 'react'
import ReactSelect from 'react-select'
import { setValueType } from '../../../hooks/useForm'

export interface SelectOption {
  value: string | number,
  label: string
}

interface Props {
  name: string;
  options: SelectOption[]
  onChange?: (option: SelectOption | null) => void
  setValue?: setValueType
  value?: SelectOption | null
}

const Select: React.FC<Props> = ({ name, options, onChange, setValue, value }) => {
  const handleChange = (option: SelectOption | null) => {
    if (setValue) {
      setValue(name, option?.value ?? null)
    }

    if (onChange) {
      onChange(option)
    }
  }

  return (
    <ReactSelect
      name={name}
      value={value}
      onChange={handleChange}
      options={options}
      classNamePrefix='react-select'
      className='react-select-container'
    />
  )
}

export default Select
