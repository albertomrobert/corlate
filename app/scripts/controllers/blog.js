'use strict';

/**
 * @ngdoc function
 * @name corlateApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the corlateApp
 */
angular.module('corlateApp')
  .controller('BlogCtrl', function($scope) {

	$scope.texto = function(){
		
		if($scope.busqueda == undefined || $scope.busqueda=='') {
  		alert('debes escribir algo');
  		}

  		else{
  		alert($scope.busqueda);
  		}
	}

  });
