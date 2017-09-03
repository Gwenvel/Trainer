class CustomerService {
    constructor($resource) {
        this.customers = $resource("/api/Customers/:id");

    }
    getCustomers(){
        return this.customers.query();
    }
    getCustomer(id){
        return this.customers.get({id:id});
    }
}