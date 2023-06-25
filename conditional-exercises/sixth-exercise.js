let weight = 100;
let height = 198 / 100;

const imc = weight / (height * height);

if (imc >= 16 && imc <= 16.9) {
   console.log("Very underweight");
}
if (imc >= 17 && imc <= 18.4) {
   console.log("Underweight");
}
if (imc >= 18.5 && imc <= 24.9) {
   console.log("Normal weight");
}
if (imc >= 25 && imc <= 29.9) {
   console.log("Overweight");
}
if (imc >= 30 && imc <= 34.9) {
   console.log("Class 1 Obesity");
}
if (imc >= 35 && imc <= 40) {
   console.log("Class 2 Obesity");
}
if (imc > 40) {
   console.log("Morbid Obesity");
}

// COMPLETED