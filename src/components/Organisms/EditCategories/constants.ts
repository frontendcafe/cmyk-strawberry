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

export const FOOTER_BUTTONS = (): ButtonProps[] => [
  {
    key: 'CREATE_GAME',
    type: 'button',
    theme: 'tertiary',
    size: 'large',
    onClick: console.log,
    children: 'VOLVER'
  }
]
