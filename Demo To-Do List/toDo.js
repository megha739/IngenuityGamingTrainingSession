//selector
var todoinput=document.querySelector(".todo-input");
var btn=document.querySelector("button");
var todolist=document.querySelector(".todo-list");

btn.onclick=function createTodo(e){
    e.preventDefault();
    var newDiv=document.createElement("div");
    newDiv.classList.add("todo");

    var newli=document.createElement("li");
    newli.classList.add("todo_item");
    newli.innerHTML=todoinput.Value;
    newDiv.appendChild(newli);

    var cmpltbtn=document.createElement("button");
    cmpltbtn.classList.add("cmpltbtn");
    cmpltbtn.innerHTML='<i class="fa fa-check"></i>';
    newDiv.appendChild(cmpltbtn);

    var deltbtn=document.createElement("button");
    deltbtn.classList.add("deltbtn");
    deltbtn.innerHTML='<i class="fa fa-trash"></i>';
    newDiv.appendChild(deltbtn);
    //todolist.appendChild(newDiv);

    todolist.appendChild(newDiv);
    todoinput.Value=" ";


};
todolist.onclick=function checkBtn(e){
    var check=e.target;

    if(check.classList[0]=='deltbtn'){
        var parentNode=check.parentElement;
        parentNode.remove();

    }
    else if(check.classList[0]=='cmpltbtn'){
        var parentNode=check.parentElement;
        parentNode.classList.add("check");


    }
}