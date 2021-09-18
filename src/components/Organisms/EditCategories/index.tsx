import React, { useMemo } from 'react'
import { useCategories } from '../../../hooks/useCategories'
import { iCategory } from '../../../hooks/useCategories/types'
import Card from '../../atoms/Card'
import Input from '../../atoms/input'
import Layout from '../../templates/Layout'
import { FOOTER_BUTTONS, PRESELECTED_CATEGORIES } from './constants'

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

  const [, renderAdded, newCategories] = useCategories({
    allCategories: originalCategories,
    mode: 'selecting'
  })

  const handleEndEditing = () => {
    setCategories([...selected, ...newCategories])
    toggleEditing()
  }

  return (
    <Layout
      title="Edicción de categorías"
      subTitle={`${selected.length} de 12 categorías posibles`}
      onClose={console.log}
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
          <Input addButton={true} size="medium-size"/>
          <div className={styles.categories}>
            {renderAdded()}
          </div>
        </Card>
      </div>
    </Layout>
  )
}

export default EditCategories
