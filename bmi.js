//Building BMI Calculator
$("#btn").click(function (e){

    e.preventDefault();

    var wt = $("#weight").val();
    var ht = $("#height").val();

    var BMI = Math.floor((wt / (ht * ht)));
    
    var weight_value;

    if(BMI < 18.5){
        weight_value= "You are underweight.";
    }
    else if(BMI >= 18.5 && BMI < 25){
        weight_value = "You are of normal weight.";
    }
    else if (BMI >= 25 && BMI < 30){
        weight_value = "You are overweight.";
    }
    else if(BMI >= 30){
        weight_value = "You are obese.";
    }

    $("#btn").text("Your BMI is " + BMI + "." + weight_value);
});






