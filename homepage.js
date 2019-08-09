function myMenu() {
  document.getElementsByClass('dropdown-content').classList.toggle('show')
}

$('#button').click(function(event) {
  if (!event.target.matches('.button')) {
    var dropdowns = document.getElementsByClassName('dropdown-content')
    var i
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i]
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show')
      }
    }
  }
});

function changeImage(doc){
    randomimagearray = [doc.data().Image1, doc.data().Image2, doc.data().Image3, doc.data().Image4, doc.data().Image5, doc.data().Image6, doc.data().Image7]
    randomimage = randomimagearray[Math.floor(Math.random()*randomimagearray.length)]
    document.getElementById('homepage').style.backgroundImage = 'url("' + randomimage + '.jpg")';
    setInterval(function(){ randomimagearray = [doc.data().Image1, doc.data().Image2, doc.data().Image3, doc.data().Image4, doc.data().Image5, doc.data().Image6, doc.data().Image7]
    randomimage = randomimagearray[Math.floor(Math.random()*randomimagearray.length)]
    document.getElementById('homepage').style.backgroundImage = 'url("' + randomimage + '.jpg")'; }, 5000);
    
}

function loadImages(){
    db.collection("homepagepictures").doc("homepagepics").get().then(function(doc){
        changeImage(doc);
    });
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById('myDropdown2').classList.toggle('show2')
}

// Close the dropdown menu if the user clicks outside of it
$('#button2').click(function(event2) {
  if (!event2.target.matches('.button2')) {
    var dropdownz = document.getElementsByClassName('dropdown2-content')
    var j
    for (j = 0; j < dropdownz.length; j++) {
      var open = dropdownz[j]
      if (open.classList.contains('show2')) {
        open.classList.remove('show2')
      }
    }
  }
});

$(document).ready(function(){
  loadImages(); //Loads posts when the page loads
});


const btnLogout = document.getElementById('btnLogout');
var profile = document.getElementById('profile');
var log = document.getElementById('login2');


btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
    }); 

  firebase.auth().onAuthStateChanged(firebaseUser => {
       if (firebaseUser) {
           console.log(firebaseUser); 
           log.style.display= 'none';
           profile.style.display= 'hidden';
              }
              else {
           console.log('not logged in')
           log.style.display= 'hidden';
           profile.style.display= 'none';
                  }
              })
