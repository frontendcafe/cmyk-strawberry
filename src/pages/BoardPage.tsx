import React from 'react'
import { Button } from '../components/atoms/Button'
import CategoryInput from '../components/atoms/CategoryInput'
import { useForm } from '../hooks/useForm'
import Layout from '../components/templates/Layout'
import { paths } from '../routes'

export interface Props {
  categories: Category[]
}

export interface Category {
  id: number,
  title: string,
  value: string
}

// TODO: Delete mock
const categoriesMock: Category[] = [
  {
    id: 1,
    title: 'Comidas',
    value: ''
  },
  {
    id: 2,
    title: 'Países',
    value: ''
  },
  {
    id: 3,
    title: 'Marcas',
    value: ''
  },
  {
    id: 4,
    title: 'Cosas',
    value: ''
  },
  {
    id: 5,
    title: 'Flutas/Verduras',
    value: ''
  }
]

const BoardPage: React.FC<Props> = ({ categories = categoriesMock }) => {
  const [formValues, handleInputChange] = useForm({})

  return (
    <Layout
      title=""
      subTitle=""
      closePath={paths.HOME}
      letter="M" // TODO: Get current letter
    >
      <Button
        type='button'
        onClick={() => console.log(formValues)}
        theme='primary'
        size='large'
      >
        ¡BASTA!
      </Button>

      { categories.map(category => (
        <CategoryInput
          key={category.id}
          title={category.title}
          value={formValues[category.title] || ''}
          handleInputChange={handleInputChange}
        />
      ))}
    </Layout>
  )
}

export default BoardPage
