class ProductService {
    constructor($resource) {
        this.products = $resource("/api/Products/:id");

    }
    getProducts(){
        return this.products.query();
    }
    getProduct(id){
        return this.products.get({id:id});
    }
}