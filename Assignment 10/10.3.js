var a=0
var func=setInterval(function(){
    document.write("This is Assignment 10, Task 3"+"<br>");
    a++;
    if(a==5){
        clearInterval(func)
    }
},3000);