(function() {
    console.log('IEF');

    const employees = [];
    const employeeFactory = new EmployeeFactory();

    employees.push(employeeFactory.create('Diogo'));
    employees.push(employeeFactory.create('Aleixo'));

    employees.forEach((employee) => {
        employee.walk();
    })
}());