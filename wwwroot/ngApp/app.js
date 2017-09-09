var myApp = angular.module("myApp", [ "ui.router", "ngResource" ]);
myApp.controller("MainController", MainController);

myApp.controller("ComputersController", ComputersController);
myApp.controller("AddComputerController", AddComputerController);
myApp.controller("EditComputerController", EditComputerController);

myApp.controller("ProductController", ProductController);
myApp.controller("ProductsController", ProductsController);
myApp.controller("AddProductController", AddProductController);

myApp.service("$productService", ProductService);
myApp.service("$computerService", ComputerService);

myApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "/ngApp/views/main.html",
            controller: MainController,
            controllerAs: "controller"

        }).state("computers", {
            url: "/computers/:id",
            templateUrl: "/ngApp/views/computers.html",
            controller: ComputersController,
            controllerAs: "controller"
        }).state("addComputer", {
            url: "/addComputer",
            templateUrl: "/ngApp/views/addComputer.html",
            controller: AddComputerController,
            controllerAs: "controller"
        }).state("editComputer", {
            url: "/editComputer/:id",
            templateUrl: "/ngApp/views/editComputer.html",
            controller: EditComputerController,

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