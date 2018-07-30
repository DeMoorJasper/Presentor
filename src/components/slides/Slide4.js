import React from 'react';
import Slide from '../slideTemplates/Slide';
import {SubHeading} from '../elements/Heading';
import {List, ListItem} from '../elements/List';

module.exports = () => {
  return <Slide>
    <SubHeading>
      Lists of bulletpoints
    </SubHeading>
    <List>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
      <ListItem>Item 4</ListItem>
      <ListItem>Item 5</ListItem>
    </List>
  </Slide>;
}