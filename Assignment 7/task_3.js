var person = {
    name: "abc",
    age: 20,
    address: {city: "Noida" , state: "U.P." , pincode : 123456 },
    hobies:["a","b"],
    Person_details : function(){return "I am "+ this.name + " from "+ this.address.city+ " in "+this.address.state + ", I am "+this.age+" years old"}

}
console.log("Hello, "+person.Person_details());
console.log("My hobies are -: "+person.hobies);
console.log("My area pincode is -: "+person.address.pincode);