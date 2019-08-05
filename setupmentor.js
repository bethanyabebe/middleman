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



signmentor.addEventListener('submit', (e) => {  
    e.preventDefault();
    
    const passwordz2= document.getElementById("passwordz2").value;
    const passwordz3= document.getElementById("passwordz3").value;
   
    if(passwordz3!=passwordz2) {
      alert("Passwords do not match.");
    }
    else{

    const emailz= document.getElementById("emailz1").value;
    var name= document.getElementById("name1").value;
    var address1= document.getElementById("address3").value;
    var address2= document.getElementById("address4").value;
    var city= document.getElementById("city2").value;
    var state= document.getElementById("state1").value;
    var zip= document.getElementById("zip1").value;
    var phone= document.getElementById("phone1").value;
    var age= document.getElementById("age1").value;
    var education= document.getElementById("education1").value;
    var cprofession= document.getElementById("cprofession1").value; 

    var bio= document.getElementById("bio").value
    var strengthWeaknesses = document.getElementById("strengthWeaknesses").value; 
    var motivation = document.getElementById("motivation").value; 
    var work= document.getElementById("work").value;
    var experience = document.getElementById("experience").value; 

    const auth1= firebase.auth();
    auth1.createUserWithEmailAndPassword(emailz, passwordz2).then(cred1 => {
      return db.collection ("mentorUsers").doc(cred1.user.uid).set({
        name: name,
         email: emailz,
         address1: address1,
         address2: address2,
         city: city,
         state: state,
         zipCode: zip,
         phoneNumber: phone,
         age: age,
         educationLevel: education,
         currentProfession: cprofession,
         bio: bio,
         strengthWeaknesses: strengthWeaknesses,
         motivation: motivation,
         workExperience: work,
         experience: experience
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

