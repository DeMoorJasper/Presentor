import React from 'react';
import Slide from '../slideTemplates/Slide';
import {SubHeading} from '../elements/Heading';
import {Content} from '../elements/Content';

module.exports = () => {
  return <Slide>
    <SubHeading>Title text</SubHeading>
    <Content>
      <p>Some content</p>
    </Content>
  </Slide>;
}