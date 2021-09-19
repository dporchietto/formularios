// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-angular
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

angular
  .module('app')
  .controller('TodoController', ['$scope','T_PYC_PROFESION', '$state', function($scope, T_PYC_PROFESION,
      $state) {

        T_PYC_PROFESION.find().$promise.then((res) => {console.log(res)})
        $scope.userEmail = 'Hi@asd.com'
    
  }]);
