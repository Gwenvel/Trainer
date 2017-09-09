class ComputerService {
    constructor($resource, $stateParams) {
        this.computerResource = $resource("/api/Computers/:id", null, {"update": {method: "PUT", URL: "/api/computers/:id/body"}});
    }
    getComputers() {
        return this.computerResource.query();
    }
    getComputer(id) {
        return this.computerResource.get({id: id});
    }
    add(computer, callback) {
        this.computerResource.save(computer, callback);

    }
    edit(id, computer, callback) {
        this.computerResource.update({id:id}, computer, callback);
    }
    del(id, callback) {
        this.computerResource.remove({id: id}, callback);
    }
    // edit(id, computer, success, error) {
    //     computer.computerId = id;
    //     this.computerResource.save(computer, success, error);
    // }
}