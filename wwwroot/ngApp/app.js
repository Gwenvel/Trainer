var myApp = angular.module("myApp", [ "ui.router", "ngResource" ]);
myApp.controller("MainController", MainController);
myApp.controller("BooksController", BooksController);
myApp.controller("BookController", BookController);
myApp.controller("CatController", CatController);
myApp.controller("CatsController", CatsController);
myApp.controller("ComputerController", ComputerController);
myApp.controller("ComputersController", ComputersController);
myApp.controller("CustomersController", CustomersController);
myApp.controller("CustomerController", CustomerController);
myApp.controller("DogController", DogController);
myApp.controller("DogsController", DogsController);
myApp.controller("ProductController", ProductController);
myApp.controller("ProductsController", ProductsController);

myApp.service("$productService", ProductService);
myApp.service("$dogService", DogService);
myApp.service("$computerService", ComputerService);
myApp.service("$customerService", CustomerService);
myApp.service("$catService", CatService);
myApp.service("$bookService", BookService);

myApp.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "/ngApp/views/main.html",
            controller: MainController,
            controllerAs: "controller"
        }).state("books", {
            url: "/books",
            templateUrl: "/ngApp/views/books.html",
            controller: BooksController,
            controllerAs: "controller"
        }).state("book", {
            url: "/book/:id",
            templateUrl: "/ngApp/views/book.html",
            controller: BookController,
            controllerAs: "controller"
        }).state("cats", {
            url: "/cats",
            templateUrl: "/ngApp/views/cats.html",
            controller: CatsController,
            controllerAs: "controller"
        }).state("cat", {
            url: "/cat/:id",
            templateUrl: "/ngApp/views/cat.html",
            controller: CatController,
            controllerAs: "controller"
        }).state("computers", {
            url: "/computers",
            templateUrl: "/ngApp/views/computers.html",
            controller: ComputersController,
            controllerAs: "controller"
        }).state("computer", {
            url: "/computer/:id",
            templateUrl: "/ngApp/views/computer.html",
            controller: ComputerController,
            controllerAs: "controller"
        }).state("customers", {
            url: "/customers",
            templateUrl: "/ngApp/views/customers.html",
            controller: CustomersController,
            controllerAs: "controller"
        }).state("customer", {
            url: "/customer/:id",
            templateUrl: "/ngApp/views/customer.html",
            controller: CustomerController,
            controllerAs: "controller"
        }).state("dogs", {
            url: "/dogs",
            templateUrl: "/ngApp/views/dogs.html",
            controller: DogsController,
            controllerAs: "controller"
        }).state("dog", {
            url: "/dog/:id",
            templateUrl: "/ngApp/views/dog.html",
            controller: DogController,
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
        });

    // Handle request for non-existent route
    $urlRouterProvider.otherwise("/notFound");

    // Enable HTML5 navigation
    $locationProvider.html5Mode(true);
});