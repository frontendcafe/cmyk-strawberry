import IRoute from './interfaces/route'
import HomePage from './pages/HomePage'
import SecondPage from './pages/SecondPage'
import AboutPage from './pages/AboutPage'
import BoardPage from './pages/BoardPage'
import GameConfig from './pages/GameConfig'
import RoomsPage from './pages/RoomsPage'
import PreviewPage from './pages/PreviewPage'

export enum paths {
  HOME = '/',
  GAME_CONFIG = '/game-config',
  ROOMS = '/rooms',
  BOARD = '/board',
  PREVIEW = '/preview/:id'
}

const routes: IRoute[] = [
  {
    path: '/second/',
    name: 'Segond Page',
    component: SecondPage,
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
    path: paths.GAME_CONFIG,
    name: 'Game config',
    component: GameConfig,
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
