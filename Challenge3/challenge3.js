//Challenge 3 Objects

//Marks Profile
var mark = {
    name: 'Mark',
    weight: 90,
    height: 195,
    bmi: function calcBmi() {
        this.height = Math.pow(this.height, 2);
        return (this.weight / this.height) * 100 * 100;
    }

};

//Johns Profile
var john = {
    name: 'John',
    weight: 75,
    height: 195,
    bmi: function calcBmi() {
        this.height = Math.pow(this.height, 2);
        return (this.weight / this.height) * 100 * 100;
    }

};

var johnBMI = john.bmi();
var markBMI = mark.bmi();
var bmiCategory;
var bmiCategoryJohn;


if (markBMI <= 19) {
    bmiCategory = "Underweight";
} else if (markBMI >= 30) {
    bmiCategory = "Obese";
} else if (markBMI > 19 && markBMI < 25) {
    bmiCategory = "Normal";
}

if (johnBMI <= 19) {
    bmiCategoryJohn = "Underweight";
} else if (johnBMI >= 30) {
    bmiCategoryJohn = "Obese";
} else if (johnBMI > 19 && johnBMI < 25) {
    bmiCategoryJohn = "Normal";
}

higherBmi = Math.max(johnBMI, markBMI);

if (higherBmi === johnBMI) {
    compare = 'John has the higher BMI';
} else if (higherBmi === markBMI) {
    compare = 'Mark has the higher BMI';
} else {
    compare = 'Looks like the BMI is the same';
}

console.log(markBMI + ' Mark you are in the ' + bmiCategory + ' Category, John you are in the ' + bmiCategory + ' Category with ' + johnBMI + ' BMI');

console.log(compare);