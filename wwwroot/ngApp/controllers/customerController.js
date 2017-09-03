class CustomerController {
    constructor($customerService,$stateParams) {
        this.message = "The info on this is:";
        let id = $stateParams["id"];
        this.customer = $customerService.getCustomer(id);
    }
}