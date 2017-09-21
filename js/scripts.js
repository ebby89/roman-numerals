//back-end
function toRomanNumerals(inputNumber) {
  var displayResult = [];
  var numberValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanValues = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  if (inputNumber <= 0 || inputNumber > 3999) {
    alert('Please enter a valid number. Numbers cannot be 0, negative, or greater than 3,999.');
    return null;
  }

  for (var i = 0; i < numberValues.length; i++) {
    while (inputNumber % numberValues[i] < inputNumber) {
      displayResult += romanValues[i];
      inputNumber -= numberValues[i];
    }
  }

  return displayResult;
}

//front-end
$(document).ready(function(){
  $("#userForm").submit(function(event){
    event.preventDefault();

    var inputNumber = $("#userInput").val();
    var displayResult = toRomanNumerals(inputNumber);

    $("span").text(displayResult);
    $('#output').fadeIn(600).delay(2000).fadeOut(600);
  });
});


/*
***EXAMPLE: 1400 input

//Remainder of 1400 divided by the first array number = 400
	1400 % 1000 = r400

//There is still a remainder, and it is less than the input
	r400 < 1400

//The empty array = the added value of the roman ARRAY at that index [0] or M
resultarray += ARRAYroman[i]
	result Output = M

//The input number = original input number - the number ARRAY at that index [0] or 1400-1000=400
1400 -= ARRAYnumbers[i]
	1400-1000=400

//FIRST INDEX COMPLETED
//RUN SECOND INDEX in FOR loop -- returns nothing because remainder = 400
//Index 3 = 400

//The result array has a value of "M" now.
//Add the current index of the roman ARRAY to the result ARRAY = M + CD = MCD
resultarray += ARRAYroman[i]
	Also Output CD[3]

//The input number was reduced to 400, and now reduces again by the current index value of 400
//Remainder of 400 - current index of 400 = 0 remaining

400 -= ARRAYnumbers[i]
	400-[3] which = 400

//Returns nothing further from the loop because the remainder no longer has a value
//0 REMAINING means we FAIL the initial IF statement num <= 0 || num>3999
//result array outputs MCD


OTHER METHOD

    if (inputNumber >= 1000) {
      inputNumber -= 1000;
      outputArray.push("M");

    } else if (inputNumber >= 900 && inputNumber < 1000) {
      inputNumber -= 900;
      outputArray.push("CM");

    } else if (inputNumber >= 500) {
      inputNumber -= 500;
      outputArray.push("D");

    } else if (inputNumber >= 400 && inputNumber < 500) {
      inputNumber -= 400;
      outputArray.push("CD");

    } else if (inputNumber >= 100) {
      inputNumber -= 100;
      outputArray.push("C");

    } else if (inputNumber >= 90 && inputNumber < 100) {
      inputNumber -= 90;
      outputArray.push("XC");

    } else if (inputNumber >= 50) {
      inputNumber -= 50;
      outputArray.push("L");
    } else if (inputNumber >= 40 && inputNumber < 50) {
      inputNumber -= 40;
      outputArray.push("XL");

    } else if (inputNumber >= 10) {
      inputNumber -= 10;
      outputArray.push("X");

    } else if (inputNumber >= 9 && inputNumber < 10) {
      inputNumber -= 9;
      outputArray.push("IX");

    } else if (inputNumber >= 5) {
      inputNumber -= 5;
      outputArray.push("V");

    } else if (inputNumber >= 4 && inputNumber < 5) {
      inputNumber -= 4;
      outputArray.push("IV");

    } else if (inputNumber >= 1) {
      inputNumber -= 1;
      outputArray.push("I");
    }
  }

  joinedArray = outputArray.join('');
  return joinedArray;
};


ALYSSA
function toRomanNumerals(num){
  var result = [];
  var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  if (num<=0 || num>3999) {
    alert("Number cannot be 0, a negative number, or larger than 3,999. Please enter a different number.");
    return "Stop trying to break me!";
  }

  for (var i = 0; i < numbers.length; i++) {
    while (num%numbers[i] < num) {
      result += roman[i];
      num -= numbers[i];
    }
  }

  return result;
 }

Start at the largest number in numbers array, continue subtracting from the numbers array and appending roman numeral to result as long as the remainder is greater than the numbers value. Remove the number from the num input.
