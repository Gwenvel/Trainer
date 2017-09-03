class CustomersController {
    constructor($customerService,$state) {
        this.message = "These are our Customers";
        this.customers = $customerService.getCustomers();
        this.state = $state;
    }
    click(id){
        this.state.go("customer",{id:id});
    }

}