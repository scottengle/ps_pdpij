(function() {
  var repoFactory = function() {

    this.getRepo = function(repoType) {
      if(repoType === 'task') {
        if(this.taskRepo) {
          return this.taskRepo;
        } else {
          this.taskRepo = require('./taskRepository')();
          return this.taskRepo;
        }
      }
      if(repoType === 'user') {
        if(this.userRepo) {
          return this.userRepo;
        } else {
          var userRepo = require('./userRepository')();
          return userRepo;
        }
      }
      if(repoType === 'project') {
        if(this.projectRepo) {
          return this.projectRepo;
        } else {
          var projectRepo = require('./projectRepository')();
          return projectRepo;
        }
      }
    }

  }

  module.exports = repoFactory;
  
}());