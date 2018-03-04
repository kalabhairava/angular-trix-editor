function AppController($scope, $sce, $firebaseObject) {
	// connect to realtime database provided by firebase
	const config = {
		apiKey: 'AIzaSyBtjX7PjxVParlqQMtdBoWcDqFd5LGpF1o',
		authDomain: 'angular-trix-editor.firebaseapp.com',
		databaseURL: 'https://angular-trix-editor.firebaseio.com',
		projectId: 'angular-trix-editor',
		storageBucket: 'angular-trix-editor.appspot.com',
		messagingSenderId: '911255086061'
	};

	firebase.initializeApp(config);
	const ref = firebase.database().ref();
	$scope.data = $firebaseObject(ref.child('data'));
	// syncObject.$bindTo($scope, 'data');
}

module.exports = AppController;
