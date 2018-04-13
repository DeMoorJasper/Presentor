import React, { Component } from 'react';
import Slide from '../Slide';
import styled from 'styled-components';

const Header = styled.header``;

const H1 = styled.h1`
  font-size: 4rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const Content = styled.div`
  font-size: 2rem;
`;

export default class BasicSlide extends Component {
  render() {
    return <Slide>
      <Header>
        <H1>{this.props.headText}</H1>
      </Header>
      <Content>{this.props.children}</Content>
    </Slide>;
  }
}