var task = {};

task.title = 'My Task';
task.description = 'My Description';

console.log(task.title);

var task2 = Object.create(Object.prototype);

task2.title = 'My Second Task';
task2.description = 'My Second Description';
task2.toString = function() {
  return this.title + ' ' + this.description;
}

console.log(task2.toString());

var task3 = {
  title: 'My Third Title',
  description: 'My Third Description'
}
task3.toString = function() {
  return this.title + ' ' + this.description;
}

console.log(task3.toString());