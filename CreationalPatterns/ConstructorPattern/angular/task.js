(function() {
  var app = angular.module('taskManager');

  app.factory('Task', function() {
    var Task = function(data) {
      this.name = data.name;
      this.completed = data.completed; // tasks are not completed by default
    }

    Task.prototype.complete = function() {
      console.log('completing Task: ' + this.name);
      this.completed = true;
    };

    Task.prototype.save = function() {
      console.log('saving Task: ' + this.name);
    };

    return Task;
  });
  
}());