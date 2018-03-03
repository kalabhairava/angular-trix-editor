require('angular');
require('angular-trix');
require('angular-sanitize');

const AppController = require('./AppController');

const app = angular
	.module('app', ['angularTrix', 'ngSanitize'])
	.controller('appController', AppController);
