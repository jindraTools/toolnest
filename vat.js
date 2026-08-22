function addVAT() {

    let amount = parseFloat(document.getElementById("amount").value);
    let rate = parseFloat(document.getElementById("vatRate").value);

    if (isNaN(amount)) {
        document.getElementById("result").innerHTML =
        "<p>Please enter a valid amount.</p>";
        return;
    }

    let vat = amount * rate / 100;
    let total = amount + vat;

    document.getElementById("result").innerHTML =
    `
    <h2>Result</h2>
    <p>Original Amount: £${amount.toFixed(2)}</p>
    <p>VAT: £${vat.toFixed(2)}</p>
    <p><strong>Total: £${total.toFixed(2)}</strong></p>
    `;
}

function removeVAT() {

    let amount = parseFloat(document.getElementById("amount").value);
    let rate = parseFloat(document.getElementById("vatRate").value);

    if (isNaN(amount)) {
        document.getElementById("result").innerHTML =
        "<p>Please enter a valid amount.</p>";
        return;
    }

    let original = amount / (1 + rate / 100);
    let vat = amount - original;

    document.getElementById("result").innerHTML =
    `
    <h2>Result</h2>
    <p>Original Amount: £${original.toFixed(2)}</p>
    <p>VAT: £${vat.toFixed(2)}</p>
    <p><strong>Total: £${amount.toFixed(2)}</strong></p>
    `;
}
function resetVAT() {

    document.getElementById("amount").value = "";
    document.getElementById("vatRate").selectedIndex = 0;
    document.getElementById("result").innerHTML = "";

}