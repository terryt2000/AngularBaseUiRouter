/* global angular:false, moment:false, _:false */
(function () {
    'use strict';

    angular
        .module('common')
        .constant('moment', moment)
        .constant('_', _);
 })();