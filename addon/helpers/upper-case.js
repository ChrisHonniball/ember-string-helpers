import Ember from 'ember';

export function upperCase(params) {
	return ( params[0] && typeof params[0] === 'string') ? params[0].toUpperCase() : params[0];
}

export default Ember.Helper.helper(upperCase);
