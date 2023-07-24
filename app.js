function calculate() {
    let bmi;
    let result = document.getElementById("result")
    let height = parseInt(document.getElementById("Height").value);
    let weight = parseInt(document.getElementById("weight").value);
    // formula to calculate bmi 
    bmi = (weight / Math.pow((height / 100), 2)).toFixed(1);
    // if bmi < 18.5
    if (bmi < 18.5) {
        result.textContent = "Underweight 😒" + bmi;
        result.style.color = "#ffc44d";
    }
    // if bmi > 18.5
    else if (bmi >= 18.5 && bmi <= 24.9) {
        result.textContent = "Normal Weight 😍" + bmi;
        result.style.color = "#0be881";
    }
    // if bmi > 25
    else if (bmi >= 25 && bmi <= 29.9) {
        result.textContent = "Overweight 😮" + bmi;
        result.style.color = "#ff884d";
    }
    // if bmi > 30 
    else {
        result.textContent = "Unhealthy Weight 😱" + bmi;
        result.style.color = "#ff5e57";
    }
   }