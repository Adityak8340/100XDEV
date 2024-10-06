function Table(a, fnToCall){
    console.log('Hello World');
    for(let i = 1; i <= 10; i++) {
        fnToCall(a, i);
    }
}

function PrintTable(a,i) {
    console.log(a, " * ", i, " = ", a*i);
}

Table(2, PrintTable); //callbacks 