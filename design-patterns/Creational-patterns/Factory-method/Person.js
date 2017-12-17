let Person = function(name) {
    this.name = name || 'Default name';
}

Person.prototype = {
    setAsEmployee : function () {
        console.log(this.name + ' is now a employee');
    },
    setAsAdmin : function () {
        console.log(this.name + ' is now a admin');
    }
}