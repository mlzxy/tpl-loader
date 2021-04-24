var _ = require('lodash');

module.exports = function (source) {
  this.cacheable && this.cacheable();
  var template = _.template(source, null, null);
  return 'var _ = require(\'lodash\');\nmodule.exports = ' + template;
};
