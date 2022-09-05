function add(...input:number[]){
    let sum = 0;
    let i:number;
    for( i of input){
        sum+=i;
    }
    return sum;
}

console.log(add(1,2)); 
console.log(add(1,2,3)); 
console.log(add(1,2,3,4,5)); 