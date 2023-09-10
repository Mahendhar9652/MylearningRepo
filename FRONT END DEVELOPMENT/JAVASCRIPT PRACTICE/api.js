let btn = document.getElementById("btn");
let data = document.getElementById("data");


btn.addEventListener('click' ,function(){
    fetch("hi.txt").then(function(reponse){
        reponse.text().then(function(datas){
          data.innerText = datas;

        });
    });
});
.catch(function(error){
    console.log("FAILED TO LOAD DATA"+error);
});