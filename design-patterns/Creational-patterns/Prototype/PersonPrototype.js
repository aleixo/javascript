/**
 * Constructs object person prototype with one instance of Person
 * This instance is itself one base prototype
 * @param {Objsec} proto 
 */
const PersonPrototype = function(proto) {
    this.proto = proto;
}

PersonPrototype.prototype = {
    /**
     * Clone one new person 
     */
    clone : function() {        
        const person = new Person();
        person.firstName = this.proto.firstName + ' proto' || '';
        person.lastName = this.proto.lastName  + ' proto' || '';        
        return person;
    }
}