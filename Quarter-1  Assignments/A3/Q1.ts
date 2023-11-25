//This Program Will convert the temperature from celsius to Fahrenheit and vice versa.
//Variable to get temperature in Celsius
var temperatureCelsius:number=25.5;
var temperatureFahrenheit:number=(temperatureCelsius * 9/5) +32;
console.log(`${temperatureCelsius}\u00B0C is equal to ${temperatureFahrenheit}\u00B0F`);
console.log("\n");
//Variable to get temperature in Fahrenheit
var fahrenheitTemperature:number=77;
var celsiusTemperature:number=(fahrenheitTemperature-32) * 5/9;
console.log(`${fahrenheitTemperature}\u00B0F is equal to ${celsiusTemperature}\u00B0C`);