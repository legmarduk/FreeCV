import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from './views/landing/landing'

const Routes = () => {
  return (
    <Switch>
      <Router>
        <Route path="/inicio" component={Landing} />
      </Router>
    </Switch>
  )
}

export default Routes;
