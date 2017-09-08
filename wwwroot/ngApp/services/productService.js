class ProductService {
    constructor($resource) {
        this.productResource = $resource("/api/products/:id");
    }
    getProducts(){
        return this.productResource.query();
    }
    addProduct(product,callback){
        this.productResource.save(product,callback);
    }
    getProduct(id){
        return this.productResource.get({id:id});
    }
    toDelete(id,callback){
       this.productResource.remove({id: id},callback);

    }
}
