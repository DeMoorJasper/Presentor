import React, { Component } from 'react';
import Slide from '../Slide';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const H1 = styled.h1`
  font-size: 4rem;
  text-transform: uppercase;
`;

export default class TitleSlide extends Component {
  render() {
    return <Slide>
      <Header>
        <H1>{this.props.headText}</H1>
      </Header>
    </Slide>;
  }
}