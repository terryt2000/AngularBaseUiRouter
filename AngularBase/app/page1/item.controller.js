(function () {
    'use strict';

    angular.module('angularBase')
        .controller('Page1ItemCtrl', Page1ItemCtrl);

    Page1ItemCtrl.$inject = ['$stateParams', 'common', 'dataContext'];
    function Page1ItemCtrl($stateParams, common, dataService) {
        var controllerId = 'Page1Ctrl';
        var logFn = common.logger.getLogFn;
        // var log = logFn(controllerId);
        var logSuccess = logFn(controllerId, 'success');

        /* jshint validthis: true */
        var vm = this;
        vm.data = [];
        vm.selectedItem = undefined;

        // bootstrap the controller
        activate();

        ////////////////

        function activate() {
            dataService.getPage1Item($stateParams.itemId)
                .then(function (data) {
                    vm.selectedItem = data;
                    logSuccess('Loaded Item Data', vm.data);
                });
            logSuccess('Page 1 Item Controller Activated', vm.data);
        }

        //#region Internal Methods

        //#endregion
    }
})();