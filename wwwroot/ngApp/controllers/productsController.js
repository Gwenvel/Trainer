class ProductsController {
    constructor($productService,$state) {
        this.products = $productService.getProducts();
        this.state = $state;
    }
    goToAdd(){
        this.state.go("addProduct");
    }
    goToDetails(id){
        this.state.go("product",{id:id});
    }
}