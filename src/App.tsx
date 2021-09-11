import React from 'react'
import AboutPage from './pages/AboutPage'
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom'
import routes from './routes'

const Application: React.FunctionComponent<{}> = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index + 1}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps<any>) => (
                  <route.component
                    name={route.name}
                    {...props}
                    {...route.props}
                  />
                )}
              />
            )
          })}
        </Switch>
        <AboutPage/>
      </BrowserRouter>
    </div>
  )
}

export default Application
