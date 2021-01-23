const data  = require('./data.json')

// 1 Find users who doesn't have any phone numbers. 
let quest1 = []
search(
  data,
  "if(element.profile.phones.length == 0){"+
    "quest1.push(element)"+
  "}"
)
// 2 Find users who have articles. 
let quest2 = []
search(
  data,
  "if(element['articles:'].length > 0){"+
    "quest2.push(element)"+
  "}"
)
// 3 Find users who have "annis" on their name. 
let quest3 = []
search(
  data,
  "if(element.profile.full_name.substr(0, 5).toLowerCase() == 'annis'){"+
    "quest3.push(element)"+
  "}"
)
// 4 Find users who have articles on year 2020. 

console.log(
  // 1 Find users who doesn't have any phone numbers. 
  "1. Find users who doesn't have any phone numbers : ",
  spitter(), 
  quest1,
  spitter(),
  // 2 Find users who have articles. 
  "2. Find users who have articles : ",
  spitter(), 
  quest2,
  spitter(),
  // 3 Find users who have "annis" on their name. 
  "3. Find users who have 'annis' on their name : ",
  spitter(), 
  quest3,
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