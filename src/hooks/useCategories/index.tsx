import React, { useCallback, useMemo, useState } from 'react'
import { Category } from '../../components/atoms/Category'
import { APPROVED_STATE, DESELECTED_STATE } from './constants'
import { CATEGORY_STATUS, iCategory, useCategoriesType } from './types'

/**
 * This hook allows you to use a list of categories, change their state contemplating their diferent possibilities
 * @param config.allCategories
 * @param config.initialSelectedCategories
 * @param config.defaultApproved
 * @param config.mode
 * @param config.categoryCustomProps
 * @returns first element it's the list of categories with their status. Second element it's a function tu render the list of categories
 */
export const useCategories:useCategoriesType = ({
  allCategories,
  initialSelectedCategories,
  defaultApproved = true,
  mode,
  categoryCustomProps
}) => {
  const DEFAULT_STATUS = useMemo(() =>
    defaultApproved
      ? APPROVED_STATE
      : DESELECTED_STATE[mode] as CATEGORY_STATUS
  , [defaultApproved])

  const getInitialCategories = () => {
    return allCategories.map((category) => {
      if (initialSelectedCategories?.some(({ name }) => name === category.name)) {
        category.status = APPROVED_STATE
      } else {
        category.status ||= DEFAULT_STATUS
      }

      return category
    })
  }

  const [categories, setCategories] = useState(getInitialCategories)

  const selectedCategories = useMemo(() =>
    categories.filter(category =>
      category.status === APPROVED_STATE)
      .map(({ name }) => ({
        name
      }))
  , [categories])

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

  const addCategory = (newCategory: iCategory) =>
    setCategories(prevCategories => [...prevCategories, newCategory])

  const renderCategories = useCallback(() => (
    <>
      {
        categories.map(({ status, name }) => (
          <Category
            key={name}
            type={status ?? DEFAULT_STATUS}
            label={name}
            onClick={() => handleClick(name)}
            {...categoryCustomProps}
          />
        ))
      }
    </>
  ), [categories])

  return [categories, renderCategories, selectedCategories, addCategory]
}
