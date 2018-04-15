import React,  { Component } from 'react';
import { Route, Redirect } from 'react-router';
import styled, { css } from 'styled-components';

const slidesRequire = require('./slides/*');

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

export default class Slide extends Component {
  constructor() {
    super();

    this.slides = Object.keys(slidesRequire).map(key => {
      return slidesRequire[key];
    });
    
    this.state = {
      lastSlide: this.slides.length - 1,
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
      let slideId = this.props.history.location ? parseInt(this.props.history.location.pathname.substring(1)) : 0;
      if (slideId > 0 && !this.state.transitioning) {
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
    return <Redirect to="/0" />;
  }

  render() {
    return <div>
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
      
      {
        this.slides.map((Slide, index) => {
          return <Route key={`slide-${index}`} path={`/${index}`} component={Slide} />;
        })
      }
    </div>;
  }
}