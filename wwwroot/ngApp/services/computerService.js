class ComputerService {
    constructor($resource) {
        this.computers = $resource("/api/Computers/:id");

    }
    getComputers(){
        return this.computers.query();
    }
    getComputer(id){
        return this.computers.get({id:id});
    }
}