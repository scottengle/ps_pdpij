(function() {
// subObjecting isn't really a word...

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

var UrgentTask = function(name, priority) {
  Task.call(this, name); // call the Task constructor using the scope of 'this'
  this.priority = priority;
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

var ut = new UrgentTask('This is urgent', 1);
ut.complete();
ut.save();
console.log(ut);

}());

