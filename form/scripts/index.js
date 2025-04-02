function doFV() {
    // INPUT
    let p = parseFloat(document.getElementById("principle").value);
    let pConfirm = parseFloat(document.getElementById("principle-confirm").value);
    let r = parseFloat(document.getElementById("annualrate").value);
    let n = parseInt(document.getElementById("periods").value);
    let y = parseInt(document.getElementById("years").value);

    if (isNaN(p) || p <= 0) {
        alert("Please enter a valid Principle amount.");
        return;
    }

    if (isNaN(pConfirm) || pConfirm <= 0) {
        alert("Please confirm a valid Principle amount.");
        return;
    }

    if (p !== pConfirm) {
        alert("The Principle values do not match. Please verify and try again.");
        return;
    }

    if (isNaN(r) || r <= 0) {
        alert("Please enter a valid Annual rate.");
        return;
    }

    if (isNaN(n) || n <= 0) {
        alert("Please enter a valid number of periods.");
        return;
    }

    if (isNaN(y) || y <= 0) {
        alert("Please enter a valid number of years.");
        return;
    }

    // PROCESSING
    let output = computeFutureValue(p, r, n, y);
    // OUTPUT with formatting
    document.getElementById("output").innerHTML = `$${output.toFixed(2)}`;
}

// computer future value function
// p = principal, r = annual rate, y = number of years, n = periods of year.

function computeFutureValue(p, r, n, y) {
    let er = r / n; // effective rate per period
    let totalperiods = n * y;
    return p * Math.pow(1 + er, totalperiods);
}

// get current year
let thedate = new Date();
document.getElementById("theyear").innerHTML = thedate.getFullYear();
