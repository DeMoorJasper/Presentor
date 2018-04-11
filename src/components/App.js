import React,  { Component } from 'react';
import TitleSlide from './slideTemplates/TitleSlide';
import BasicSlide from './slideTemplates/BasicSlide';

export default class App extends Component {
  renderTitle() {
    return <TitleSlide headText="Title text" />;
  }

  renderBasic() {
    return <BasicSlide headText="Title text">
      <p>Some content</p>
    </BasicSlide>;
  }

  render() {
    return this.renderTitle();
  }
}