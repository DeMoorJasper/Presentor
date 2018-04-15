import React, { Component } from 'react';
import Slide from '../Slide';
import styled from 'styled-components';
import Center from '../UtilComponents/Center';

const H1 = styled.h1`
  font-size: 6rem;
  text-transform: uppercase;
`;

export default class TitleSlide extends Component {
  render() {
    return <Slide>
      <Center>
        <H1>{this.props.headText}</H1>
      </Center>
    </Slide>;
  }
}