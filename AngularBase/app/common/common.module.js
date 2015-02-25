(function () {
    'use strict';

    var commonModule = angular.module('common', []);

    commonModule.provider('commonConfig', function(){
        this.config = {
            controllerActivateSuccessEvent: 'ctrlActivate',
            spinnerToggleEvent: 'spinToggle'
        };

        this.$get = function(){
            return {
                config: this.config
            };
        };
    });

    commonModule.factory('common', common);

    //common.$inject = ['logger'];
    function common(logger) {
        var service = {
            logger: logger,
            textContains: textContains
        };

        return service;
    }

    function textContains(text, searchText) {
        return text && -1 !== text.toLowerCase().indexOf(searchText.toLowerCase());
    }
})();