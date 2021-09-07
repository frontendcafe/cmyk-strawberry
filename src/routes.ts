import IRoute from './interfaces/route'
import HomePage from './pages/HomePage'
import SecondPage from './pages/SecondPage'
import AboutPage from './pages/AboutPage'
import GameConfig from './pages/GameConfig'

export enum paths {
  HOME = '/',
  GAME_CONFIG = '/game-config'
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
    path: paths.HOME,
    name: 'Home Page',
    component: HomePage,
    exact: false
  }
]

export default routes
