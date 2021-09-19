import { Props as ButtonProps } from '../../../components/atoms/Button'

export const PRESELECTED_CATEGORIES = [
  {
    name: 'Animales'
  },
  {
    name: 'Deportes'
  },
  {
    name: 'Países'
  },
  {
    name: 'Películas'
  },
  {
    name: 'Colores'
  },
  {
    name: 'Nombres'
  },
  {
    name: 'Marcas'
  },
  {
    name: 'Cosas'
  },
  {
    name: 'Bandas/Artistas'
  },
  {
    name: 'Frutas/Verduras'
  },
  {
    name: 'Comidas'
  }
]

export const FOOTER_BUTTONS = (toggleEditing: () => void): ButtonProps[] => [
  {
    key: 'CREATE_GAME',
    type: 'button',
    theme: 'tertiary',
    size: 'large',
    onClick: toggleEditing,
    children: 'VOLVER'
  }
]

export const EDIT_CATEGORY_FIELDS = {
  NAME: 'name'
}

// TODO: Implement with message
export const MIN_CATEGORIES = 4
export const MAX_CATEGORIES = 12
