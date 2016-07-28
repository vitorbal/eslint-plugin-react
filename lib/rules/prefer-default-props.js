/**
 * @fileOverview Disallow ES6 default parameter syntax on component definitions.
 * @author Marcus Osterberg
 */
'use strict';

var Components = require('../util/Components');

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {},

    schema: []
  },

  create: Components.detect(function(context, components, utils) {
    return {};
  })
};
