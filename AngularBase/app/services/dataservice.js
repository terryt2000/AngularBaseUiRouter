(function () {
    angular.module('angularBase')
        .factory('dataContext', DataContext);

    DataContext.$inject = ['$q', '_'];
    function DataContext($q, _) {
        var page1data = [
            { name: 'Item 1', id: 1, description: 'Stuff 1' },
            { name: 'Item 2', id: 2, description: 'Stuff 2' },
            { name: 'Item 3', id: 3, description: 'Stuff 3' }
        ];
        var page2data;

        var service = {
            page1Data: page1Data,
            getPage1Item: getPage1Item,
            page2Data: page2Data
        };

        return service;

        //#region Internal Methods
        function page1Data(){
            return $q.when(_.map(page1data, function(item) {
                return {
                    id: item.id,
                    name: item.name
                };
            }));
        }

        function getPage1Item(itemId) {
            var id = itemId * 1;
            return $q.when(_.find(page1data, { id: id }));
        }

        function page2Data(){
            if(page2data){
                return $q.when(page2data);
            } else {
                page2data = [{ name: 'Item 1', id: 1 }, { name: 'Item 2', id: 2 }, { name: 'Item 3', id: 3 }];
                return $q.when(page2data);
            }
        }
        //#endregion

    }
})();
