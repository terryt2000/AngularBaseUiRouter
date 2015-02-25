(function () {
    'use strict';

    angular.module('angularBase')
        .controller('Page1Ctrl',  Page1Ctrl);

    Page1Ctrl.$inject = ['$state', '$stateParams', 'common', 'dataContext', 'stateNames', '_'];
    function Page1Ctrl($state, $stateParams, common, dataService, stateNames, _) {
        var controllerId = 'Page1Ctrl';
        var logFn = common.logger.getLogFn;
        // var log = logFn(controllerId);
        var logSuccess = logFn(controllerId, 'success');

        /* jshint validthis: true */
        var vm = this;
        vm.data = [];
        vm.selectedItem = undefined;

        
        vm.goHome = goHome;
        vm.selectItem = selectItem;

        // bootstrap the controller
        activate();

        function activate() {
            dataService.page1Data()
                .then(function(data){
                    vm.data = data;
                    if ($stateParams.itemId) {
                        vm.selectedItem = _.find(vm.data, { id: $stateParams.itemId * 1 });
                    }
                    if(!vm.selectedItem) {
                        vm.selectedItem = vm.data[0];
                    }
                    $state.go(stateNames.page1Item, { itemId: vm.selectedItem.id });
                    logSuccess('Loaded Data', vm.data);
                });
            logSuccess('Page 1 Controller Activated', vm.data);
        }

        //#region Internal Methods
        function goHome() {
            $state.go(stateNames.home);
        }

        function selectItem(item) {
            vm.selectedItem = item;
            $state.go(stateNames.page1Item, { itemId: vm.selectedItem.id });
        }
        //#endregion
    }
})();
