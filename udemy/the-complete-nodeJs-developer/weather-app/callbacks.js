var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Diogo'
    };
    setTimeout(() => {
        callback(user);
    },1000);    
};

getUser(2,(user) => {
    console.log(user);
});