(function() {
  var Task = function(data) {
    this.flyweight = FlyweightFactory.get(data.project, data.priority, data.user, data.completed);
    this.name = data.name;
  };
  
  Task.prototype.getPriority = function() {
    return this.flyweight.priority;
  };

  function TaskCollection() {
    var tasks = {},
        count = 0,
        add = function(data) {
          tasks[data.name] = new Task(data);
          count++;
        },
        get = function(name) {
          return tasks[name];
        },
        getCount = function() {
          return count;
        };

    return {
      add: add,
      get: get,
      getCount: getCount
    };
  }

  function Flyweight(project, priority, user, completed) {
    this.project = project;
    this.priority = priority;
    this.user = user;
    this.completed = completed;
  }

  var FlyweightFactory = function() {
    var flyweights = {};

    var get = function(project, priority, user, completed) {
      if (!flyweights[project + priority + user + completed]) {
        flyweights[project + priority + user + completed] = new Flyweight(project, priority, user, completed);
      }
    };

    var getCount = function() {
      var count = 0;
      for (var f in flyweights) count++;
      return count;
    };

    return {
      get: get,
      getCount: getCount
    };

  }();

  var tasks = new TaskCollection(),
      projects = ['none', 'courses', 'training', 'project'],
      priorities = [1, 2, 3, 4, 5],
      users = ['Jon', 'Erica', 'Amanda', 'Nathan'],
      completed = [true, false],
      initialMemory = process.memoryUsage().heapUsed;

  for (var i = 0; i < 1000000; i++) {
    tasks.add({
      name: 'task' + i,
      priority: priorities[Math.floor((Math.random() * priorities.length))],
      project: projects[Math.floor((Math.random() * projects.length))],
      user: users[Math.floor((Math.random() * users.length))],
      completed: completed[Math.floor((Math.random() * completed.length))]
    });
  };

  var afterMemory = process.memoryUsage().heapUsed;
  console.log('Used memory ' + ((afterMemory - initialMemory) / (1024 * 1024)) + ' MiB');
  console.log('Tasks: ' + tasks.getCount());
  console.log('Flyweights: ' + FlyweightFactory.getCount());

}());