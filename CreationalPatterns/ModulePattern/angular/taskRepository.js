(function() {
  var repo = function($http) {

    var db = {};
    
    var get = function(id) {
      console.log('Getting task ' + id);
      return {
        name: 'new task from db'
      };
    };

    var save = function(task) {
      console.log('Saving ' + task.name + ' to the db');
    };

    return {
      get: get,
      save: save
    }
  }

  angular
    .module('taskManager')
    .service('TaskRepository', repo);

}());