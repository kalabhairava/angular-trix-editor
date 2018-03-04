require('angular');
require('angular-trix');
require('angular-sanitize');
require('firebase');
require('angularfire');

const AppController = require('./AppController');

const app = angular
	.module('app', ['angularTrix', 'ngSanitize', 'firebase'])
	.controller('appController', AppController);
