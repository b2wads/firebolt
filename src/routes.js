import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './views/Home'

import { WithAuth } from './helpers/authentication/with-auth';

const hewllo = () => <div>AAAAAAAAAAA</div>

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/aaa" component={WithAuth(hewllo)} />
    </Switch>
  )
}
