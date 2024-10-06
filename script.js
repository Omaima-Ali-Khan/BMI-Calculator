function calculateBMI() {
    // Retrieve the input values for weight and height
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const bmiResult = document.getElementById('bmi-result');
    const bmiCategory = document.getElementById('bmi-category');
}

    // Validate the inputs to ensure values are provided and are positive numbers
    if (!weight || weight <= 0 || !height || height <= 0) {
        bmiResult.innerText = "Please enter valid positive numbers for both weight and height.";
        bmiCategory.innerText = "";
        return;
    }