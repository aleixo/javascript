const Person = function(personConfig) {        
    if (!personConfig) {
        return
    }
    this.firstName = personConfig.firstName || 'First';
    this.lastName = personConfig.lastName || 'Last';
}

Person.prototype = {
    say : function() {
        console.log('My name is ' +this.firstName + ' ' + this.lastName);
    }
}