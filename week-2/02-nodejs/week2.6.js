const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//filter

function filter(n){
    if (n%2 == 0) return true;
    return false;
}

const newArr = arr.filter(filter);
console.log(newArr);