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

task.toString = 'hi'; // ignored

// This will throw an error
// Object.defineProperty(task, 'toString', {
//   configurable: true
// });

console.log(task.toString());
console.log(Object.keys(task));
