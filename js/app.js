(function(){
    'use strict';

    var app = angular.module('account', []);

    function ctrl(){
        var model = this;
    }

    app.component('app', {
        templateUrl: 'tpls/app.component.html',
        controllerAs: 'model',
        controller: ctrl
    })
})();