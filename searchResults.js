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
 doc = db.collection("mentorUsers").get()
    
.then(function(doc) {
      db.collection("mentorUsers").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) { 
        retrieveData(doc)
        searchResults(doc)
    });
    });
    });
    });

function searchResults(doc) {
    console.log("hola3")
  var select = document.getElementById("new")
  var result = select.options[select.selectedIndex].text
     console.log("hola4")
    }
function retrieveData(doc) {
    console.log("hola5")
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
document.getElementById("container").appendChild(box);
 var button = document.createElement("button");
 button.innerHTML = "Learn More!";
 box.appendChild(button);
button.addEventListener("click", function() {
    window.location.href = "mentorpage.html"
    
});
} 

 function reloadResults(){
     console.log("hola1")
  var select = document.getElementById("new")
  var result = select.options[select.selectedIndex].text
   doc = db.collection("mentorUsers").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        console.log("hola2")
        if (result === doc.data().currentProfession) {
            retrieveData(doc)}
        else {
            return "No Results Found"
        }
        retrieveData(doc);      
   })
  })
}
$(document).ready(function() {
    console.log("work1")
    reloadResults()
  }); 

