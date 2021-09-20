import { v4 as uuidv4 } from 'uuid'
import image from './highlighted_area_copy_68.jpg'

export const DATA = [
  {
    id: uuidv4(),
    title: 'El comienzo de algo',
    description: 'Crea una partida nueva o únete a una buscando dentro de las salas creadas.',
    img: image
  },
  {
    id: uuidv4(),
    title: 'Tenemos que hacerlo',
    description: 'Espera a que se seleccione una letra al azar y llena las categorías.',
    img: image
  },
  {
    id: uuidv4(),
    title: 'La validación',
    description: 'Al finalizar cada ronda, los jugadores comprobarán si las palabras son correctas o no.',
    img: image
  },
  {
    id: uuidv4(),
    title: 'Los puntajes',
    description: 'Si tu palabra recibe más de la mitad de los votos aprobados, sumarás puntos.',
    img: image
  },
  {
    id: uuidv4(),
    title: 'El final de todo',
    description: 'Ganará la persona con más puntos al finalizar todas las rondas.',
    img: image
  }
]
