const units = {

    length: {
        "Meter": 1,
        "Kilometer": 1000,
        "Centimeter": 0.01,
        "Millimeter": 0.001,
        "Inch": 0.0254,
        "Foot": 0.3048,
        "Mile": 1609.34
    },


    weight: {
        "Kilogram": 1,
        "Gram": 0.001,
        "Pound": 0.453592,
        "Ounce": 0.0283495
    },


    volume: {
        "Litre": 1,
        "Millilitre": 0.001,
        "Gallon": 3.78541,
        "Cubic metre": 1000
    },

    
speed: {
    "Kilometre per hour": 1,
    "Metre per second": 3.6,
    "Mile per hour": 1.60934
},

area: {
    "Square metre": 1,
    "Square kilometre": 1000000,
    "Square foot": 0.092903,
    "Acre": 4046.86
},    
    temperature: [
        "Celsius",
        "Fahrenheit",
        "Kelvin"
    ]

};


document.addEventListener("DOMContentLoaded", function () {
    changeUnits();
});

    let category = document.getElementById("category").value;

    let from = document.getElementById("from");
    let to = document.getElementById("to");


    from.innerHTML = "";
    to.innerHTML = "";


    let list;


    if (category === "temperature") {

        list = units.temperature;

    } else {

        list = Object.keys(units[category]);

    }


    list.forEach(unit => {

        from.innerHTML += `<option>${unit}</option>`;
        to.innerHTML += `<option>${unit}</option>`;

    });






function convert() {


    let category = document.getElementById("category").value;

    let value = Number(document.getElementById("value").value);

    let from = document.getElementById("from").value;

    let to = document.getElementById("to").value;


    let result;





        if (category === "temperature") {

    if (from === to) {
        result = value;
    }

    else if (from === "Celsius" && to === "Fahrenheit") {
        result = (value * 9/5) + 32;
    }

    else if (from === "Fahrenheit" && to === "Celsius") {
        result = (value - 32) * 5/9;
    }

    else if (from === "Celsius" && to === "Kelvin") {
        result = value + 273.15;
    }

    else if (from === "Kelvin" && to === "Celsius") {
        result = value - 273.15;
    }

    else if (from === "Fahrenheit" && to === "Kelvin") {
        result = (value - 32) * 5/9 + 273.15;
    }

    else if (from === "Kelvin" && to === "Fahrenheit") {
        result = (value - 273.15) * 9/5 + 32;
    }
    }

    

    else {


        let base = value * units[category][from];

        result = base / units[category][to];


    }



document.getElementById("result").innerHTML =
    `${value} ${from} = ${result.toFixed(2)} ${to}`;

}    
`
<div>
${value} ${from}
</div>

<div style="font-size:30px;">
=
</div>

<div>
${result.toFixed(3)} ${to}
</div>
`;






changeUnits();
function swapUnits() {

    let from = document.getElementById("from");
    let to = document.getElementById("to");

    // kontrola, jestli existují výběry
    if (!from || !to) {
        alert("Units not loaded");
        return;
    }

    // kontrola, jestli jsou vybrané hodnoty
    if (from.value === "" || to.value === "") {
        alert("Please select units");
        return;
    }

    let temp = from.value;

    from.value = to.value;
    to.value = temp;

}
function resetConverter() {

    document.getElementById("value").value = "";

    document.getElementById("result").innerHTML =
        "Result will appear here";

}
