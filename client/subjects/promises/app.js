angular.module('artoo', [
  'appbar',
  'ngResource' // includo angular resource
])
  .config((AppbarSrvProvider) => {
    AppbarSrvProvider.setSubject({name: 'Promises', url: 'subjects/promises'});
  });