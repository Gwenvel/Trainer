var myApp = angular.module("myApp", [ "ui.router", "ngResource" ]);
myApp.controller("MainController", MainController);
myApp.controller("ProductController", ProductController);
myApp.controller("ProductsController", ProductsController);
myApp.controller("AddProductController", AddProductController);
myApp.service("$productService", ProductService);

myApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "/ngApp/views/main.html",
            controller: MainController,
            controllerAs: "controller"
        }).state("products", {
            url: "/products",
            templateUrl: "/ngApp/views/products.html",
            controller: ProductsController,
            controllerAs: "controller"
        }).state("product", {
            url: "/product/:id",
            templateUrl: "/ngApp/views/product.html",
            controller: ProductController,
            controllerAs: "controller"
        }).state("addProduct", {
            url: "/addProduct",
            templateUrl: "/ngApp/views/addProduct.html",
            controller: AddProductController,
            controllerAs: "controller"
        });

    // Handle request for non-existent route
    $urlRouterProvider.otherwise("/notFound");

    // Enable HTML5 navigation
    $locationProvider.html5Mode(true);
});