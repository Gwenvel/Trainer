class ProductController {
    constructor($productService,$stateParams,$state) {
        let id = $stateParams["id"];
        this.product = $productService.getProduct(id);
        this.productService = $productService;
        this.state = $state;
        this.id = id;
    }
    deleteProduct(){
        this.productService.toDelete(this.id,res=> {
        this.state.go("products");
        });
    }
}