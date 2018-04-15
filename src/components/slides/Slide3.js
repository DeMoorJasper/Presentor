import React from 'react';
import CodeSlide from '../slideTemplates/CodeSlide';

module.exports = () => {
  return <CodeSlide language="js">
    {`
      const something = require('something');

      function hello() {
        return 'hello world';
      }

      console.log(hello());
    `}
  </CodeSlide>;
}