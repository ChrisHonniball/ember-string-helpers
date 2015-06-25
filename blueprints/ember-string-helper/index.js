module.exports = {
  description: '',

  normalizeEntityName: function() {},

  afterInstall: function() {
    var that = this;
    
    return that.addBowerPackagesToProject([
      { name: 'moment' }
    ]);
  }
};
