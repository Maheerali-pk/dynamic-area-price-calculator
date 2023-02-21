let btn = document.querySelector(".btn");
let main = document.querySelector(".main");
// Dummy Cities
let cities = ["city1", "city2", "city3", "city4"];
//Dummy Data
let data = [
  {
    areaName: "myhouse",
    areaCircleRate: 22,
    areaStampDuty: 55,
    areaRegisterationCharges: 44,
  },
  {
    areaName: "yourhouse",
    areaCircleRate: 2,
    areaStampDuty: 5,
    areaRegisterationCharges: 4,
  },
];

btn.addEventListener("click", myFunc);
function myFunc(a) {
  //             FOR CITY

  main.innerHTML = `<div class="container"> <div class=main-1><label>City</label><select class="city prop">
    </select></div><div class=main-1><label>Area</label> <select class="area prop" onChange="update()">  
    </select></div><div class="predefined"></div>
     <div class= main-1> <label>Size (in sq_ft)</label>
     <input type="number" class= "size prop" placeholder="Size"
      onChange="update()"></div><button onclick="calculate()" class='cal'>Calculate</button>
    <div class='ans'><div></div>`;
  let city = document.querySelector(".city");
  for (let i = 0; i < cities.length; i++) {
    let newOption = document.createElement("option");
    newOption.innerText = `${cities[i]}`;
    city.appendChild(newOption);
  }
  //        For Area
  let area = document.querySelector(".area");
  for (let i = 0; i < data.length; i++) {
    let newOptionArea = document.createElement("option");
    newOptionArea.innerText = `${data[i].areaName}`;
    area.appendChild(newOptionArea);
    let predefined = document.querySelector(".predefined");
    predefined.innerHTML = `<h4>Circle Rate = ${data[0].areaCircleRate}(currency)</h4>`;
  }
}
function update() {
  let size = document.querySelector(".size");
  area = document.querySelector(".area");
  let val = area.options[area.selectedIndex].value;
  const selectedArea = data.find((x) => x.areaName === val);
  let predefined = document.querySelector(".predefined");
  predefined.innerHTML = `<h4>Circle Rate = ${selectedArea.areaCircleRate}(currency)</h4>`;
}
function calculate() {
  let ans = document.querySelector(".ans");
  let size = document.querySelector(".size");
  area = document.querySelector(".area");
  let val = area.options[area.selectedIndex].value;
  const selectedArea = data.find((x) => x.areaName === val);
  let circleRate = selectedArea.areaCircleRate;
  let stampDuty = selectedArea.areaStampDuty;
  let registerationCharge = selectedArea.areaRegisterationCharges;
  let totalAmount = size.value * circleRate;
  let totalValue = registerationCharge + stampDuty + totalAmount + "(Currency)";
  ans.textContent = `The Total Value is ${totalValue}`;
  ans.style.display = "flex";
}
