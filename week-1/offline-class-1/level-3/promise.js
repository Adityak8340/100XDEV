let p = new Promise(function(resolve){
    resolve('Hello World');
})

p.then(function(){
    console.log(p);
})