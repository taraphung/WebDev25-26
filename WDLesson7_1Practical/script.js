function init(){
  //For all challenges use the function display( ) in order to output the results to the console and the webpage. 
  // The example below calls the function randint() and displays the value returned by it in the console and page.
  let secret = randint(1,10);
  display(`Secret number is ${secret}`);
  
  //Challenge 1: Use the function area( ) created in helper.js to display the area of any rectangle of your choice of dimensions.
  let A= area(2 , 3.5);
  display(`Area of rectangle is ${A}`);
  

  //Challenge 2: Use the function celsius( ) created in helper.js to show the Celsius equivalent of any Fahrenheit temperature. 
  let c= celsius(98.6);
  display(`${c} deg Celsius`);

  //Challenge 4: Set height and weight to appropriate numbers. Pass the variables as arguments to the bmi() function defined in Challenge 3.
  // Store the result in a variable called b. Display the value of b.
  let height;
  let weight;
  let b;

  height=70;
  weight=180;
  b=bmi(height,weight);
  display(`Your BMI is ${b.toFixed(2)}`);

  //Challenge 6:  Pass the value b from challenge 4 to the bmiCategory() function and store in a variable bc.  Display the BMI category returned by bmiCategory().
  let bc=bmiCategory(b);
  display(`BMI: ${b.toFixed(2)}, Category: ${bc}`);

  
  //Challenge 8: Call lottery() with some number and display the results.
  let numb=lottery(6);
  display(`The lottery number is ${numb}`)


  //Challenge 10: Create an array survey which contains several "Y" and "N" items. Pass this survey array to the function results( ) and display the value returned.
  let survey=["Y", "Y", "N", "Y", "Y", "N",]
  let yes=results(survey);
  display(`Number of Y responses: ${yes}`);

  
}

