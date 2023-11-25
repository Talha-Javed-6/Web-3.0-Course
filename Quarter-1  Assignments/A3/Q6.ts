//This Program will suggest the clothes to the user by demanding the current temperature of the weather
//Variable to Get the Temperature in Celsius
var temp:number=14;
if(temp<=10){
    console.log(`As its ${temp}\u00B0C outside and the Weather is Cold,So wear Thermal layers, sweaters, insulated jacket, warm pants, woolen socks, gloves, scarf, beanie, waterproof boots.`)
}
else if(temp>10 && temp<=18){
    console.log(`As its ${temp}\u00B0C outside and the Weather is Cool,So wear Long-sleeve shirts, light jacket, medium-weight pants, closed-toe shoes, light scarf.`)
}
else if(temp>18 && temp<=24){
    console.log(`As its ${temp}\u00B0C outside and the Weather is Mild,So wear Short-sleeve tops, lightweight pants/skirts/dresses, cardigans, open-toe shoes, sunhat.`)
}
else if(temp>24 && temp<=29){
    console.log(`As its ${temp}\u00B0C outside and the Weather is Warm,So wear Short-sleeve tops, shorts/skirts/dresses, sandals/flip-flops, sunglasses, wide-brimmed hat.`)
}
else if(temp>29){
    console.log(`As its ${temp}\u00B0C outside and the Weather is Hot,So wear Lightweight, loose-fitting clothing (cotton/linen), shorts/tank tops/dresses, breathable sandals, sunscreen, sunglasses, hat.`)
}
