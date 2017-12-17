(function() {
    const prototype = new Person({
        firstName : 'Diogo',
        lastName : 'Aleixo'
    });

    const personPrototype = new PersonPrototype(prototype);
    const user1 = personPrototype.clone();
    user1.say();    
}());