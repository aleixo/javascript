(function() {
    console.log('Will use Factory');
    const factory = new Factory();
    factory.createPerson('employee');
    factory.createPerson('admin');

    factory.createAnimal('cat');
    factory.createAnimal('dog');

}());