function aadiAsync(){
    let p = new Promise(function(resolve){
        resolve('Hello World');
    });
    return p;
}

async function main(){
    const value = await aadiAsync(); // remove await and see the difference
    console.log(value); 
}

main();