(function() {
  var repo = function() {

    var db = {};
    
    var get = function(id) {
      console.log('Getting project ' + id);
      return {
        name: 'new project from db'
      };
    };

    var save = function(project) {
      console.log('Saving ' + project.name + ' to the db');
    };

    console.log('newing up project repo');
    return {
      get: get,
      save: save
    }
  }

  module.exports = repo;
}());