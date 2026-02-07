// General Guideline
/*
function name(){
  // Step 1: Create variables for the information from the text inputs and the output element

  // Step 2: Complete the process
  //    a) Perform any calculations necessary
  //    b) Perform necessary decisions

  // Step 3: Display the output

}
*/

/* Challenge 2:  Create the function for Challenge 1 scenario */
function area(){
  let l= parseFloat(document.getElementById("l").value);
  let w= parseFloat(document.getElementById("w").value);
  let output= document.getElementById("output");
  let A= l*w;
  let msg= "";

  if (l <= 0 || w <=0){
    msg="Inappropriate measurement";
  }else{
    msg=`Area of rectangle with length of ${l} and width of ${w} is ${A}.`;
  }
  
  output.innerHTML= msg;
}


/* Challenge 3:  Complete the function for Pets Challenge on pets.html.  
1) Review the HTML for the UI.  Remember dropdown boxes are just input.
2) You will need to write HTML as part of the output.  
   For example, output.innerHTML = `<input src="pic.png">` would place the image in the <div>*/
function pet(){
  let animal=document.getElementById("animal").value;
  let emotion=document.getElementById("emotion").value;
  let output=document.getElementById("output");
  let name="";

  if (animal == "Bear" && emotion == "Funny"){
    name= `<img src="funnyBear.jpg">`;
  }
  if (animal == "Bear" && emotion == "Sad"){
    name= `<img src="sadBear.jpg">`;
  }
  if (animal == "Cat" && emotion == "Funny"){
    name= `<img src="funnyCat.jpg">`;
  }
  if (animal == "Cat" && emotion == "Sad"){
    name= `<img src="sadCat.jpg">`;
  }
  if (animal == "Dog" && emotion == "Funny"){
    name= `<img src="funnyDog.jpg">`;
  }
  if (animal == "Dog" && emotion == "Sad"){
    name= `<img src="sadDog.jpg">`;
  }
  output.innerHTML= name;
}