/* Challenge 2: Create a function to ,
       1) Calculate and display the BMI.  Look up the formula which you should have done in Challenge 1
       2) Display BMI status as per the chart in index.html
       3) Display the corresponding image based on the BMI status.
*/
function bmi(){
       let lb= parseFloat(document.getElementById("lb").value);
       let inch= parseFloat(document.getElementById("inch").value);
       let output= document.getElementById("output");
       let bmi= 703 * ((lb)/(inch*inch))
       let msg= "";
       let name="";

       if (bmi<18.5){
              msg="underweight";
              name= `<img src="underweight.png">`;
       }else if (bmi>=18.5 && bmi<=24.9){
              msg="healthy weight";
              name=`<img src="healthyweight.png">`;
       }else if (bmi>=25.0 && bmi<=29.9){
              msg="overweight";
              name=`<img src="overweight.png">`;
       }else{
              msg="obese";
              name=`<img src="obeseweight.png">`;
       }
       
       output.innerHTML=`${name} BMI is ${bmi.toFixed(2)}. You are ${msg}.`;
}


/* 
Guideline:
1) Create the function
2) Get the information from the UI
3) Perform the necessary calculation.
4) Make the appropriate decisions.  Store the appropriate BMI status.  Store the appropriate filename for the image.
5) Display the output

Use past examples, classwork and practicals to assist you in completing this practical.
*/

