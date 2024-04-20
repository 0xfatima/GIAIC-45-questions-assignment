//Task 21

function employee(name:string, id:number, position:string){
    let person={
        personName:name,
        personId:id,
        personPosition: position,
    }
    return person;
}


console.log(employee("John Doe",23, "manager"));

//Task 22
//will get an error of index out of bound because this program is trying to accessa  an index in the array which does not exist
// let anArr=[1,4,2,4,5,6]
// for(let i=0;i<=anArr.length;i++){
//     console.log(anArr[i]);
// }


//Task 23

let elective = 'computer Science';

console.log(`${elective == 'computer Science'? "I predict True.":"I predicted not true"}`)

console.log(elective == 'computer Science')

if(elective==="computer"){
    console.log("true");
}else{
    console.log("false");
    
}

switch (elective) {
    case "computer":
        console.log("computer is elective");
        
        break;
    case "computer Science":
        console.log("computer Science is elective");
        break;
    default:
        console.log("default called");
        
        break;
}

//Task 24
let str1="true",str2="True"
if(str1 === str2){
    console.log("True");
}else{
    console.log("False");   
}

if(str1.toLowerCase() === str2.toLowerCase()){
    console.log("True");
}else{
    console.log("False");   
}
let num1= 34, num2=56, num3=25, num4=25
if(num1>num2){
    console.log(`${num1} is greater`);    
}else if(num1>num2){
    console.log(`${num2} is greater`);
}

if(num3>=num4){
    console.log(`${num3} is greater than or equal to ${num4}`); 
}else if(num3<=num4){
    console.log(`${num3} is less than or equal to ${num4}`); 
}
else if(num3===num4){
    console.log(`${num3} and ${num4} are equal`); 
}

let color1 = "red", color2= "green";

if(color1==="red" && color2==="red"){
    console.log("True"); 
}else{
    console.log("False");   
}

if(color1==="red"|| color2==="red"){
    console.log("True");
}else{
    console.log("False");   
}

let anArr=[1,4,2,4,5,6]

for(let i=0;i<anArr.length;i++){
    if(anArr[i]==6){
        console.log(`6 is at index ${i}`);
    }else if(anArr[i]!=5 && i==anArr.length-1){
        console.log(`item not found`);
    }
}

for(let i=0;i<anArr.length;i++){
    if(anArr[i]==5){
        console.log(`5 is at index ${i}`);
    }else if(anArr[i]!=5 && i==anArr.length-1){
        console.log(`item not found`);
    }
}

//Task 25
let alien_color= "green";
if(alien_color==="green"){
    console.log("player just earned 5 points");   
}

if(alien_color!="green"){ 
}

//Task 26

if(alien_color==="green"){
    console.log("the player just earned 5 points for shooting the alien");  
}else{
    console.log(" that the player just earned 10 points");
    
}
alien_color="red";
if(alien_color==="green"){
    console.log("the player just earned 5 points for shooting the alien");  
}else{
    console.log(" that the player just earned 10 points");
    
}

//Task 27

if(alien_color==="green"){
    console.log("player earned 5 points");
}else if(alien_color==="yellow"){
    console.log("player earned 10 points");
}else if(alien_color==="red"){
    console.log("player earned 15 points");
}
alien_color="green";
if(alien_color==="green"){
    console.log("player earned 5 points");
}else if(alien_color==="yellow"){
    console.log("player earned 10 points");
}else if(alien_color==="red"){
    console.log("player earned 15 points");
}
alien_color="yellow";
if(alien_color==="green"){
    console.log("player earned 5 points");
}else if(alien_color==="yellow"){
    console.log("player earned 10 points");
}else if(alien_color==="red"){
    console.log("player earned 15 points");
}

//Task 28
let age = 34
if(age<2){
    console.log("Person is a baby");
}else if(age>=2 && age <4){
    console.log("Person is a toddler");
}else if(age>=4 && age <13){
    console.log("Person is a kid");
}else if(age>=13 && age <20){
    console.log("Person is a teenager");
}else if(age>=20 && age <65){
    console.log("Person is an adult");
}else if(age>65){
    console.log("person is an elder");
}

// Task 29

let favoriteFruits=["apple", "orange", "banana"];
for( let i=0;i<favoriteFruits.length;i++){
    if(favoriteFruits[i]==="apple"){
        console.log("you really like apples");     
    }
    if(favoriteFruits[i]==="orange"){
        console.log("you really like oranges");     
    }
    if(favoriteFruits[i]==="banana"){
        console.log("you really like bananas");     
    }
    if(favoriteFruits[i]!="watermelon"){
        console.log("you don't like watermelon?");     
    }
    if(favoriteFruits[i]!="pear"){
        console.log("you don't like pear?");     
    }
}
