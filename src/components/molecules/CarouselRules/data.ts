import { v4 as uuidv4 } from 'uuid'
import image1 from '../../../assets/carousel-rules/rules1.png'
import image2 from '../../../assets/carousel-rules/rules2.svg'
import image3 from '../../../assets/carousel-rules/rules3.svg'
import image4 from '../../../assets/carousel-rules/rules4.svg'
import image5 from '../../../assets/carousel-rules/rules5.svg'

export const DATA = [
  {
    id: uuidv4(),
    title: 'El comienzo de algo',
    description: 'Crea una partida nueva o únete a una buscando dentro de las salas creadas.',
    img: image1
  },
  {
    id: uuidv4(),
    title: 'Tenemos que hacerlo',
    description: 'Espera a que se seleccione una letra al azar y llena las categorías.',
    img: image2
  },
  {
    id: uuidv4(),
    title: 'La validación',
    description: 'Al finalizar cada ronda, los jugadores comprobarán si las palabras son correctas o no.',
    img: image3
  },
  {
    id: uuidv4(),
    title: 'Los puntajes',
    description: 'Si tu palabra recibe más de la mitad de los votos aprobados, sumarás puntos.',
    img: image4
  },
  {
    id: uuidv4(),
    title: 'El final de todo',
    description: 'Ganará la persona con más puntos al finalizar todas las rondas.',
    img: image5
  }
]
