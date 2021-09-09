import React, { useCallback, useState } from 'react'
import { Category, Props as CategoryProps } from '../../components/atoms/Category'
import { APPROVED_STATE, CATEGORY_STATUS, DESELECTED_STATE, iCategory } from './constants'

interface Params {
  initialCategories: iCategory[],
  mode: 'view' | 'reviewing' | 'selecting',
  categoryCustomProps?: CategoryProps
}

export function useCategories ({
  initialCategories,
  mode,
  categoryCustomProps
}: Params) {
  const getInitialCategories = () => {
    return initialCategories.map(category => ({
      ...category,
      status: category.status || APPROVED_STATE
    }))
  }

  const [categories, setCategories] = useState<iCategory[]>(getInitialCategories)

  const toggleState = (category: iCategory) => {
    if (category.status === APPROVED_STATE) {
      category.status = DESELECTED_STATE[mode] as CATEGORY_STATUS
    } else {
      category.status = APPROVED_STATE
    }

    return category
  }

  const handleClick = (name: string) => {
    if (mode === 'view') return

    const newCategories = categories.map(category => {
      return category.name === name
        ? toggleState(category)
        : category
    })

    setCategories(newCategories)
  }

  const renderCategories = useCallback(() => (
    <>
      {
        categories.map(({ status, name }) => (
          <Category
            key={name}
            type={status ?? APPROVED_STATE}
            label={name}
            onClick={() => handleClick(name)}
            {...categoryCustomProps}
          />
        ))
      }
    </>
  ), [categories])

  return { categories, renderCategories }
}
