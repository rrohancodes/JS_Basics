const form = document.getElementById("bmiForm");
const result = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseFloat(document.getElementById("height").value) / 100;
  const weight = parseFloat(document.getElementById("weight").value);

  const bmi = weight / (height * height);

  let category;
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";

  result.textContent = `BMI: ${bmi.toFixed(1)} (${category})`;
});