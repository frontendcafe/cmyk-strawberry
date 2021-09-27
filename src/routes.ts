import IRoute from './interfaces/route'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BoardPage from './pages/BoardPage'
import RoomsPage from './pages/RoomsPage'
import ValidationPage from './pages/ValidationPage'
import PreviewPage from './pages/PreviewPage'
import ProvisionalClasPage from './pages/ProvisionalClasPage'
import NewGame from './pages/NewGame'
import Rules from './pages/rules'
import EditGame from './pages/EditGame'

export enum paths {
  RULES= '/rules',
  HOME = '/',
  GAME_CONFIG = '/new-room',
  EDIT_CONFIG = '/edit-room/:idRoom',
  ROOMS = '/rooms',
  BOARD = '/board/:idRoom',
  VALIDATION = '/validation/:idRoom',
  PREVIEW = '/preview/:idRoom',
  CLASIFICATION = '/classification'
}

const routes: IRoute[] = [
  {
    path: paths.RULES,
    name: '/rules',
    exact: true,
    component: Rules
  },
  {
    path: paths.CLASIFICATION,
    name: 'Provisional Classification Page',
    component: ProvisionalClasPage,
    exact: true
  },
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
    component: EditGame,
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
