(function(module) {
    "use strict";

    var setupDom = function(element) {
        var input = element.querySelector("input");
        var type = input.getAttribute("type");
        var name = input.getAttribute("name");
        if (type !== "checkbox" && type !== "radio") {
            input.classList.add("form-control");
        }


        element.classList.add("form-group");
        return name;
    };

    //<div class='okicon' ng-if='" + form.$name + "." + name +".$valid'><svg><use xlink:href='assets/svgs/circulartick.svg#tick'></use></svg></div>

    var addMessages = function(form, element, name, $compile, scope) {
        var messages = "<div class='help-block' ng-messages='" +
            form.$name + "." + name + ".$error" +
            "'><div ng-messages-include='common/views/formmessage.html' ng-if='" +
            form.$name + "." + name + ".$dirty'></div></div>";

        element.append($compile(messages)(scope));
    };
    var watcherFor = function(form, name) {
        return function() {
            if (name && form[name]) {
                return form[name].$invalid;
            }
        }
    }
    var link = function($compile, $document) {
        return function(scope, element, attributes, form) {
            var name = setupDom(element[0]);
            addMessages(form, element, name, $compile, scope);
            scope.$watch(watcherFor(form, name));



        };
    };

    forminput.$inject = ['$compile', '$document'];

    function forminput($compile, $document) {

        return {
            restrict: "A",
            require: "^form",
            link: link($compile)
        };

    };


    module.directive('forminput', forminput);

})(angular.module('MyPortfolio.Directives'));