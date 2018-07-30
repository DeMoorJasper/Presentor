import React,  { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #242424;
  color: #ffffff;
  height: 100vh;
  width: 100%;
  padding: 2rem;
  box-sizing: border-box;
`;

export default class Slide extends Component {
  constructor() {
    super();
  }

  render() {
    return <Container>
      {this.props.children}
    </Container>;
  }
}