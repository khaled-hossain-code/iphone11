import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import routes from "./routes"
import PrimaryNavbar from "./components/PrimaryNavbar"
import SecondaryNavbar from "./components/SecondaryNavbar"

import "./App.css"

function App() {
  return (
    <div className="App">
      <Router>
        <PrimaryNavbar />
        <SecondaryNavbar />
        <Switch>
          {routes.map(({ path, component, exact }) => (
            <Route key={path} path={path} component={component} exact={exact} />
          ))}
        </Switch>
      </Router>
    </div>
  )
}

export default App
