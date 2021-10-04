//Assignment no1
let myname = "Nakimuli Mary Susan ";
let myage=21;
let anyname="Daisy";
let item="Sarah";
let item2="Maggie"
let age=myage+2;
let age2=age+3;
let age3=myage+4;
function biodata() {
   console.log('My name is '+ myname )
   console.log('I am ' + myage +' years old.')
   console.log( anyname, 'is ' + age + ' years old.')
   console.log(item, 'is ' + age2 + ' years old.')
   console.log(item2, 'is ' + age3 + ' years old.')
   
    

}
biodata(5)
console.log(biodata(5))
console.log(biodata(5))
console.log(biodata(5))
console.log(biodata(5))

//Nested function-assignment 2
let currentyear=2021;
function lastyear() {
    function currentyear() {
          }
    return (lastyear(2));
  }
  lastyear= (currentyear-1);
  console.log('Last year was ',lastyear);
  
//Assignment n0.3
let multiply= (x , y) => x * y;

console.log(multiply(10, 2));

console.log(typeof multiply);

//no4
let  num = 1;
let country=20;
    for( num < country; num++;){

console.log("I LOVE UGANDA!!",country);
    }
