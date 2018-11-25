"use strict";
const cartList = {
    templateUrl: "app/components/cart-list/cart-list.html",
    controller: ["CartService", function(CartService) {
        const vm = this;
        
        CartService.getAllItems().then((result) => {
            console.log(result);
            vm.cart = result.data;
        });
        vm.addItem = (newItem) => {
            CartService.addItem(newItem).then((result) => {
                vm.cart = result.data;
                vm.newItem.product = "";
                vm.newItem.price = "";
                vm.newItem.quantity = "";
            });
        };
        vm.removeItem = (id) => {
            CartService.removeItem(id).then((result) => {
                vm.cart = result.data;
            });
        };
        vm.updateItem = (editedItem) => {
            CartService.updateItem(editedItem).then((result) => {
                vm.cart = result.data;
            });
        };
    }]
};

angular
    .module("ShoppingCart")
    .component("cartList", cartList);