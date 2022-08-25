function add() {
    var sum=0;
        for(var i=0;i<arguments.length;i++){
            sum += arguments[i];
}
return "sum is "+sum;
       }        
console.log(add());
console.log(add(1));
console.log(add(1,2));
console.log(add(1,2,3));
console.log(add(1,2,3,4));
console.log(add(1,2,3,4,5));