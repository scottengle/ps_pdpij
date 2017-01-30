(function() {

  var taskController = function(Task, taskService, taskServiceWrapper) {
    var ctrl = this;
    ctrl.tasks = [];
    ctrl.tasks.push(new Task({
      name: 'MyTask',
      priority: 1,
      project: 'Courses',
      user: 'Jon',
      completed: false
    }));

    ctrl.completeTask = function(i) {
      var myTask = ctrl.tasks[i];
      taskServiceWrapper.completeAndNotify(myTask);
      console.log(myTask);
    }
  };

  angular
    .module('taskManager', [])
    .controller('taskCtrl', taskController);
}());