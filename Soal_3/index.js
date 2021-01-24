const data = require("./data.json")

// 1 Find items in Meeting Room.
let quest1 = []
search(
  data,
  "if(element.placement.name.toLowerCase() == 'meeting room'){"+
    "quest1.push(element)"+
  "}"
)
// 2 Find all electronic devices.
let quest2 = []
search(
  data,  
  "if(element.type.toLowerCase() == 'electronic'){"+
    "quest2.push(element)"+
  "}"
)
// 3 Find all furnitures.
let quest3 = []
search(
  data,  
  "if(element.type.toLowerCase() == 'furniture'){"+
    "quest3.push(element)"+
  "}"
)
// 4 Find all items was purchased at 16 Januari 2020.
let quest4 = []
search(
  data,  
  "var date = new Date(element.purchased_at * 1000);"+
  "if(date.getFullYear() == 2020 && date.getMonth()+1 == 1 && date.getDate() == 16){"+
    "quest4.push(element)"+
  "}"
)
// 5 Find all items with brown color.
let quest5 = []
search(
  data,  
  "if(element.tags.length > 0){"+
    "element.tags.forEach(subel => {"+
      "if(subel.toLowerCase() == 'brown'){"+
        "quest5.push(element)"+
      "}"+
    "})"+
  "}"
)

console.log(
  // 1 Find items in Meeting Room.
  "1. Find items in Meeting Room. : ",
  spitter(), 
  quest1,
  spitter(),
  // 2 Find all electronic devices.
  "2. Find all electronic devices. : ",
  spitter(), 
  quest2,
  spitter(),
  // 3 Find all furnitures.
  "3. Find all furnitures. : ",
  spitter(), 
  quest3,
  spitter(),
  // 4 Find all items was purchased at 16 Januari 2020.
  "4. Find all items was purchased at 16 Januari 2020. : ",
  spitter(), 
  quest4,
  spitter(),
  // 5 Find all items with brown color.
  "5. Find all items with brown color. : ",
  spitter(), 
  quest5,
  spitter()
)

function search(data,condition){
  data.forEach(element => {
    eval(condition)
  });
}


function spitter(){
  return "\n ======================================================= \n"
}