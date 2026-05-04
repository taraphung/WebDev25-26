let data, info;

async function init(){   
  let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json";
  info = await fetch(link);
  data = await info.json();
  

  output = document.getElementById("output");
  result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i++){
    let crash = data[i];
    build += `<div class="fitted card">
                  <h3> ID: ${crash.collision_id} </h3>
                  <p>Street Name: ${crash.on_street_name}</p>
                  <hr>
                  <p> Persons Injured: ${crash.number_of_persons_injured} </p>
                  <p> Motorists Injured: ${crash.number_of_motorist_injured} </p>
                  <hr>
                  <p>Contributing Factor: ${crash.contributing_factor_vehicle_1} </p>
                  <hr>
                  <p>Vehicle Type: ${crash.vehicle_type_code1} </p>
              </div>`;
    ct++;
  }
  result.innerHTML = `${ct} Results found`;
  output.innerHTML = build;

  //Dropdown Menus
  let per = fillDropDown("persons_injured");
  document.getElementById("per").innerHTML = per;

  let vehicle = fillDropDown("vehicle_type_code1");
  document.getElementById("vehicle").innerHTML = vehicle;

  let motor = fillDropDown("motorist_injured");
  document.getElementById("motor").innerHTML = motor;

  let street = fillDropDown("on_street_name");
  document.getElementById("street").innerHTML = street;
 
}

function filterByPerAndVehicle(){
  let per = document.getElementById("per").value;
  let vehicle = document.getElementById("vehicle").value;
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    if(crash.number_of_persons_injured == per && crash.vehicle_type_code1 == vehicle){
      build += `<div class="fitted card">
                    <h3> ID: ${crash.collision_id} </h3>
                    <p>Street Name: ${crash.on_street_name}</p>
                    <hr>
                    <p> Persons Injured: ${crash.number_of_persons_injured} </p>
                    <p> Motorists Injured: ${crash.number_of_motorist_injured} </p>
                    <hr>
                    <p>Contributing Factor: ${crash.contributing_factor_vehicle_1} </p>
                    <hr>
                    <p>Vehicle Type: ${crash.vehicle_type_code1} </p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found`;
  output.innerHTML = build;
}




function filterByMotorAndStreet(){
  let motor = document.getElementById("motor").value;
  let street = document.getElementById("street").value;
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    if(crash.number_of_motorist_injured == motor && crash.on_street_name == street){
      build += `<div class="fitted card">
                    <h3> ID: ${crash.collision_id} </h3>
                    <p>Street Name: ${crash.on_street_name}</p>
                    <hr>
                    <p> Persons Injured: ${crash.number_of_persons_injured} </p>
                    <p> Motorists Injured: ${crash.number_of_motorist_injured} </p>
                    <hr>
                    <p>Contributing Factor: ${crash.contributing_factor_vehicle_1} </p>
                    <hr>
                    <p>Vehicle Type: ${crash.vehicle_type_code1} </p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found`;
  output.innerHTML = build;
}