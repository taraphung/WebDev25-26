let data, info;

async function init(){   
  let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
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
              </div>`    
  }
  output.innerHTML = build;
}


function filterByStreet(){
  let output = document.getElementById("output");
  let street = document.getElementById("street").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    if(crash.on_street_name == street){
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
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}


function filterByID(){
  let output = document.getElementById("output");
  let id = document.getElementById("idname").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    if(crash.collision_id == id){
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
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
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



function filterByIDAndCon(){
  let id = document.getElementById("id").value;
  let con = document.getElementById("con").value;
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    if(crash.collision_id == id && crash.contributing_factor_vehicle_1 == con){
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

