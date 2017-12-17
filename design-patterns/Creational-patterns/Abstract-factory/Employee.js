var Employee = function(name) {
    this.name = name
}

Employee.prototype = {
    walk : function () {
        console.log(this.name + " is walking ");
    }
}