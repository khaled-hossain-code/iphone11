import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ComingSoon from "./pages/ComingSoon"
import PrimaryNavbar from "./components/PrimaryNavbar"
// import SecondaryNavbar from "./components/SecondaryNavbar"

import "./App.css"

function App() {
  return (
    <div className="App">
      <Router>
        <PrimaryNavbar />
        <Switch>
          <Route path="/mac" component={ComingSoon} />
          <Route path="/ipad" component={ComingSoon} />
          <Route path="/iphone" component={ComingSoon} />
          <Route path="/watch" component={ComingSoon} />
          <Route path="/tv" component={ComingSoon} />
          <Route path="/music" component={ComingSoon} />
          <Route path="/support" component={ComingSoon} />
          <Route path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
