angular.module('artoo').directive('cssAdder', function (){
    return {
        restrict: 'AE',
        scope: {
            options: '=',
        },
        link: function (scope, elem)
        {   
            var options = scope.options || {};
            
            var color = options.color || 'gray';
            var thickness = options.thickness || '2px';
            var typology = options.typology || 'solid';
             
            elem.css('border', [thickness, typology, color].join(' '));
        },
    }; 
});