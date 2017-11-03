'use strict'

(function(){

var app = angular.module('app');

app.controller('KeywordsController', function($scope, RepositoryFactory, resolveEntity){


/* == Frontend Initialization == */

/* All of this happens as soon as the page loads */

/* resolveEntity is a helper function which is used in partials/keywordCategoryGridCell.html

in order to display the name of a keyword category based on its id */
$scope.resolveEntity = resolveEntity;

/* A repository is the connection between this controller and the REST Api.
We use one for keyword categories... */
var KeywordCategoriesRepository = new RepositoryFactory({
	endpoint: 'keywords/categories',
	retrieveItems: function(data){
		return data._items;
	}
});

/* ...and one for keywords */
var KeywordsRepository = new RepositoryFactory({
	endpoint: 'keywords',
	retrieveItems: function(data){
		return data._items;
	}
});

// More to be added


});

})();