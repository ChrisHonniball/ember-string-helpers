/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-string-helpers',
  
  included: function(app) {
    this._super.included(app);

    // Import the correct JS for chosen
    app.import(app.bowerDirectory + '/moment/moment.js');
  },
};
