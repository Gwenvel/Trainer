class AddProductController {
    constructor($state,$productService) {
        this.productService = $productService;
        this.state = $state;
        this.product = {
            name: "",
            description: "",
            price: 0
        }
    }
    addProduct(){
        this.productService.addProduct(this.product, res=> {
            this.state.go("products");
        })
    }
}