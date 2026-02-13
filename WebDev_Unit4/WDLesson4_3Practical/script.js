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
       let status= "";
       let filename="";

       if (bmi<18.5){
              status="underweight";
              filename= "underweight.png";
       }else if (bmi>=18.5 && bmi<=24.9){
              status="healthy weight";
              filename="healthyweight.png";
       }else if (bmi>=25.0 && bmi<=29.9){
              status="overweight";
              filename="overweight.png";
       }else if (bmi>=30){
              status="obese";
              filename="obeseweight.png";
       }
       
       output.innerHTML=`<img src="${filename}"> <br> Your BMI is ${bmi.toFixed(2)}. You're ${status}.`;
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

