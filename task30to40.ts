//Task 30

let userNames=["Admin", "Eric", "Jessica", "Williams", "John", "Nick"];

for(let i= 0; i<userNames.length;i++){
    if(userNames[i]==="Admin"){
        console.log("Hello admin, would you like to see a status report?");     
    }else{
        console.log(`Hello ${userNames[i]}, thank you for logging in again.`);           
    }
}

//Task 31

userNames=[]

for(let i= 0; i<userNames.length;i++){
    if(userNames.length==0){
        console.log("We need to find some users!");
        break;
    }
    else if(userNames[i]==="Admin"){
        console.log("Hello admin, would you like to see a status report?");     
    }else{
        console.log(`Hello ${userNames[i]}, thank you for logging in again.`);           
    }
}
//Task 32

let currentUsers=["Eric", "Jessica", "Williams", "John", "Nick"],newUsers=["Doe", "Mathew","Jessica","Jenny","JOHN"]

for(let i=0;i<5;i++){
    let user= currentUsers[i].toLowerCase();
    for(let j=0;j<5;j++){
        if(newUsers[i].toLowerCase()===user){
            console.log("Username not avaiable, enter another name");
            continue;
        }else if( i== 4 && newUsers[i].toLowerCase()!=user){
            console.log("Username is available ")
        }
    }
}
// Task 33

for(let i= 1;i<10;i++){
    if(i==1){
        console.log(`${i}st`);    
    }else if(i==2){
        console.log(`${i}nd`); 
    }else if(i==3){
        console.log(`${i}rd`); 
    }else{
        console.log(`${i}th`);
    }
}

//Task 34

let pizza=["Carbonara", "pepperoni", "Hawaiian"]

for(let i=0;i<pizza.length;i++){
    console.log(pizza[i]+"\n");
}

for(let i=0;i<pizza.length;i++){
    console.log(`I love ${pizza[i]!}\n`);
}

console.log("I love pizza of every flavour and all kinds. I prefer pizza over burgers because its deliciios and contains alot of thinngs and comes in alot of differnet types. Pizza has many flavours and everyone acan find a flavour that suits their taste. ");

//Task 35

let pets=["cat", "dog", "monkey"];

for(let i=0;i<3;i++){
    console.log(pets[i]);
}

for(let i=0;i<3;i++){
    if(pets[i]==="cat"){
        console.log(`${pets[i] } likes to play`);   
    }else if(pets[i]==="dog"){
        console.log(`${pets[i] } likes to chase`);   
    }else if(pets[i]==="monkey"){
        console.log(`${pets[i] } likes to eat banana`);   
    }
}
console.log("all of them are very intelligent and can be great pets");

//Task 36

function makeShirt(size:string, message:string){
console.log(`size of the shirt ${size}, with a message "${message}" printed on it`);
}

makeShirt("medium", "Great Things Never Came From Comfort Zones")

// Task 37

function make_Shirt(size:string= "large", message:string){
    if(size.toLowerCase()==="medium"||size.toLowerCase()==="large" ){
    console.log(`size of the shirt ${size}, with a message "${message}" printed on it`);
}else{
    console.log(`size of the shirt ${size}, with a message "${message}" printed on it`);
}
    }
    
    makeShirt("medium", "I Love Typescript")

//Task 38

function describeCity(city:string, country:string="Pakistan"){
    console.log(`${city} is in ${country}`);
}

describeCity("karachi")
describeCity("Lahore", "Pakistan")
describeCity("Jakarta", "Indonesia")

//Task 39

function cityCountry(city:string, country:string){
    return `"${city}, ${country} "`
}

console.log(cityCountry("Karachi", "Pakistan"));
console.log(cityCountry("Beijing", "china"));
console.log(cityCountry("Seoul", "South Korea"));

//Task 40
function make_album(artist: string, title: string, tracks:number|null=null) {
    let album={
        artistName:artist,
        musicTitle:title,
        ...(tracks?{track:tracks}:{})
    }
    

    return album;
}
console.log( make_album("arjit", "Groove With Arijit Singh", 13));
console.log(make_album("atif aslam", "Woh Lamhe" ));
