function convertTemp() {
    let degreeValue = parseFloat(document.getElementById("degreeInput").value);
    let fromUnit = document.getElementById("unitInput").value;
    let toUnit = document.querySelector("#conversionInput select").value;

    let result;

    if (fromUnit === "C" && toUnit === "F")
        result = (degreeValue * (9/5)) + 32;
    else if (fromUnit === "F" && toUnit === "C")
        result = (degreeValue - 32) * (5/9);
    else
        result = degreeValue;

    document.getElementById("convertedDegree").textContent = result.toFixed(1);
    document.getElementById("convertedUnit").textContent = toUnit;

    let resultBox = document.getElementById("convertedResults");
    resultBox.classList.remove("show");
    void resultBox.offsetWidth; // Force reflow
    resultBox.classList.add("show");

};