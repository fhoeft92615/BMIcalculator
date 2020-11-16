$(document).ready(
    function () {
        //event handlers
        $("#calculateBmi").click(userBMI);

        function userBMI(event) {
            event.preventDefault();
            //get input from boxes and parse to number data type
            var userHeightInches = $("#height").val();

            //requiring height input
            if (!userHeightInches){
                alert("Please enter height!")
            }
            userHeightInches = parseFloat(userHeightInches);

            //sorry short people :(
            if (userHeightInches < 59 || userHeightInches > 79){
                alert("Not a valid height!")
            }

            var userWeightPounds = $("#weight").val();

            //requiring weight input
            if (!userWeightPounds){
                alert("Please enter weight!")
            }
            userWeightPounds = parseFloat(userWeightPounds);

            if (userWeightPounds < 88 || userWeightPounds > 353){
                alert("Not a valid weight!")
            }

            //convert all units to metric
            var newHeightMeters = userHeightInches / 39.3700787;
            var newWeightKg = userWeightPounds / 2.20462;

            //calculate the users bmi and their bmi category
            var result = (newWeightKg / Math.pow(newHeightMeters, 2));

            //Display calculated results
            var BMI = result.toFixed(2);

                if (BMI < 18.5)
                    $("#userBMI").text(`BMI: ${BMI}, Underweight`);

                else if (BMI >= 18.5 && result < 25.0)
                    $("#userBMI").text(`BMI: ${BMI}, Normal`);

                else if (BMI >= 25 && result <= 30)
                    $("#userBMI").text(`BMI: ${BMI}, Overweight`);

                else if (BMI > 30)
                    $("#userBMI").text(`BMI: ${BMI}, Obese`);

            $(".output").show();
        }

    }

);