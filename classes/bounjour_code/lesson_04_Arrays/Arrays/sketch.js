//define an array 
//empty vs filled array
let collection1 = [1, 2, 3, 4, 5, 6];
let collection2 = [];
console.log(collection1, collection2);
// fill an empty array
collection2.push(1);
// delete element from array
collection1.splice(3, 1);
console.log(collection1, collection2);
// make more example with strings
// loop through an array
for(let i = 0; i < collection1.length; i++){
  console.log('using the index i ' + i + ': ', collection1[i]);
}

for(let element of collection1){
  console.log('without index', element);
}