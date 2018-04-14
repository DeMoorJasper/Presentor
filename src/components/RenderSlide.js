import React,  { Component } from 'react';
import { Route, Redirect } from 'react-router';
import styled, { css } from 'styled-components';

const NavButton = styled.button`
  display: inline-block;
  border: none;
  background: none;
  color: #ffffff;
  font-size: 2rem;
  padding-right: 2rem;
  padding-top: 2rem;
  position: fixed;
  height: 5rem;
  width: 5rem;
  right: 0;
  z-index: 500;

  ${props => props.type === 'previous' && css`
    right: 5rem;
  `}
`;

const TRANSITION_TIME = 10; // Time before switching slides in ms

// Slides
import SlideOne from './slides/SlideOne';
import SlideTwo from './slides/SlideTwo';

export default class Slide extends Component {
  constructor() {
    super();
    this.state = {
      lastSlide: 2,
      transitioning: false
    }
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.keyPressHandler = this.keyPressHandler.bind(this);
  }

  componentDidMount() {
    document.onkeydown = this.keyPressHandler;
  }

  nextSlide(evt) {
    if (evt) evt.preventDefault();
    if (this.props.history) {
      let slideId = this.props.history.location ? parseInt(this.props.history.location.pathname.substring(1)) : 1;
      if (slideId < this.state.lastSlide && !this.state.transitioning) {
        this.setState({ transitioning: true });
        window.setTimeout(() => {
          this.setState({ transitioning: false });
          this.props.history.push(`/${slideId + 1}`);
        }, TRANSITION_TIME);
      }
    }
  }

  prevSlide(evt) {
    if (evt) evt.preventDefault();
    if (this.props.history) {
      let slideId = this.props.history.location ? parseInt(this.props.history.location.pathname.substring(1)) : 1;
      if (slideId > 1 && !this.state.transitioning) {
        this.setState({ transitioning: true });
        window.setTimeout(() => {
          this.setState({ transitioning: false });
          this.props.history.push(`/${slideId - 1}`);
        }, TRANSITION_TIME);
      }
    }
  }

  keyPressHandler(evt) {
    switch(evt.code) {
      case 'Space':
        return this.nextSlide();
      case 'ArrowLeft':
        return this.prevSlide();
      case 'ArrowRight':
        return this.nextSlide();
    }
  }

  redirectToFirst() {
    return <Redirect to="/1" />;
  }

  render() {
    return <div onClick={this.nextSlide}>
      <Route exact path="/" component={this.redirectToFirst}/>

      <NavButton onClick={this.prevSlide} type='previous'>
        <svg width='20' height='20'>
          <polygon points="0,10 20,0 20,20" style={{
            fill: '#ffffff'
          }} />
        </svg>
      </NavButton>
      <NavButton onClick={this.nextSlide} type='next'>
        <svg width='20' height='20'>
            <polygon points="0,0 0,20 20,10" style={{
              fill: '#ffffff'
            }} />
        </svg>
      </NavButton>

      {/* === SLIDES === */}
      <Route path="/1" component={SlideOne}/>
      <Route path="/2" component={SlideTwo}/>
    </div>;
  }
}