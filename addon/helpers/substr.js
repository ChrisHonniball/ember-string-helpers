import { helper } from 'ember-helper';

export default helper(function([value, ...rest], opts) {
	if (typeof value === 'string') {
		let start = opts.start || 0;
		let max = opts.max;
		return value.substr(start, max);
	} else {
		return value;
	}
});
