import IRoute from './interfaces/route'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BoardPage from './pages/BoardPage'
import RoomsPage from './pages/RoomsPage'
import ValidationPage from './pages/ValidationPage'
import PreviewPage from './pages/PreviewPage'
import NewGame from './pages/NewGame'
// import EditGame from './pages/EditGame'

export enum paths {
  HOME = '/',
  GAME_CONFIG = '/new-room',
  EDIT_CONFIG = '/edit-room/:idRoom',
  ROOMS = '/rooms',
  BOARD = '/board/:idRoom',
  VALIDATION = '/validation/:idRoom',
  PREVIEW = '/preview/:idRoom'
}

const routes: IRoute[] = [
  {
    path: '/about',
    name: 'About Page',
    component: AboutPage,
    exact: true
  },
  {
    path: '/about/:number',
    name: 'About Page',
    component: AboutPage,
    exact: true
  },
  {
    path: paths.EDIT_CONFIG,
    name: 'Edit game',
    component: NewGame,
    exact: true
  },
  {
    path: paths.GAME_CONFIG,
    name: 'New game',
    component: NewGame,
    exact: true
  },
  {
    path: paths.ROOMS,
    name: 'Rooms',
    component: RoomsPage,
    exact: true
  },
  {
    path: paths.BOARD,
    name: 'Board Page',
    component: BoardPage,
    exact: true
  },
  {
    path: paths.VALIDATION,
    name: 'Validation',
    component: ValidationPage,
    exact: true
  },
  {
    path: paths.PREVIEW,
    name: 'Preview Page',
    component: PreviewPage,
    exact: true
  },
  {
    path: paths.HOME,
    name: 'Home Page',
    component: HomePage,
    exact: false
  }
]

export default routes
