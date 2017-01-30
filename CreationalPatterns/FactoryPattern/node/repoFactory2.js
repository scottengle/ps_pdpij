(function() {
  
  var repoFactory = function() {
    var repos = this;
    var repoList = [{name: 'task', source: './taskRepository'},
                    {name: 'user', source: './userRepository'},
                    {name: 'project', source: './projectRepository'}];

    repoList.forEach(function(repo) {
      repos[repo.name] = require(repo.source)();
    });

    return repos;
  }

  module.exports = new repoFactory;
}());