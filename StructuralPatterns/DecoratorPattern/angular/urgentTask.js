(function() {
  
  angular
    .module('taskManager')
    .factory('UrgentTask', function(TaskRepository, Task) {

      var UrgentTask = function(data) {
        Task.call(this, data); // call the Task constructor using the scope of 'this'
        this.priority = 0 || data.priority;
      };

      // we're mimicing inheritance here, by creating a new object based on the Task prototype
      UrgentTask.prototype = Object.create(Task.prototype);

      UrgentTask.prototype.notify = function() {
        console.log('notifying important people');
      };

      UrgentTask.prototype.save = function() {
        this.notify();
        console.log('do special stuff before saving');
        Task.prototype.save.call(this);
      };

      return UrgentTask;
    });

}());