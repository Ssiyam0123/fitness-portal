document.addEventListener("DOMContentLoaded", () => {
  const calculateBtn = document.getElementById("bmi-btn");
  const resultDiv = document.getElementById("bmi-result");

  if (calculateBtn) {
    calculateBtn.addEventListener("click", () => {
      const heightInput = document.getElementById("bmi-height");
      const weightInput = document.getElementById("bmi-weight");
      const ageInput = document.getElementById("bmi-age");
      const genderSelect = document.getElementById("gender");

      const height = parseFloat(heightInput.value);
      const weight = parseFloat(weightInput.value);

      if (!height || height <= 0 || !weight || weight <= 0) {
        resultDiv.style.color = "#ff3c1e";
        resultDiv.textContent = "Please enter valid height and weight values!";
        return;
      }

      // Calculate BMI (height is in feet, weight in kg)
      const heightInMeters = height * 0.3048;
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

      let status = "";
      let color = "";

      if (bmi < 18.5) {
        status = "Underweight";
        color = "#e5c100"; // Yellow
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = "Healthy";
        color = "#4cc718"; // Green
      } else if (bmi >= 25.0 && bmi <= 29.9) {
        status = "Overweight";
        color = "#ff8c00"; // Orange
      } else {
        status = "Obese";
        color = "#ff3c1e"; // Red
      }

      resultDiv.style.color = color;
      resultDiv.innerHTML = `Your BMI is <span style="font-size: 1.3rem;">${bmi}</span> (${status})`;
    });
  }
});
