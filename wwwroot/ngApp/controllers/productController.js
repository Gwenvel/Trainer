class ProductController {
    constructor($productService,$stateParams) {
        this.message = "The info on this is:";
        let id = $stateParams["id"];
        this.product = $productService.getProduct(id);
    }
}