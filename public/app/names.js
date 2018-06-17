app.controller('myCtrl', function($scope, Name) {

$scope.name = new Name();

var refresh = function() {
  $scope.names = Name.query(); 
  $scope.name ="";
}
refresh();

$scope.add = function(name) {
  //$scope.results = $scope.name.firstName + " "+ $scope.name.lastName;
  $scope.results1 = $scope.name.fName + " "+ $scope.name.Name;
	
	name = Object.assign(name,  $scope.results1);
    Name.save(name,function(name){
    refresh();
  });
};

$scope.update = function(name) {
  name.$update(function(){
    refresh();
  });
};

$scope.remove = function(name) {
  name.$delete(function(){
    refresh();
  });
};

$scope.edit = function(id) {
  $scope.name = Name.get({ id: id });
  $scope.deselect();
};  

$scope.deselect = function() {
  $scope.name.fName = "";
  $scope.name.lName = "";
}

})