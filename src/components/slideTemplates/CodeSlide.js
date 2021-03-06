import React, { Component } from 'react';
import Slide from './Slide';
import styled from 'styled-components';
import Center from '../UtilComponents/Center';
import hljs from 'highlight.js';
import '../../code-highlighting.css';
import CodeFragment from '../elements/CodeFragment';

const Pre = styled.pre`
  padding: 2rem;
  padding-left: 0.5rem;
  background-color: #242424;
`;

const CodeContainer = styled.div`
  border-radius: 5px;
  border-bottom: none;
  background-color: #c2c3c6;
  width: auto;
  display: inline-block;
  padding: 0.5rem;
`;

export default class BasicSlide extends Component {
  constructor() {
    super();
    this.state = {
      highlighted: undefined
    }
  }

  renderHighlighted() {
    if (this.state.highlighted) {
      return <div dangerouslySetInnerHTML={{
        __html: this.state.highlighted.value
      }}></div>;
    } else {
      return this.props.children;
    }    
  }

  highlightCode() {
    if (this.props.language && hljs.getLanguage(this.props.language) && typeof this.props.children === 'string') {
      this.setState({ highlighted: hljs.highlight(this.props.language, this.props.children) });
    }
  }

  componentDidMount() {
    this.highlightCode();
  }

  render() {
    return <Slide>
      <Center>
        <CodeFragment language={this.props.language}>
          {this.props.children}
        </CodeFragment>
      </Center>
    </Slide>;
  }
}