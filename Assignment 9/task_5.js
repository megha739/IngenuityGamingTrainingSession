function my_string(string){
    var str=string;
    if(str.length<3){
        return str;
    }
    var start =str.substring(0,3);
    var end=str.substring(str.length-3,str.length+1);
    var my_srting=start+end;
    return my_srting;
}
console.log(my_string("abcd"));
console.log(my_string("ab"));