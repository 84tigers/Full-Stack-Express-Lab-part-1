"use strict";
const list = {
    template: `
    <p>test</p>
    `,
    controller: ["ListService", function(ListService) {
        const vm = this;
        vm.getItems = () => {
            ListService.getItems().then((response) => {
                console.log(response);
                vm.items = response.data;
            });
        };
    }]
};

angular
    .module("ShoppingCart")
    .component("list", list);