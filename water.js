function calculateWater() {

    let weight = parseFloat(document.getElementById("weight").value);

    if (isNaN(weight) || weight <= 0) {

        document.getElementById("result").innerHTML =
        "<p>Please enter a valid weight.</p>";

        return;
    }


    let water = weight * 35;

    let liters = water / 1000;


    document.getElementById("result").innerHTML =
    `
    <h2>Your result</h2>
    <p>Recommended daily water intake:</p>
    <p><strong>${liters.toFixed(2)} liters</strong></p>
    <p>(${water.toFixed(0)} ml per day)</p>
    `;
}
function resetWater() {

    document.getElementById("weight").value = "";

    document.getElementById("result").innerHTML = "";

}