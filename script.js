let input = document.getElementById('input');

let result = document.getElementById('result');

let inputType = document.getElementById('inputType');

let resultType = document.getElementById('resultType');


// adding event listener 

input.addEventListener("keyup", myResult);      // changing result on changing input

inputType.addEventListener("change", myResult);     //updating data on changing type of input 

resultType.addEventListener("change", myResult);        //updating data on changing type of result
function myResult() {       // function for calculating the result

    // option_from and option_to

    let option_from = inputType.value;


    let option_to = resultType.value;

    // now compare the input and resultType value and add formula


    if (option_from === "meter" && option_to === "kilometer") {    // meter to kilometer
        result.value = Number(input.value) * 0.001;

    } else if (option_from === "meter" && option_to === "Centimeter") {     // meter to centimeter
        result.value = Number(input.value) * 100;

    } else if (option_from === "meter" && option_to === "meter") {      //meter to meter 
        result.value = input.value

    }

    if (option_from === "kilometer" && option_to === "meter") {


        //this is kilometer to meter formula

        result.value = Number(input.value) * 1000;

    } else if (option_from === "kilometer" && option_to === "Centimeter") {

        //this is kilometer to Centimeter formula

        result.value = Number(input.value) * 100000;

    } else if (option_from === "kilometer" && option_to === "kilometer") {

        //this is kilometer to kilometer formula

        result.value = input.value

    }

    if (option_from === "Centimeter" && option_to === "kilometer") {


        //this is Centimeter to kilometer formula

        result.value = Number(input.value) * 0.00001;

    } else if (option_from === "Centimeter" && option_to === "meter") {

        //this is Centimeter to meter formula

        result.value = Number(input.value) * 0.01;

    } else if (option_from === "Centimeter" && option_to === "Centimeter") {

        //this is Centimeter to Centimeter formula

        result.value = input.value

    }

}