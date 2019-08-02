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
    const emailz= document.getElementById("emailz").value;
    const passwordz= document.getElementById("passwordz").value;
   
    var name= document.getElementById("name").value;
    var address1= document.getElementById("address1").value;
    var address2= document.getElementById("address2").value;
    var city= document.getElementById("city").value;
    var state= document.getElementById("state").value;
    var zip= document.getElementById("zip").value;
    var phone= document.getElementById("phone").value;
    var age= document.getElementById("age").value;
    var education= document.getElementById("education").value;
    var cprofession= document.getElementById("cprofession").value; 
    var work= document.getElementById("work").value;

    const auth1= firebase.auth();
    auth1.createUserWithEmailAndPassword(emailz, passwordz).then(cred1 => {
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
         workExperience: work
});
});
});



/*

saveItemToDatabase(name, emailz, address1, address2, city, state, zip, phone, age, education, cprofession, work);

 function saveItemToDatabase(name, emailz, address1, address2, city, state, zip, phone, age, education, cprofession, work){
        doc= db.collection("mentorUsers").add({
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
         currentPofession: cprofession,
         workExperience: work
        })
      }

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


    const auth = firebase.auth();
    const check2 = auth.createUserWithEmailAndPassword(emailz, passwordz);
    check2.catch(e => alert(e.message));

  } */
