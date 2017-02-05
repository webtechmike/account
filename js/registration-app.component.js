(function(){
    'use strict';

    var app = angular.module('account');

    function ctrl($scope, $http) {
        var model = this;

        model.insertUser = function(){
            var url = "/api/index.php/user";
            var data = $.param({
                fname: $scope.fname,
                lname: $scope.lname,
                uname: $scope.uname,
                email: $scope.email
            });
            var config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };

            $http.post(url, data, config).then(function(response){
                console.log(response);
            }, function(err){
                console.log("Error: ", err);
            });
        };

        model.addUser = function() {
            var user = {
                fname: $scope.fname,
                lname: $scope.lname,
                uname: $scope.uname,
                email: $scope.email
            }
            console.log("User:", user);
        }

    }

    app.component('registrationForm', {
        templateUrl: 'tpls/registration-app.component.html',
        controllerAs: 'model',
        controller: ['$scope', '$http', ctrl]
    });
})();
