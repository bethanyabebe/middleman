function myMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.button')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//const signupForm = document.querySelector('#signmentee');
signmentee.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailz1= document.getElementById("emailz1").value;
    const passwordz2= document.getElementById("passwordz2").value;

    var name1 = document.getElementById("name1").value
    var address3= document.getElementById("address3").value;
    var address4= document.getElementById("address4").value;
    var city2= document.getElementById("city2").value;
    var state1= document.getElementById("state1").value;
    var zip1= document.getElementById("zip1").value;
    var phone1= document.getElementById("phone1").value;
    var age1= document.getElementById("age1").value;
    var education1= document.getElementById("education1").value;
    var cprofession1= document.getElementById("cprofession1").value; 
    var iprofession= document.getElementById("iprofession1").value; 
    var work1= document.getElementById("work1").value;

    const auth = firebase.auth();
    auth.createUserWithEmailAndPassword(emailz1, passwordz2).then(cred => {
      return db.collection ("menteeUsers").doc(cred.user.uid).set({
         name: name1,
         email: emailz1,
         address1: address3,
         address2: address4,
         city: city2,
         state: state1,
         zipCode: zip1,
         phoneNumber: phone1,
         age: age1,
         educationLevel: education1,
         currentProfession: cprofession1,
         interestedProfession: iprofession,
         workExperience: work1
   
      });

    }); //.then return to homepage


  });
    
/*
    const passwordz2= document.getElementById("passwordz2").value;
    var address3= document.getElementById("address3").value;
    var address4= document.getElementById("address4").value;
    var city1= document.getElementById("city2").value;
    var state1= document.getElementById("state1").value;
    var zip1= document.getElementById("zip1").value;
    var phone1= document.getElementById("phone1").value;
    var age1= document.getElementById("age1").value;
    var education1= document.getElementById("education1").value;
    var cprofession1= document.getElementById("cprofession1").value; 
    var iprofession= document.getElementById("iprofession1").value; 
    var work1= document.getElementById("work1").value;

    saveItemToDatabase(name1, emailz1, address3, address4, city1, state1, zip1, phone1, age1, education1, cprofession1, iprofession, work1);



 function saveItemToDatabase(name1, emailz1, address3, address4, city1, state1, zip1, phone1, age1, education1, cprofession1, iprofession, work1){
        doc= db.collection("menteeUsers").add({
         name: name1,
         email: emailz1,
         address1: address3,
         address2: address4,
         city: city1,
         state: state1,
         zipCode: zip1,
         phoneNumber: phone1,
         age: age1,
         educationLevel: education1,
         currentProfession: cprofession1,
         interestedProfession: iprofession,
         workExperience: work1
        })
      };

      firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
          console.log(firebaseUser); 
         // btnLogout.classList.remove("hide")
        }
        else {
          console.log('not logged in')
        //  btnLogout.classList.add("hide")
        }
        })

         /* if (passwordz!=passwordz1) {
    alert("Please reenter password")
  } 
  */
