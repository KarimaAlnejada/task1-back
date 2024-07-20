// const fs = require ("fs")

// fs.writeFileSync("data1.txt","karima"  )
// // console.log(fs.readFileSync("data1.txt").toString())
// fs.appendFileSync("data1.txt" ," / mohammed")
// console.log(fs.readFileSync("data1.txt").toString())

// ///////////////////////////////////////////////////////////////////
// const x=require("./allData")
// // const firstName = require("./allData")
// // console.log(firstName)
// // console.log(x.firstName)
// // console.log(x)
// console.log(x.fname)
// console.log(x.lname)
// console.log(x.city)
// console.log(x.mul1(4,3))
/////////////////////////////////////////////////////////////////////////////


// const validator=require("validator")
// // console.log(validator.isEmail("karima"))
// console.log(validator.isEmail("karima@gmail.com"))


/////////////////////////////////////////////////////////////////////////////
//process.argv

// console.log(process.argv[2])

// const x=process.argv[2]
// if(x==="add"){
//     console.log("you have added an item")
// }else if(x==="delete"){
//     console.log("you have deleted an item")

// }else{
//     console.log("ERROR")

// }
///////////////////////////////////////////////////////////////////////////
const yargs = require("yargs")
// const { lname, city } = require("./allData")
// console.log(yargs.argv)

const data2 = require("./data2")

yargs.command({
    command: "add",
    describe: "to add an item",

    builder: {
        fname: {
            describe: "this is the firt name desc in add command",
            demandOption: false,
            type: "string"
        },
        lname: {
            describe: "this is the firt name desc in add command",
            demandOption: false,
            type: "string"
        }
    },
    handler: (x) => {
        // console.log("you have already added an item")
        // console.log(x.fname,x.lname)
        data2.addPerson(x.id, x.fname, x.lname, x.city, x.age)
    }
})

// yargs.parse()
////////////////////////////////delete/////////////////////
yargs.command({
    command:"delete",
    describe:"t delete an item",
    handler:(x)=>{
        // console.log("you have already deleted an item")
        data2.deleteData(x.id)
    }
})
///////////////////////////////////////////////////////////////
yargs.command({
    command:"read",
    describe:"to read an item",
    builder: {
        id: {
            describe: "this is id desc in read command",
            demandOption: true,
            type: "string"
        }
    },
    handler:(x)=>{
     data2.readData(x.id)  
    }
})

/////////////////////////////////////////////////////////////
yargs.command({
    command:"list",
    describe:"to list an item",
    handler:()=>{
        data2.listData()
    }
})

yargs.parse()
 


// console.log(yargs.argv)
//////////////////////////////
// const person1={
//     fname:"karima",
//     lname:"mohammed",
//     city:"Taiz"
// }
// console.log(person1.city)
// const person1Json=JSON.stringify(person1)
// console.log(person1Json)

// const person1obj=JSON.parse(person1Json)
// console.log(person1obj)


// const fs=require("fs")
// fs.writeFileSync("data2.json", person1Json)
////////////////////////////////////////////////////////////////////
