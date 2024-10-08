function praimpar(n){
    if(n%2==0){
        return 'par';
    } else {
        return 'ímpar';
    }
}

let res = praimpar(4);
console.log(res);