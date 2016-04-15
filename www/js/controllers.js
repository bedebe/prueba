angular.module('App')
    .controller('MainCtrl', ['$scope', function ($scope) {
        $scope.status = "Main!!!!";
        console.log("main")
    }])
    .controller('ViewCtrl', ['$scope', function ($scope) {
        $scope.status = "View!!!!!";
        console.log("view")
    }]);