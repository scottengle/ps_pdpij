(function() {
var Task = function(data) {
  this.name = data.name;
  this.completed = false || data.completed; // tasks are not completed by default
}

Task.prototype.complete = function() {
  console.log('completing Task: ' + this.name);
  this.completed = true;
};

module.exports = Task;
}());