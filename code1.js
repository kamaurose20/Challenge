let speed= prompt("input car speed")
if(speed <70){
console.log("Ok")
}
else{
    let demerits=math.floor(speed-70/5);
    if(demerits>12){
      console.log("suspencision of license");
    }else{
      console.log("you have been given this demerit_points")
    }
    

}




