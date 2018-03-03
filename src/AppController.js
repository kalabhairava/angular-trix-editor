function AppController($scope, $sce) {
	$scope.text = ' ';

	$scope.getTrustedHtml = html => $sce.trustAsHtml(html);
}

module.exports = AppController;
