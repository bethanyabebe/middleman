  var firebaseConfig = {
    apiKey: "AIzaSyDxhIg82JXWxzP8Aqfum_3i5cbLkJ3Kxn0",
    authDomain: "middleman-56862.firebaseapp.com",
    databaseURL: "https://middleman-56862.firebaseio.com",
    projectId: "middleman-56862",
    storageBucket: "middleman-56862.appspot.com",
    messagingSenderId: "814613593392",
    appId: "1:814613593392:web:aaa1fe72b5b3f70a"
  };
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore(); 


search1.addEventListener("click", function(e) { 
e.preventDefault()
    console.log('bruh')
    });
    function searchResults(doc) {
    console.log("bruh2")
  var select = document.getElementById("new")
  var result = select.options[select.selectedIndex].text
     console.log("here2")
   if (result === doc.data().currentProfession) {
      then (doc.data(). currentProfession) }  
        else {
            return "No Results Found "
        }
  
    }
  

function retrieveData(doc) {
    console.log("wdym")
var box = document.createElement("div");
var name = document.createElement("p");
name.innerHTML = doc.data().name;   
    box.appendChild(name); 
var current = document.createElement("p")
current.innerHTML = doc.data().currentProfession;
     box.appendChild(current);
var edu = document.createElement("p");
edu.innerHTML = doc.data().educationLevel;
     box.appendChild(edu);
var work = document.createElement("p");
work.innerHTML = doc.data().workExperience;
    box.appendChild(work);
    
document.getElementById("container").appendChild(box);
}

 
  


 function reloadResults(){
     console.log("middle")
  db.collection("mentorUsers").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        console.log("bbbb")
         retrieveData(doc)
         searchResults(doc)
         
   })
  })
}
   

$(document).ready(function() {
    reloadResults()
  }); 

