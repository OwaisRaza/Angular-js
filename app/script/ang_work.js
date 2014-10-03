/**
 * Created by appBakerz - 05 on 9/27/2014.
 */

app.controller('workController',function($scope) {
    $scope.users = [];

    $scope.submitNew = function () {
        console.log($scope.user);
        $scope.users.push($scope.user);
        $scope.user = '';
    };
});