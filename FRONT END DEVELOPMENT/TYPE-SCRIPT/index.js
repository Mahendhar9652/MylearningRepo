//var employName:string ="john";
//var age:number =23;
//var auth:boolean=false;
//var fullName:readonly number[]=[8,8,5,9,8,65];
//fullName.push(6)
//var student:[string,number,boolean];
//student=['mahi',22,true];
//var student:(string|number)[];
//var student:[x:number , name:string] =[22,"mahi"]
//var student:[string,number] =["mahi",55];
//var [x, y] = student;
//var student ={
//  name:"Mahenshar"
//}
/*const students:{fullname:string,age:number,passedornot :boolean}={
    fullname:"mahendhar",
    age:22,
    passedornot:false

};
students.age=22;

console.log(students);

const car: { type: string, mileage?: number } = {
    type: "Toyota"
  };
  
  car.mileage = 2000;
  
  console.log(car);*/
//enum days{
//sun=202,mon,tue,wed,thur,fri,sat,
//}
//type student = string|number |boolean;
//let fullname :student ="mahi";
//let age:student=22;
//let passed:student=false;
/*interface student {
  name:string,
  age:number,
  passed:boolean

};
interface addres extends student {
  addres:string
}
const details:addres = {
  name:"mahendhar",
  age:22,
  passed:false,
  addres:"bheemgal"


}
function pintStatusCode(code:string|number) {
console.log("my statsCode "+code);
  
  
}
pintStatusCode(202);

*/
//function today():void{
//console.log("my name Mahendhar");
//}
//today();
/*function multi(a:number,b:number){
  return a*b;

  
}
var result:number = multi(4,5);
console.log(result);
*/
//var fullname:unknown =555;
var employeName = /** @class */ (function () {
    function employeName() {
    }
    employeName.prototype.display = function () {
        console.log(this.id);
        console.log(this.name);
        console.log(this.age);
    };
    return employeName;
}());
var employeeOne = new employeName();
employeeOne.id = 101;
employeeOne.name = "mahendhar";
employeeOne.age = 22;
employeeOne.display();
