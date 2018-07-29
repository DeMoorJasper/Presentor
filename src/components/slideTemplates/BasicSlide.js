import React, { Component } from 'react';
import Slide from '../Slide';
import {SubHeading} from '../elements/Heading';
import {Content} from '../elements/Content';

export default class BasicSlide extends Component {
  render() {
    return <Slide>
      <header>
        <SubHeading>{this.props.headText}</SubHeading>
      </header>
      <Content>{this.props.children}</Content>
    </Slide>;
  }
}