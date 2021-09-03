import IRoute from './interfaces/route'
import HomePage from './pages/HomePage'
import SecondPage from './pages/SecondPage'
import AboutPage from './pages/AboutPage'

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
    path: '/',
    name: 'Home Page',
    component: HomePage,
    exact: false
  }
]

export default routes
