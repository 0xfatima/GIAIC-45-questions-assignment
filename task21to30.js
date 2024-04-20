//Task 21
// function employee(name:string, id:number, position:string){
//     let person={
//         personName:name,
//         personId:id,
//         personPosition: position,
//     }
//     return person;
// }
// console.log(employee("John Doe",23, "manager"));
//Task 22
//will get an error of index out of bound because this program is trying to accessa  an index in the array which does not exist
// let anArr=[1,4,2,4,5,6]
// for(let i=0;i<=anArr.length;i++){
//     console.log(anArr[i]);
// }
//Task 23
let elective = 'computer Science';
console.log(`Is ${elective == 'computer Science' ? "I predict True." : "I predicted not true"}`);
console.log(elective == 'computer Science');
if (elective === "computer") {
    console.log("true");
}
else {
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
export {};
