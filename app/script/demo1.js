
app.controller('NameController', ['$scope', function($scope) {
    $scope.customName = "khanzada";
    $scope.myName = 'owais';

    $scope.names = function(myName) {
        $scope.myName = myName;
    };
    $scope.value1 = true;
    $scope.value2 = 'YES';

    $scope.myHTML =
        'I am an <code>HTML</code>string with ' +
        '<a href="#">links!</a> and other <em>stuff</em>';
}]);

app.controller('myController', ['$scope', function($scope){

    $scope.colors = [
    {name:'black', shade:'dark'},
    {name:'white', shade:'light'},
    {name:'red', shade:'dark'},
    {name:'blue', shade:'dark'},
    {name:'yellow', shade:'light'}
];
$scope.myColor = $scope.colors[2];
}]);