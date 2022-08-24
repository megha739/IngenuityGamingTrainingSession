var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
 window.onload = function() {
   setTimeout(function(){ 
    stoploader();
    modal.style.display = "block";
    }, 3500);
 };
function stoploader(){ 
    document.getElementById("loader-wrapper").style.display="none";
document.getElementById("content").style.display="block";
}
// When the user clicks on  (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  document.getElementById("data").style.display="block";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById("data").style.display="block";
  }
}
// var internetStatus = document.getElementById("internet");
// window.addEventListener('load', function(event){
//     detectInternet();
// });
// window.addEventListener('online', function(event){
//     detectInternet();
// });
// window.addEventListener('offline', function(event){
//     detectInternet();
// });
// function detectInternet(){
//   if(navigator.onLine){
//      internetStatus.textContent="You are  online";
//      internetStatus.style.backgroundColor="green";
//   }else{
//     internetStatus.textContent="No Internet Connection";
//     internetStatus.style.backgroundColor="red";
//   }
// }