var myApp = angular.module('fapp', []);

myApp.controller('ctrl1', function($scope) {

	$scope.doLts = [ {
		"task" : "Clean the Room",
		"state" : true,
		'descript' : 'Need to do a better Job',
		'priority' : '0'
	}, {
		"task" : "Car Wash",
		"state" : false,
		'descript' : 'I wiil do a select Hand wash',
		'priority' : '5'
	}, {
		"task" : "Shopping",
		"state" : true,
		'descript' : 'Dont fogget Chiccken',
		'priority' : '3'
	}, {
		"task" : "Study",
		"state" : true,
		'descript' : 'Bubble sort',
		'priority' : '1'
	}, {
		"task" : "Write a letter",
		"state" : false,
		'descript' : 'include the insurance details',
		'priority' : '2'
	}, {
		"task" : "Fix the table",
		"state" : true,
		'descript' : 'Change the color too',
		'priority' : '4'
	} ];

	// $scope.saveData = function(x,y){$scope.doLts.push(
	// {'task':x,'state':false,'descript':y});};
	$scope.saveData = function(x, y, z) {
		var temp = {};
		temp.task = x;
		temp.state = false;
		temp.descript = y;
		if (z == null) {
			temp.priority = 5;
		} else {
			temp.priority = z;
		}

		$scope.doLts.push(temp);
	};

	$scope.totalA = ($scope.doLts.length);

	$scope.work = function(rt) {
		if (rt == 3) {
			$scope.changA = {};
		}
		if (rt == 2) {
			$scope.changA = {
				state : false
			};
		}
		if (rt == 1) {
			$scope.changA = {
				state : true
			};
		}
	};

	$scope.counterA = function() {
		var count = 0;
		for (var i = 0; i <= 5; i++) {
			if ($scope.doLts[i].state) {
				count++;
			}
		}
		return (count);
	}

	/*$scope.counterA = function() {
	    var count = 0;
	    angular.forEach($scope.doLts, function(item){
	        count += state.isSelected ? 1 : 0;
	    });
	    return count; 
	}*/
	
	$scope.hoverItem = function(inp) {
		$scope.despB = inp;
	}
});
