"use strict";
function CartService($http) {
    const self = this;
    self.getAllItems = () => {
        return $http({
            method: "GET",
            url: "/cart-items"
        });
    };
    self.addItem = (newItem) => {
        return $http({
            method: "POST",
            url: "/cart-items",
            data: newItem
        });
    };
    self.removeItem = (id) => {
        return $http({
            method: "DELETE",
            url: `/cart-items${id}`,
        });
    };
    self.updateItem = (editedItem) => {
        return $http({
            method: "PUT",
            url: `/cart-items/${editedItem.id}`,
            data: editedItem
        });
    };
};

angular
    .module("ShoppingCart")
    .service("CartService", CartService);