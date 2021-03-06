/* eslint-disable react/display-name */
import React, { useState } from 'react'
import EditCategories from '../components/Organisms/EditCategories'
import { iCategory } from '../hooks/useCategories/types'

interface EditCategoriesProps {
  categories: iCategory[];
  setCategories: (categories: iCategory[]) => void;
}

export type withEditCategoriesProps<PropsType> = PropsType & EditCategoriesProps

type withEditCategoriesType = <PropsType>(
  Component: React.ComponentType<PropsType & { toggleEditing?: () => void }>
) => React.FC<withEditCategoriesProps<PropsType>>;

const withEditCategories: withEditCategoriesType = (Component) => {
  return (props) => {
    const [editing, setEditing] = useState(false)

    const toggleEditing = () => {
      if (!editing) {
        window.scrollTo(0, 0)
      }
      setEditing((prevValue) => !prevValue)
    }

    const { categories, setCategories, ...rest } = props

    return editing
      ? (
        <EditCategories
          categories={categories}
          setCategories={setCategories}
          toggleEditing={toggleEditing}
        />
      )
      : (
        <Component {...(rest as any)} toggleEditing={toggleEditing}/>
      )
  }
}

export default withEditCategories
