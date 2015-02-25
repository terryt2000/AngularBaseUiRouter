(function () {
    'use strict';

    var app = angular.module('angularBase');


    app.config(['$compileProvider', function($compileProvider){
       $compileProvider.debugInfoEnabled(true);
    }]);

    var itemData = {
        'one': 1,
        'two': 2,
        'three': 3
    };

    var keyCodes = {
        backspace: 8,
        tab: 9,
        enter: 13,
        esc: 27,
        space: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36,
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        insert: 45,
        del: 46
    };

    var events = {
        controllerActivateSuccess: 'controller.activateSuccess',
        spinnerToggle: 'spinner.toggle'
    };

    var pages = {
        home: 'home',
        page1: 'page1',
        page2: 'page2'
    };

    var config = {
        appErrorPrefix: '[AngularBase Error] ', //Configure the exceptionHandler decorator
        docTitle: 'Angular Base | ',
        events: events,
        pages: pages,
        appData: itemData,
        version: '1.0.0',
        keyCodes: keyCodes
    };

    app.value('config', config);

    app.config(['$logProvider', function ($logProvider) {
        // turn debugging off/on (no info or warn)
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
    }]);
})();
