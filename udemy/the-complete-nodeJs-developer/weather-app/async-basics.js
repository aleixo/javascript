//CALL STACK
console.log('Starting app');

//CALL STACK
setTimeout(() => {
    //NODE API para a call satck continuar a fazer o seu trabalho
    console.log('Inside callback')
}, 2000);

//CALL STACK
setTimeout(() => {
    //NODE API para a call satck continuar a fazer o seu trabalho
    console.log('Inside callback two')
    //CALLBACK QUEUE- É onde os callbacks esperam para correr na callback queue
    //O event loop é que vai ver quando podemos correr na call stack pois a call 
    //stack só pode correr um processo por vez
    //Por isso é que isto só cprre depois do proximo log
}, 0);

console.log('Finishing app');

/** 
 * Call stack fala com as APIS de node que falam com a queue de callback que fala com a call stack 
 * 
 * Call stack
 * 
 * - começa com a funç\ao main depois faz as cenas que tem de fazer
 */