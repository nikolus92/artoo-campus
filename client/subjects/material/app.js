angular.module('artoo', [
  'appbar',
  'ngMaterial',
  'ngAnimate',
  'ngAria',
])
  .config((AppbarSrvProvider) => {
    AppbarSrvProvider.setSubject({name: 'Angular Material', url: 'subjects/material'});
  })
  .config(($mdThemingProvider) => {
      $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('blue')
        .warnPalette('red')
        .backgroundPalette('grey');
  });