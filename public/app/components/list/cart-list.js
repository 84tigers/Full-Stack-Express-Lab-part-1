"use strict";
const cartList = {
    template: `
    <p>{{ $ctrl.cart[1].product }}</p>
    `,
    controller: ["CartService", function(CartService) {
        const vm = this;
        
        CartService.getAllItems().then((response) => {
            console.log(response);
            vm.cart = response.data;
        });
        
    }]
};

angular
    .module("ShoppingCart")
    .component("cartList", cartList);