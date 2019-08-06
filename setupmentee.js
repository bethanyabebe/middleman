function myMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

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



signmentee.addEventListener('submit', (e) => {
    e.preventDefault();
    checkPass();  
    const emailz1= document.getElementById("emailz1").value;
    var passwordz= document.getElementById("passwordz").value;
    var passwordz1= document.getElementById("passwordz1").value;

    if(passwordz1!=passwordz) {
      alert("Passwords do not match.");
    }
    else{
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

    var bio= document.getElementById("bio").value
    var reasoning= document.getElementById("reasoning").value; 
    var qualities= document.getElementById("qualities").value; 
    var outcome= document.getElementById("outcome").value; 
    var work1= document.getElementById("work1").value;

    const auth = firebase.auth();
    auth.createUserWithEmailAndPassword(emailz1, passwordz).then(cred => {
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
         bio: bio,
         reasoning: reasoning,
         qualities: qualities,
         workExperience: work1,
         outcome: outcome
      })
    })
    .then(function(firebaseUser) {
      window.location.href = "index.html"
    })
    .catch(function(error) {
      alert(error)
    })
  }
  });

  function checkPass() {
    var passwordz= document.getElementById("passwordz").value;
    var passwordz1= document.getElementById("passwordz1").value;
    var message = document.getElementById("confirm-message")

    var good_color = "#66cc66";
    var bad_color  = "#ff6666";

    if(passwordz == passwordz1) {
      document.getElementById("passwordz1").style.backgroundColor= good_color;
      document.getElementById("confirm-message").style.color = good_color;
      message.innerHTML= "Passwords Match!";
      }
    else{
      document.getElementById("passwordz1").style.backgroundColor = bad_color;
     document.getElementById("confirm-message").style.color = bad_color;
      message.innerHTML= "Passwords Do Not Match!";
    }
  }

