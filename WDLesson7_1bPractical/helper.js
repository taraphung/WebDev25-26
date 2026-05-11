//The function get() below accepts an id of an element and returns the actual element with that id.
//This function serves to shorten the code previously used to get an element with getElementByID().
function get(id){
  return document.getElementById(id);
}

//Challenge 1: Create a function card() that accepts the JSON data for each violation, then generates and returns an appropriate card for the violation.
function card( cardInfo ){
  let build = "";
  build = `<div class="fitted card">
                <h3>Plate: ${cardInfo.plate}</h3>
                <hr>
                <p>State: ${cardInfo.state}</p>
                <p>License Type: ${cardInfo.license_type}</p>
                <p>Summons Number: ${cardInfo.summons_number}</p>
                <hr>
                <p>Violation: ${cardInfo.violation}</p>
                <hr>
                <p>Issue Date: ${cardInfo.issue_date}</p>
            </div>`;

  return build;
}
