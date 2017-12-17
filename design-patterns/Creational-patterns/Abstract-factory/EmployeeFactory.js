function EmployeeFactory() {
    this.create = function(name) {
        return new Employee(name);
    }
}