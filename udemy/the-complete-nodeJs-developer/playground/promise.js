var asyncAdd = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {            
            if (typeof a === 'number' &&  typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers')
            }
        }, 1500);
    });
}

var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {   
        resolve('Hey. it worked');        
        //Will not get called. Only one promise gets called     
        reject('unable');        
    }, 2000);    
});

somePromise.then((message) => {
    console.log('SUCESS: '+message);
}).catch((message) => {
    console.log('ERROR: '+message);
});

asyncAdd(5,7).then((sum) => {
    console.log('Result ->', sum);
    return asyncAdd(sum,33);
}).then((sum) => {
    console.log('Result 2 ->', sum);    
}).catch( (error) => {
    console.log('Error',error);
})