(function() {
var Task = function(name) {
  this.name = name;
  this.completed = false; // tasks are not completed by default
}

Task.prototype.complete = function() {
  console.log('completing Task: ' + this.name);
  this.completed = true;
};

Task.prototype.save = function() {
  console.log('saving Task: ' + this.name);
};

var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

var urgentTask = new Task('Urgent Task');
urgentTask.priority = 2;
urgentTask.notify = function() {
  console.log('notifying important people');
}

urgentTask.complete();
urgentTask.save = function() {
  this.notify();
  Task.prototype.save.call(this);
};
urgentTask.save();

}());
