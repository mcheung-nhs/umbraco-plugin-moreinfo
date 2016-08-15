angular.module("umbraco").controller("more_info.controller", function ($scope, notificationsService) {
    $scope.control.PluginHeader = $scope.control.Header ? $scope.control.Header : "More Info";
    $scope.control.UniqueId = $scope.control.$uniqueId;
});
