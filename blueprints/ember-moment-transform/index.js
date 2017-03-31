//blueprints/ember-moment-transform/index.js

/*jshint node:true*/
module.exports = {
  description: 'Install dependencies',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addAddonToProject('ember-cli-moment-shim', '^3.0.0');
  }
};
