/* Challenge 2: Complete the area and perimeter functions below for the rectangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function recArea(){
      let len= parseFloat(document.getElementById("l").value);
      let wid= parseFloat(document.getElementById("w").value);
      let op= document.getElementById("output");
      let A= len*wid;
      op.innerHTML=A;
}

function recPerimeter(){
      let len= parseFloat(document.getElementById("l").value);
      let wid= parseFloat(document.getElementById("w").value);
      let op= document.getElementById("output");
      let A= len+wid;
      op.innerHTML=A;
}


/* Challenge 4: Complete the area and circumference functions below for the circle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 3.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
let pi = 3.1415926;

function cirArea(){
      let pi = 3.1415926;
      let rad= parseFloat(document.getElementById("r").value);
      let out= document.getElementById("output");
      let B= pi*rad**2;
      out.innerHTML=B;
}

function cirPerimeter(){
      let pi = 3.1415926;
      let rad= parseFloat(document.getElementById("r").value);
      let out= document.getElementById("output");
      let B= 2*pi*rad;
      out.innerHTML=B;
}

/* Challenge Bonus: Complete the area and perimeter functions below for the triangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function triArea(){

}

function triPerimeter(){

}