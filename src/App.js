import React from "react"
import { Router, Route, Switch } from "react-router-dom"
import { createBrowserHistory as createHistory } from "history"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ComingSoon from "./pages/ComingSoon"
import PrimaryNavbar from "./components/PrimaryNavbar"
import SecondaryNavbar from "./components/SecondaryNavbar"

import "./App.css"

const history = createHistory()

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <PrimaryNavbar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
