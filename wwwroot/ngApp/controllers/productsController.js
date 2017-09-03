class ProductsController {
    constructor($productService,$state) {
        this.message = "These are our Products";
        this.products = $productService.getProducts();
        this.state = $state;
    }
    click(id){
        this.state.go("product",{id:id});
    }
}