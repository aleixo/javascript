let Animal = function(name) {
    this.name = name || 'New animal';
}

Animal.prototype = {
    setAsCat : function () {
        console.log(this.name + ' is a cat');
    }, 
    setAsDog : function () {
        console.log(this.name + ' is a dog');
    }
}