//task41

let magicians:string[]=["Archimedes the Astonishing","Alistair the Amazing",
"Auron the Absurd","Amara the Enchantress","Axiom the Animator",
"Argo, the Aerialist","Aurora the Mystic","Azimuth the Adventurer",
"Adonis the Illusionist"];

function show_magicians (listOfMagicians:string[]){
    for(let i=0;i<listOfMagicians.length;i++){
        console.log(`${i+1}: ${listOfMagicians[i]}`);
    }
    
}
show_magicians(magicians);
//task42

function make_great(listOfMagicians:string[]){
    for(let i=0;i<listOfMagicians.length;i++){
        listOfMagicians[i]="The great "+ listOfMagicians[i];
    }
    show_magicians(magicians);
    return listOfMagicians;

    //or
    //listOfMagicians= listOfMagicians.map(i=> "The Great "+ i);
}



//task 43
let copiedArray= magicians;
console.log("\nUnmodified List");

show_magicians(magicians);
console.log("\nModified List")
copiedArray=make_great(copiedArray);


//task 44

function make_sandwitch(items:string[]){
    console.log(`A sandwitch contaning${items.map(i=> ` ${i}`)}.`);
    
}

make_sandwitch(["parsley", "oregano", "beef"]);
make_sandwitch(["cheese", "beef"]);
make_sandwitch(["cheese","parsley", "oregano", "beef"]);

//task 45


function car(manufacturer:string,model:string, ...args:any){
    let carobj:any={
             carManufacturer:manufacturer,
             carModel:model,
             
    }
    if(args.length>0){
        for(let i=0;i<args.length;i++){
            let temp=args[i];
            let key=temp[0];
            let value=temp[1];
            carobj[key]=value;
        }
    }
    return carobj;
}

console.log(car("Tesla, Inc.","Tesla"));
console.log(car("Ford Motor Company"," Ford Explorer ",["color", "red"],["seats","7"]));

