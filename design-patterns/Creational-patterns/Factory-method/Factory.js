let Factory = function() {
    this.personTypes = {
        employee : function () {            
            return new Person('You').setAsEmployee();
        },
        admin : function () {
            return new Person('Me').setAsAdmin();
        }
    }

    this.animalTypes = {
        cat : function () {
            return new Animal().setAsCat();
        },
        dog : function () {
            return new Animal().setAsDog();
        }
    }
}

Factory.prototype = {
    createPerson : function(personType) {
        this.personTypes[personType]();
    },
    createAnimal : function(animalType) {
        this.animalTypes[animalType]();
    }
}