// Sign_Up Clicking Effect

let body = document.body;
let sign_up = document.getElementById("main_container_sign_up");
let open = document.getElementById("new_acc");
let close = document.getElementById("cross");


open.onclick = () => {                        // function() and () => are same thing.
  sign_up.style.visibility = "visible";
  body.style.overflow = "hidden";
  sign_up.style.overflowY = "scroll";

}


close.onclick = () => {
  sign_up.style.visibility = "hidden";
  body.style.overflow = "scroll";
}


// Year generator

let years = document.getElementById('years'); 
let currentYear = new Date().getFullYear();    // Note: no need to write currentYear this way, you can wrtie currentyear but since js mostly uses camelcase naming system (or something like that)
                                               // so it is consider better if you write in the camelcase namng system when decleraing your own variables.
let startingYear = 1905;

while (currentYear >= startingYear) {      
  let optionDate = document.createElement('option');          
  optionDate.text = currentYear;      
  optionDate.value = currentYear;        
  years.add(optionDate);      
  currentYear -= 1;                             //Note: if you are wondering why there is text and value and option in while loop then look below
                                                // <select><option value="22">22</option></select>  (here the 22 between the <option>22</option> is text and value is inside the option tags and select is html tag)
}

// Days generator

let days = document.getElementById('days'); 
let lastDay = 31;
let firstDay = 1;

while (lastDay >= firstDay) {      
  let optionDay = document.createElement('option');          
  optionDay.text = lastDay;      
  optionDay.value = lastDay;        
  days.add(optionDay);      
  lastDay -= 1; 
}


// Custom addition option viwer
let custom = document.getElementById('custom');
let additional = document.getElementById('gender_additional');
let formSize = document.getElementById("container_sign_up");
let formTopPosition = document.getElementById('main_container_sign_up');
let formBottomPosition = document.getElementById("sub_container_sign_up")



custom.addEventListener('click', () => {
  additional.style.display = "block";
  formSize.style.height = "61rem";
  formTopPosition.style.paddingTop = "8rem";
  formBottomPosition.style.paddingBottom = "5rem";
});


// To revert form back to its orginal from after custom gender is selected 

let male = document.getElementById('male');
let female = document.getElementById('female');


// revert form to orginal by selecting male
male.addEventListener('click', () => {
  additional.style.display = "none";
  formSize.style.height = "50rem";
  formTopPosition.style.paddingTop = "14rem";
  formBottomPosition.style.paddingBottom = "11rem";
});

// revert form to orginal by selecting female
female.addEventListener('click', () => {
  additional.style.display = "none";
  formSize.style.height = "50rem";
  formTopPosition.style.paddingTop = "14rem";
  formBottomPosition.style.paddingBottom = "11rem";
});


// Additional Language

let moreLanguage = document.getElementById("additional_language");
let getLanguage = document.getElementById("add_language");
let closeLanguge = document.getElementById("close_btn");
let position = document.getElementById("positioning")

getLanguage.onclick = () => {
  moreLanguage.style.display = "block";
  body.style.overflow = "hidden";
  moreLanguage.style.overflowY = "scroll";

}

closeLanguge.onclick = () => {
  moreLanguage.style.display = "none";
  body.style.overflowY = "scroll";
}


