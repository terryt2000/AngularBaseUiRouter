(function () {
    'use strict';
    var app = angular.module('angularBase', [
        // Angular modules
        'ngAnimate',
        //'ngRoute',

        // 3rd Party Modules
        'toastr',
        'ui.bootstrap',
        'ui.router',
        // custom modules
        'common'
    ]);

    var stateNames = {
        home: 'home',
        page1: 'page1',
        page1Item: 'page1.item',
        page2: 'page2'
    };

    app.constant('stateNames', stateNames);

    app.config(configRoutes);
    configRoutes.$inject = ['$stateProvider', '$urlRouterProvider', 'stateNames'];
    function configRoutes($stateProvider, $urlRouterProvider, stateNames) {
        $stateProvider
            .state(stateNames.home, {
                url: '/',
                templateUrl: 'app/home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'vm'
            })
            .state(stateNames.page1, {
                url: '/page1/:itemId',
                'abstract': true,
                templateUrl: 'app/page1/page1.html',
                controller: 'Page1Ctrl',
                controllerAs: 'vm'
            })
            .state(stateNames.page1Item, {
            url: '',
            views: {
                    itemContent: {
                        templateUrl: 'app/page1/item.html',
                        controller: 'Page1ItemCtrl',
                        controllerAs: 'vm'
                    }
                }
            })
            .state(stateNames.page2, {
                url: '/page2',
                templateUrl: 'app/page2/page2.html',
                controller: 'Page2Ctrl',
                controllerAs: 'vm'
            });


        $urlRouterProvider.otherwise('/');
    }

    app.run(['$state', function ($state) {
        // Include $state to kick start the router.
    }]);
})();
