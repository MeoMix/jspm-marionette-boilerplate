﻿/* eslint max-len: 0 */
// All views should look up ui elements with a "data-ui~=name" attribute.
// Make the lookup of ui elements by their data-ui attribute implicit.
// Optionally allow the user to opt-out of this functionaliy via 'useCustomUiSelector' flag.
import _ from 'lodash';
import Marionette from 'marionette';

Marionette.View.prototype.useCustomUiSelector = false;
Marionette.View.prototype._bindUIElements = function() {
  if (!this.ui) {
    return;
  }

  // store the ui hash in _uiBindings so they can be reset later
  // and so re-rendering the view will be able to find the bindings
  if (!this._uiBindings) {
    this._uiBindings = this.ui;
  }

  // get the bindings result, as a function or otherwise
  const bindings = _.result(this, '_uiBindings');

  // empty the ui so we don't have anything to start with
  this.ui = {};

  // bind each of the selectors
  _.each(bindings, (selector, key) => {
    // Since _bindUIElements can be called by a behavior -- need to check for existence of this.view
    selector = this.useCustomUiSelector || this.view && this.view.useCustomUiSelector ? selector : `[data-ui~=${selector}]`;
    this.ui[key] = this.$(selector);
  });
};

// normalize the keys of passed hash with the views `ui` selectors.
// `{"@ui.foo": "bar"}`
Marionette.View.prototype.normalizeUIKeys = function(hash) {
  const uiBindings = _.result(this, '_uiBindings');
  return Marionette.normalizeUIKeys(hash, uiBindings || _.result(this, 'ui'), this.useCustomUiSelector || this.view && this.view.useCustomUiSelector);
};

// normalize the values of passed hash with the views `ui` selectors.
// `{foo: "@ui.bar"}`
Marionette.View.prototype.normalizeUIValues = function(hash, properties) {
  const ui = _.result(this, 'ui');
  const uiBindings = _.result(this, '_uiBindings');
  return Marionette.normalizeUIValues(hash, uiBindings || ui, properties, this.useCustomUiSelector || this.view && this.view.useCustomUiSelector);
};

// allows for the use of the @ui. syntax within
// a given key for triggers and events
// swaps the @ui with the associated selector.
// Returns a new, non-mutated, parsed events hash.
Marionette.normalizeUIKeys = function(hash, ui, useCustomUiSelector) {
  return _.reduce(hash, (memo, val, key) => {
    const normalizedKey = Marionette.normalizeUIString(key, ui, useCustomUiSelector);
    memo[normalizedKey] = val;
    return memo;
  }, {});
};

// allows for the use of the @ui. syntax within
// a given value for regions
// swaps the @ui with the associated selector
Marionette.normalizeUIValues = function(hash, ui, properties, useCustomUiSelector) {
  _.each(hash, (val, key) => {
    if (_.isString(val)) {
      hash[key] = Marionette.normalizeUIString(val, ui, useCustomUiSelector);
    } else if (_.isObject(val) && _.isArray(properties)) {
      _.extend(val, Marionette.normalizeUIValues(_.pick(val, properties), ui, useCustomUiSelector));
      /* Value is an object, and we got an array of embedded property names to normalize. */
      _.each(properties, (property) => {
        const propertyVal = val[property];
        if (_.isString(propertyVal)) {
          val[property] = Marionette.normalizeUIString(propertyVal, ui, useCustomUiSelector);
        }
      });
    }
  });
  return hash;
};

// utility method for parsing @ui. syntax strings
// into associated selector
Marionette.normalizeUIString = function(uiString, ui, useCustomUiSelector) {
  return uiString.replace(/@ui\.[a-zA-Z_$0-9]*/g, (replacement) => {
    let normalizedUIString;

    if (useCustomUiSelector) {
      normalizedUIString = ui[replacement.slice(4)];
    } else {
      normalizedUIString = `[data-ui~=${ui[replacement.slice(4)]}]`;
    }

    return normalizedUIString;
  });
};