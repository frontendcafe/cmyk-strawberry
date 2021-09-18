import React, { useMemo } from 'react'
import { useCategories } from '../../../hooks/useCategories'
import { iCategory } from '../../../hooks/useCategories/types'
import { useForm } from '../../../hooks/useForm'
import Card from '../../atoms/Card'
import Input from '../../atoms/input'
import Layout from '../../templates/Layout'
import { EDIT_CATEGORY_FIELDS, FOOTER_BUTTONS, MAX_CATEGORIES, PRESELECTED_CATEGORIES } from './constants'

import styles from './EditCategories.module.scss'

interface Props {
  categories: iCategory[];
  setCategories: (categories: iCategory[]) => void;
  toggleEditing: () => void;
}

function EditCategories ({ categories, setCategories, toggleEditing }: Props) {
  const [preselectedCategories, renderPreselected, selected] = useCategories({
    allCategories: PRESELECTED_CATEGORIES,
    initialSelectedCategories: categories,
    defaultApproved: false,
    mode: 'selecting'
  })

  const originalCategories = useMemo(() =>
    categories.filter(
      category =>
        !preselectedCategories.some(({ name }) => name === category.name)
    )
  , [categories])

  const [, renderAdded, newCategories, addCategory] = useCategories({
    allCategories: originalCategories,
    mode: 'adding'
  })

  const allSelected = useMemo(() => [...selected, ...newCategories], [selected, newCategories])

  const [addingCategory, handleChange, reset] = useForm({ name: '' })

  const handleAddCategory = () => {
    const { name } = addingCategory

    if (name &&
      !allSelected.some(category => category.name === name) &&
      allSelected.length < MAX_CATEGORIES
    ) {
      addCategory({ name })
      reset()
    }
  }

  const handleEndEditing = () => {
    setCategories(allSelected)
    toggleEditing()
  }

  return (
    <Layout
      title="Edicción de categorías"
      subTitle={`${allSelected.length} de 12 categorías posibles`}
      onClose={handleEndEditing}
      buttons={FOOTER_BUTTONS(handleEndEditing)}
    >
      <div className={styles.container}>
        <Card>
          <h3>Preseleccionadas</h3>
          <div className={styles.categories}>
            {renderPreselected()}
          </div>
        </Card>
        <Card>
          <h3>Agregar categoría</h3>
          <span>Incorporación de nuevas categorías</span>
          <Input
            size="medium-size"
            name={EDIT_CATEGORY_FIELDS.NAME}
            value={addingCategory.name}
            buttonHandler={handleAddCategory}
            onChange={handleChange}
            addButton
          />
          <div className={styles.categories}>
            {renderAdded()}
          </div>
        </Card>
      </div>
    </Layout>
  )
}

export default EditCategories
