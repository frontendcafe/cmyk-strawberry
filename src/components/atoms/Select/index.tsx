import React from 'react'
import ReactSelect from 'react-select'

export interface SelectOption {
  value: string,
  label: string
}

interface Props {
  options: SelectOption[]
}

const Select: React.FC<Props> = ({ options }) => (
  <ReactSelect options={options} classNamePrefix='react-select' className='react-select-container'/>
)

export default Select
