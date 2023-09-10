let btn = document.getElementById("special");
let dataele = document.getElementById("data");

btn.addEventListener('click',data);


function data(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','details.json',true);

    xhr.send();

    xhr.onprogress = function(){
        dataele.innerText = "loading"
    }
    xhr.onload =function(){
     let result = xhr.responseText;
     result = JSON.parse(result);
     console.log(result);
   let str = '<table><tr>'
   for (key in  result){
    str = str + '<th>${key}</th>'
   }
str =str +'</tr><tr>'
   for (key in  result){
    str = str + '<td>${result.[key]}</td>'
   }

   str =str+ '</tr></table>'
   dataele.innerHTML = str;

    }
    
}