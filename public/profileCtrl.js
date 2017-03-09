angular.module('userProfiles')
.controller('profileCtrl', function( $scope,friendService ) {
	// FIX ME - assign values to $scope.currentUser and $scope.friends
    friendService.getFriends().then(function(res){
        $scope.friends = res.data.friends
        $scope.currentUser = res.data.currentUser
        console.log(res.data.friends);
        console.log($scope.friends);
    })
});
