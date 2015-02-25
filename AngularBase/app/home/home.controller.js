(function () {
    'use strict';

    angular.module('angularBase').controller('HomeCtrl', HomeCtrl);


    function HomeCtrl() {
        /* jshint validthis: true */
        var vm = this;
        vm.notesCollapsed = true;

        // bootstrap the controller
        activate();

        ////////////////

        function activate() {
        }

        //#region Internal Methods

        //#endregion
    }
})();
