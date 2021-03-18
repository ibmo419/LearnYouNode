// First method:
function add(a,b) {return Number(a)+Number(b);}
console.log((process.argv.slice(2).reduce(add)));
// Second method:
// var total=0;
// for(i=2;i<process.argv.length;i++){
//     total+=Number(process.argv[i]);
// }
// console.log(total);