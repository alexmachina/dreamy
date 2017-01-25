import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, Link} from 'react-router';
import {DreamTable} from './dreams/DreamTable.jsx';
import {DreamForm} from './dreams/DreamForm.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <h1><Link to="/dreams">Dreams</Link></h1>
        {this.props.children}
      </div>
    )
  }
}

const rt = (
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <Route path="/dreams" component={DreamTable}></Route>
      <Route path="/dream/:id" component={DreamForm}></Route>
    </Route>
  </Router>
)

ReactDOM.render(rt, document.getElementById('app'));
