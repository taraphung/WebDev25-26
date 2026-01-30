
//  For each challenge fix the error and explain the correction in the comment


/* Challenge 4: Does the function name match the event handler referenced in the event listener? */   /*function name is not volume(), it is cylinder()*/
function cylinder(){

  /* Challenge 5: Are there any errors in retrieving and parsing the information from the text inputs? */   /*line 9: document.getElementById is missing "Id" and line 10: capitalize B in "by". Change id name and let value based on index.html */
  let r = parseInt(document.getElementById("r").value);
  let h = parseInt(document.getElementById("h").value);

  /* Challenge 6: Does the variable output correctly create a reference to the output container? */     /*.value is not needed here*/
  let output = document.getElementById("output");

  /* Challenge 7: Is the following calculation for volume of a cylinder correct? */   /* The "M" in Math for "math.PI" and "math.pow" needs to be capitalized. Equation is pi * (r**2) *h, not divided by h. */
  let v = Math.PI * Math.pow(r,2) * h;
  v= v.toFixed(2);

  /* Challenge 8: Are there any errors in displaying the output? */    /*Missing backtick and semicolon at the end of code. */ 
  output.innerHTML = `Volume of the cylinder is ${v}`; 

}