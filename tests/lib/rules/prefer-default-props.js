/**
 * @fileOverview Disallow ES6 default parameter syntax on component definitions.
 * @author Marcus Osterberg
 */
'use strict';

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var rule = require('../../../lib/rules/display-name');
var RuleTester = require('eslint').RuleTester;

require('babel-eslint');

var parserOptions = {
  ecmaVersion: 6,
  ecmaFeatures: {
    experimentalObjectRestSpread: true,
    jsx: true
  }
};

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('display-name', rule, {

  valid: [
    {
      code: 'function NotAComponent({ foo = \'bar\' }) {}',
      parserOptions: parserOptions
    },
    {
      code: [
        'function MyStatelessComponent({ foo }) {',
        '  return <div>Hello world</div>;',
        '}'
      ].join('\n'),
      parserOptions: parserOptions
    },
    {
      code: [
        'function MyStatelessComponent() {',
        '  return <div>Hello world</div>;',
        '}'
      ].join('\n'),
      parserOptions: parserOptions
    }
  ],

  invalid: [
    {
      code: [
        'function MyStatelessComponent({ foo = \'bar\' }) {',
        '  return <div>Hello world</div>;',
        '}'
      ].join('\n'),

      parserOptions: parserOptions,
      errors: [{
        message: 'Default parameter syntax not allowed in Component definition. Please use defaultProps.'
      }]
    }
  ]
});
