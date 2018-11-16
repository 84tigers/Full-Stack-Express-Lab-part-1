"use strict";
function ListService($http) {
    const self = this;
    self.getItems = () => {
        return $http({
            method: "GET",
            url: "/items"
        });
    };
};

angular
    .module("ShoppingCart")
    .service("ListService", ListService);