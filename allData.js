 const firstName="Karima"
 const lastName="Mohammed"
 const city="Taiz"
function mul(x,y){
console.log(x*y)
}
//  module.exports=firstName
//  module.exports=lastName
//  module.exports=city
module.exports={
    fname:firstName,
    lname:lastName,
    city:city,
    mul1:mul
}