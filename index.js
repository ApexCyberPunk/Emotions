// javascript

//make button interactive "on click"
// make it to where input creates element and appends values into an li up under the ul.

// names of id's ... input, button, ul 

import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"

import {getDatabase, ref, push, onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const UrlOfDatabase = {
    databaseURL: "https://ementor-6c8f1-default-rtdb.firebaseio.com/"
}
// const app allows for communication between our app and the database @ firebase
const app = initializeApp(UrlOfDatabase);

// set the communication layer inside of the database by fetching the communication layer

const database = getDatabase(app);
 const emotionsInDb = ref(database, "emotions");

//console.log(app);

const idDoc = document.getElementById("id");
const inputDoc = document.getElementById("input");
const buttonDoc = document.getElementById("button");
let ulDoc = document.getElementById("ul");


buttonDoc.addEventListener("click", function () {
    
    let creationDom = document.createElement('li')
    let inputValue = inputDoc.value;
    creationDom.textContent = inputValue;
    ulDoc.appendChild(creationDom);
    push(emotionsInDb, inputValue)
   
    
    // DEFINE which data base e.g.(emotionsInDb) then name that database
    
inputDoc.value = "";
  
 })

 onValue(emotionsInDb, function(snapshot) {
     let emotionsArr = Object.values(snapshot.val())
    
     
     for (let x = 0; x < emotionsArr.length; x++) {
         
         let currentEmotions = emotionsArr[x];
        
         appendBookToBooksListEl(currentEmotions)
     }
 })
    

 function appendBookToBooksListEl(parameter) {
    ulDoc.innerHTML += `<li>${parameter}</li>`
    }

