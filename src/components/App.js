import React,  { Component } from 'react';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import RenderSlide from './RenderSlide';

const history = createBrowserHistory();

export default class App extends Component {
  render() {
    return <Router history={history}>
      <RenderSlide history={history} />
    </Router>;
  }
}