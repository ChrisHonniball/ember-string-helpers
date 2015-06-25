import Ember from 'ember';

export function regexpReplace(params) {
  var string = params[0],
    regex = params[1],
    regexPattern = params[2];
  
  string.replace(regex, replacePattern);
}

export default Ember.HTMLBars.makeBoundHelper(regexpReplace);
