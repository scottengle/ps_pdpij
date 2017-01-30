// Singletons
// - Remembers the last time you used it
// - Hands the same instance back
// - Node.js uses CommonJS
// - Angular uses services

var TaskRepo = (function() {
  var taskRepo;
  function createRepo() {
    var taskRepo = new Object("Task");
    return taskRepo;
  }
  return {
    getInstance: function() {
      if (!taskRepo) {
        taskRepo = createRepo();
      }
      return taskRepo;
    }
  }
})();

var repo1 = TaskRepo.getInstance();
var repo2 = TaskRepo.getInstance();

if (repo1 === repo2) {
  console.log("Same TaskRepo");
} else {
  console.log("Different TaskRepo");
}