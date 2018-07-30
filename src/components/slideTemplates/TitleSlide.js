import React, { Component } from 'react';
import Slide from './Slide';
import Center from '../UtilComponents/Center';
import {Heading} from '../elements/Heading';

export default class TitleSlide extends Component {
  render() {
    return <Slide>
      <Center>
        <Heading>{this.props.headText}</Heading>
      </Center>
    </Slide>;                      
  }
}