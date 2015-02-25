(function () {
    'use strict';

    angular.module('angularBase').controller('Page2Ctrl', Page2Ctrl);

    Page2Ctrl.$inject = ['common'];
    function Page2Ctrl(common) {
        var controllerId = 'Page2Ctrl';
        /* jshint validthis: true */
        var vm = this;
        var logFn = common.logger.getLogFn;
        // var log = logFn(controllerId);
        var logSuccess = logFn(controllerId, 'success');
        // bootstrap the controller
        activate();

        ////////////////

        function activate() {
           logSuccess('Page 2 Controller Activated', true);
        }

        //#region Internal Methods

        //#endregion
    }
})();
