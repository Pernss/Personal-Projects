/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const btn = document.getElementById("btn-el");
const inputEl = document.getElementById("input-el");
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");

// add event listener to call function 
// convert input value to length, mass and volume values
// display the values in specific div-element


btn.addEventListener("click", function() {


    let value = Number(inputEl.value);
    console.log(value);    

    if(value === 0) {
        console.log(value)
    } else {
        let feetValue = value * 3.281;
        let meterValue = value / 3.281;
    
        let gallonValue = value / 0.264;
        let literValue = value * 0.264;
    
        let poundValue = value / 2.204;
        let kilogramValue = value * 2.204;
    
        length.innerHTML = `
        <h1>Length (Meter/Feet)</h1>
        <p>${value} meters = ${feetValue.toFixed(3)} feet | ${value} feet = ${meterValue.toFixed(3)} meters</p>
        `
    
        volume.innerHTML = `
            <h1>Volume (Litters/Gallons)</h1>
            <p>${value} liters = ${literValue.toFixed(3)} gallons | ${value} gallons = ${gallonValue.toFixed(3)} liters</p>
        `
    
        mass.innerHTML = `
            <h1>Mass (Kilograms/Pounds)</h1>
            <p>${value} pounds = ${kilogramValue.toFixed(3)} kilograms | ${value} kilograms = ${poundValue.toFixed(3)} pounds</p>
        `
        inputEl.value = "";
    }
})
