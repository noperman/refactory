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
let quest4 = []
search(
  data,
  "if(element['articles:'].length > 0){"+
    "element['articles:'].forEach(subel => {"+
      "var date = new Date(subel.published_at);"+
      "if(date.getFullYear() == 2020){"+
        "quest4.push(element)"+
      "}"+
    "})"+
  "}"
)
// 5 Find users who are born on 1986. 
let quest5 = []
search(
  data,
  "var date = new Date(element.profile.birthday);"+
  "if(date.getFullYear() == 1986){"+
    "quest5.push(element)"+
  "}"
)
// 6 Find articles that contain "tips" on the title. 
let quest6 = []
search(
  data,
  "if(element['articles:'].length > 0){"+
    "element['articles:'].forEach(subel => {"+
      "if(subel.title.substr(0, 4).toLowerCase() == 'tips'){"+
        "quest6.push(element)"+
      "}"+
    "})"+
  "}"
)
// 7 Find articles published before August 2019.
let quest7 = []
search(
  data,
  // "if(element['articles:'].length > 0){"+
  //   "element['articles:'].forEach(subel => {"+
  //     "var date = new Date(subel.published_at);"+
  //     "if(date.getFullYear() == 2019){"+
  //       "if(date.getMonth() < 8){"+
  //         "quest7.push(element)"+
  //       "}"+
  //     "}"+
  //   "})"+
  // "}"
  "if(element['articles:'].length > 0){"+
    "for(var i=0;i < element['articles:'].length; i++){"+
      "var date = new Date(element['articles:'][i].published_at);"+
      "if(date.getFullYear() == 2019){"+
        "if(date.getMonth() < 8){"+
          "quest7.push(element);break;"+
        "}"+
      "}"+
    "}"+
  "}"
)

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
  spitter(),
  // 4 Find users who have articles on year 2020. 
  "4. Find users who have articles on year 2020. : ",
  spitter(), 
  quest4,
  spitter(),
  // 5 Find users who are born on 1986. 
  "5. Find users who are born on 1986. : ",
  spitter(), 
  quest5,
  spitter(),
  // 6 Find articles that contain "tips" on the title. 
  "6. Find articles that contain 'tips' on the title. : ",
  spitter(), 
  quest6,
  spitter(),
  // 7 Find articles published before August 2019.
  "7. Find articles published before August 2019. : ",
  spitter(), 
  quest7,
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