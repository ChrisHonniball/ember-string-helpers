import Ember from 'ember';

export function upperCase(params) {
  return params[0].toUpperCase();
}

export default Ember.HTMLBars.makeBoundHelper(upperCase);
