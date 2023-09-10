


/*function numberGenaretor(n,x) {
    n = Math.floor(Math.random()*10000)
    x =
    return console.log(n);


    
}
numberGenaretor();*/
/*var x=10;

console.log(this);
function add() {
    
}
console.log(this.x);


function add(a,b){
    console.log(a+b);
}

function mult(a,b){
    console.log(a*b);
}
function cal(va1,val2 ,operation){
    operation(va1,val2);
}

cal(4,5,add);
cal(4,5,mult);

setTimeout(function(){

    console.log("firsts");
},2000);

console.log("second");*/


/*setInterval(timedisplay, 1000);

var p = document.getElementById("count");


function timedisplay(date){
 date = new Date;
 p.innerText =
 date.getHours()+":"+
 date.getMinutes()+":"+
 date.getSeconds();

}


async function test(){
    var x = await 7+8;
    console.log("inside fun");
    return x;
    
}
let res = test();
console.log("out");

res.then(function (data){
console.log(data);    
})

function tet(){
    let res = fetch("second.js");
    res.then(function(response){
        response.json().then(function (data){
            console.log(data);
            
        })

    })
    //let r =await res.text();
    //console.log(r);
    
}
tet();*/


var myDetails ={
    name:"mahi",
    age:22,
    adress:"bheemgal",
    edu:'degree',
    ph:9652261992,
    userName:"Mahendahr9652",
    pw:9652261992

    
}
let person2 = Object.create(myDetails);
person2.name ="mahi"; 




function user(id,name,age,place) {
    this.id = id;
    this.name=name;
    this.age =age;
    this.place=place
    this.login =function (){
        console.log('hello '+" "+ this.name +" "+'logged in successfully');
    }
}


let user1 =new user(1,"mahi",25,"hyderabad");

let user2 = new user(2,"hari",22,"bhemmgal")






    
    console.log(Object.values(user1));