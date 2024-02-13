var firebaseConfig = {
  apiKey: "AIzaSyCiPJaZcDDXg3F1Oa39cUSUkRmIlsYvxlQ",
  authDomain: "the-real-wirt.firebaseapp.com",
  databaseURL: "https://the-real-wirt-default-rtdb.firebaseio.com",
  projectId: "the-real-wirt",
  storageBucket: "the-real-wirt.appspot.com",
  messagingSenderId: "594506223068",
  appId: "1:594506223068:web:6e172fb6c29783f6b65319"
};
 

 firebase.initializeApp(firebaseConfig);
     username=localStorage.getItem("User_name")
     document.getElementById("user_name").innerHTML= "welcome "  + username +"?!";
     function adroom()
     { 
       roomname=document.getElementById("room_name").value
       firebase.database().ref("/").child(roomname).update({
        purpose:"addingroomname"
       });
       localStorage.setItem("room_name",roomname);
       window.location="kwitter_page.html"
     }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
        console.log(Room_names)
        row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div> <hr>"
        document.getElementById("output").innerHTML+=row
      });});}
getData();
  function redirect(name)
  {
    localStorage.setItem("Room_name", name)
    window.location="kwitter_page.html"
  }
  function logout()
  {
    localStorage.removeItem("User_name")
    localStorage.removeItem("Room_name")
    window.location="index.html"
  }