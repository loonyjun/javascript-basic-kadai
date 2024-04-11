// 体重と身長の定義
var weight = 68; // kg
var height = 1.7; // m

// BMIを計算する関数
function calculateBMI(weight, height) {
    return weight / (height * height);
}

// BMIを計算して出力する
var bmi = calculateBMI(weight, height);
console.log("BMI:", bmi);
