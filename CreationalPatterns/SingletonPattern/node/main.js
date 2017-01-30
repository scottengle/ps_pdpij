(function() {
  var taskHandler = require('./taskHandler');
  var myRepo = require('./repo');

  myRepo.save('fromMain');
  myRepo.save('fromMain');
  myRepo.save('fromMain');
  taskHandler.save();
  taskHandler.save();
  taskHandler.save();
  taskHandler.save();
}());