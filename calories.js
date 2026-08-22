function calculateCalories() {

    let age = parseFloat(document.getElementById("age").value);
    let gender = document.getElementById("gender").value;
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let activity = parseFloat(document.getElementById("activity").value);


    if (isNaN(age) || isNaN(weight) || isNaN(height)) {

        document.getElementById("result").innerHTML =
        "<p>Please fill in all fields.</p>";

        return;
    }


    let bmr;


    if (gender === "male") {

        bmr = 10 * weight + 6.25 * height - 5 * age + 5;

    } else {

        bmr = 10 * weight + 6.25 * height - 5 * age - 161;

    }


    let calories = bmr * activity;


    document.getElementById("result").innerHTML =
    `
    <h2>Your result</h2>
    <p>Your estimated daily calorie need:</p>
    <p><strong>${Math.round(calories)} kcal/day</strong></p>
    `;
}
function resetCalories() {

    document.getElementById("age").value = "";
    document.getElementById("gender").selectedIndex = 0;
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("activity").selectedIndex = 0;

    document.getElementById("result").innerHTML = "";

}