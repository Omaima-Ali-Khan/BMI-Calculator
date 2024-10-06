function calculateBMI() {
    // Retrieve the input values for weight and height
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const bmiResult = document.getElementById('bmi-result');
    const bmiCategory = document.getElementById('bmi-category');

    // Validate the inputs to ensure values are provided and are positive numbers
    if (!weight || weight <= 0 || !height || height <= 0) {
        bmiResult.innerText = "Please enter valid positive numbers for both weight and height.";
        bmiCategory.innerText = "";
        return;
    }

    // Calculate the BMI (weight divided by height squared)
    const bmi = (weight / (height * height)).toFixed(2);

    // Display the calculated BMI
    bmiResult.innerText = `Your BMI is ${bmi}`;

    // Determine the BMI category based on the calculated BMI
    let categoryMessage;
    if (bmi < 18.5) {
        categoryMessage = "Category: Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        categoryMessage = "Category: Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        categoryMessage = "Category: Overweight";
    } else {
        categoryMessage = "Category: Obesity";
    }

    // Display the BMI category
    bmiCategory.innerText = categoryMessage;
}
