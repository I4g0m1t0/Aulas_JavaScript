let num = [0, 4, 8, 9];

num.push(1);
num.sort();

console.log(num);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro valo do vetor é ${num[0]}`);

let pos = num.indexOf(8);
console.log(`O valor 8 está na posição ${pos}`);