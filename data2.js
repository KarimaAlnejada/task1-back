

const fs = require("fs")

const addPerson = (id, fname, lname, city, age) => {
    const allData = loadInfo()
const duplicatedData=allData.filter((obj)=>{
    return obj.id===id
})
if(duplicatedData.length==0){
    allData.push({
        id: id,
        fname: fname,
        lname: lname,
        city: city,
        age : age
    })
    savealldata(allData)
}
else{
    console.log("ERROR DUBLICATED DATA")
}}
//////////////////////////////////////////////////

const loadInfo = () => {
    try {
        const dataJson = fs.readFileSync("data2.json").toString()
        return JSON.parse(dataJson)
    }
    catch {
        return []
    }
}
/////////////////////////////////////////////////////////////

const savealldata = (allData) => {

    const saveallDataJson = JSON.stringify(allData)
    fs.writeFileSync("data2.json", saveallDataJson)
}

////////////////////////////////////////////////////////

//delete
const deleteData =(id)=>{
    const allData=loadInfo()
    const dataTokeep=allData.filter((obj)=>{
        return obj.id!==id
    })
    savealldata(dataTokeep)
}
///////////////////////////////////////////////////////
//read

const readData = (id) =>{
    const allData=loadInfo()
    const itemNeeded=allData.find((obj)=>{
        return obj.id==id
    })


    if(itemNeeded)
    {console.log(itemNeeded)}
    else{
        console.log("id needed not found")
    }
}
////////////////////////////////////////////////////////////
//list
const  listData=()=>{
    const allData=loadInfo()
    allData.forEach((obj) => {
        console.log(obj.fname,obj.city)
    });
}

///////////////////////////////////////////////////////
module.exports = {
    addPerson,
    deleteData,
    readData,
    listData
}