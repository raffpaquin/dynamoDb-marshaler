'use strict';

var _ = require('lodash/fp');
var unmarshalItem = require('./unmarshalItem');

/**
 * Translates a DynamoDb formatted object, into a normally formatted object
 * represented as a JSON string.
 *
 * @param {Object} item DynamoDb formatted object.
 * @returns {String} JSON representation of a javascript object.
 */
module.exports = _.compose(JSON.stringify, unmarshalItem);
