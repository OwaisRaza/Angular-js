/**
 * Created by appBakerz - 05 on 9/27/2014.
 */

app.controller('testController',function($scope) {
$scope.addItem = function(){
    console.log($scope.name);
    $scope.users.push({name: $scope.name}) ;
    $scope.name = '';
};
$scope.users = [
    {name:'owais'},
    {name:'raza'},
    {name:'khan'}
];});