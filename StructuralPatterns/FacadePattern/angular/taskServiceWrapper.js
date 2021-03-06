(function() {

  var taskServiceWrapper = function(taskService) {
    
    var completeAndNotify = function(task) {
      taskService.complete(task);
      if(task.completed == true) {
        taskService.setCompleteDate(task);
        taskService.notifyCompletion(task, task.user);
        taskService.save(task);
      }
    };

    return {
      completeAndNotify: completeAndNotify
    }
  };

  angular
    .module('taskManager')
    .service('taskServiceWrapper', taskServiceWrapper)
}());