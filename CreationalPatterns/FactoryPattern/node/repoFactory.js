(function() {
  'use strict';
  
  var repoFactory = function(repoType) {
    if(repoType === 'task') {
      var taskRepo = require('./taskRepository')();
    }
    if(repoType === 'user') {
      var taskRepo = require('./userRepository')();
    }
    if(repoType === 'project') {
      var taskRepo = require('./projectRepository')();
    }
  }

  module.exports = new repoFactory;
}());