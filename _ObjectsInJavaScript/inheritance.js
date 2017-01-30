// We can mimic inheritance

var task = {
  title: 'My Title',
  description: 'My Description'
}

Object.defineProperty(task, 'toString', {
  value: function() {
    return this.title + ' ' + this.description;
  },
  writable: false, // prevents overwriting the property
  enumerable: false, // prevents proprty from being iterated over in Object.keys
  configurable: false // prevents redefining the property later
});

// urgentTask essentially inherits from task

var urgentTask = Object.create(task);

Object.defineProperty(urgentTask, 'toString', {
  value: function() {
    return this.title + ' is urgent';
  },
  writable: false, // prevents overwriting the property
  enumerable: false, // prevents proprty from being iterated over in Object.keys
  configurable: false // prevents redefining the property later
});

console.log(urgentTask.toString());