// let useId:number=34353;

// console.log(useId);

// export {};

// function gaurang(num: number) {
//     if(num>5){
//         return 6
//     }
//     return "hello"
// }

// gaurang(5);

// arr.push("gaurang")

// arr.map((ele)  => {

//     console.log(`hello${ele}`);
//     return;
// })
// type arr=[];

type chutiya=readonly [ string, string, string];

type Gaurang = {
    person : string
}

type User={
    readonly _id:string
    name:string
    address: string
    pincode: number
    findperson:Gaurang
    // nesting typing in ts
    // favouritefood:
}

let myuser:User={
    _id: "sefd",
    name:"jatin",
    address:"ikd",
    pincode:343,
    findperson:{
        person:"here inside type object"
    }
    
}

// myuser._id="dfd";
myuser.name="prateek"
// console.log(myuser.findperson.person);
// console.log(4&5);
// console.log(4&5);
const arr : User[] =[

];

arr.push(myuser);
console.log(arr[0]._id);


let seatellement:"aisle" | "pr" | "df";

seatellement="aisle";

const meredost:chutiya=["prateek","jatin","bhalu"];

// meredost[1]="add me";
enum jatin{
    ais,
    sec,
    thir
}

const hx=jatin[0];

console.log(hx);



export {};