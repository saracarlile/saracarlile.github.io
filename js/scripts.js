var app = angular.module('wikipediaViewer', []);

app.factory('wikiService', function ($http) {
    var wikiService = {
        get: function (titles) {
            return $http.jsonp("https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch=" + encodeURIComponent(titles.name.toLowerCase()) + "&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=2&exlimit=max&callback=JSON_CALLBACK");
        }
    };
    return wikiService;
});


app.controller('wikiController', function ($scope, wikiService) {

    var elm = document.querySelector('input');

    $scope.search = function () {

        document.getElementById('error-container').style.display = "none";
        document.getElementById('error-text').textContent = "";
        elm.className = "flex-item-grow-1";  //clear placeholder text color css on input

        function successCallback(data) {
            if (!data.data.hasOwnProperty("query")) {
                $scope.wikiData = "";
                var myEl = angular.element(document.getElementById("rrr"));
                myEl.remove();
                document.getElementById('error-container').style.display = "block";
                document.getElementById('error-text').textContent = "You received no results for your query.";
            }
            else {
                $scope.wikiData = data.data.query.pages;
            }
        }
        function errorCallback(error) {
             $scope.wikiData = "";
            var myEl = angular.element(document.getElementById("rrr"));
            myEl.remove();
            document.getElementById('error-container').style.display = "block";
            document.getElementById('error-text').textContent = "You received an error during the API request.";
        }


        if (elm.value.length > 0) {   //make sure input box has text
            wikiService.get({ name: elm.value }).then(successCallback, errorCallback);
        }
        else {
            $scope.wikiData = "";
            var myEl = angular.element(document.getElementById("rrr"));
            myEl.remove();
            document.getElementById('error-container').style.display = "block";
            document.getElementById('error-text').textContent = "Please add search term to input box.";
        }

    };

    $scope.random = function () {
        elm.className = "flex-item-grow-1 ";
    };

    $scope.clearSuggestedText = function () {
        elm.placeholder = "";
        elm.className = "flex-item-grow-1 ";
    };

});



//Wiki API call help Stack Overflow 
//http://stackoverflow.com/questions/25891076/wikipedia-api-fulltext-search-to-return-articles-with-title-snippet-and-image

