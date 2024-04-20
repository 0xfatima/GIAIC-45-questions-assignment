import inquirer from "inquirer";
//Task 11
let names = ["jack", "John", "angela", "doe"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
//Task 12
names.forEach(name => {
    console.log(`Hi ${name}, how're you doing today?`);
});
//Task 13
let transportation = ["car", "bike", "bus", "truck"];
console.log(`I like driving ${transportation[0]}`);
console.log(`My friend rides ${transportation[1]}`);
console.log(`${transportation[3]} art of Pakistan is very famous accross the world`);
//Task 14
let invitees = ["ellen", "sara", "brad", "bauer"];
invitees.forEach(invitee => {
    console.log(`Hi ${invitee}, I would like to invite you to dinner`);
});
//Task 15
console.log(`${invitees[3]} can't make it to dinner`);
invitees[3] = "peter";
invitees.forEach(invitee => {
    console.log(`Hi ${invitee}, I would like to invite you to dinner`);
});
//Task 16
console.log("Hey guys, we found a bigger dinning table");
let mid = invitees.length / 2;
invitees.push("nick");
invitees[mid] = "erica";
invitees.unshift("zara");
invitees.forEach(invitee => {
    console.log(`Hi ${invitee}, I would like to invite you to dinner`);
});
//Task 17
console.log("since the table has not arrived yet, I am very sorry to inform you that only two guests will be invited");
while (invitees.length != 2) {
    let del = invitees.pop();
    console.log(`sorry ${del}, I won't be able to invite you`);
}
let invite19 = invitees;
invitees.forEach(person => {
    console.log(`${person}, you are invited to dinner`);
});
while (invitees.length > 0) {
    invitees.pop();
}
console.log(invitees);
//Task 18
let places = ["Banff National Park", "Cappadocia", "Lake Bled", "Cameron Highlands", "Amazon",];
console.log(places);
let sortedArr = places.sort();
console.log(sortedArr);
console.log(places);
console.log(sortedArr.reverse());
console.log(places);
console.log(places.reverse());
console.log(places.reverse());
console.log(places.sort());
console.log(places.reverse());
//Task 19
console.log(`${invite19.length} people are being invited`);
//Task 20
let answer = await inquirer.prompt({
    name: "mountains",
    type: "input",
    message: 'write names of mountains and give space between each name: ',
    filter: function (input) {
        return input.split(" ").map((name) => {
            return name.trim();
        });
    }
});
console.log(answer.mountains);
