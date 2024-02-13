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
     user_name=localStorage.getItem("User_name");
     room_name=localStorage.getItem("Room_name");
function getData()
{ firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
  
function send()
{
      msg=document.getElementById("input_div").value 
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:9
      })      ;
      document.getElementById("input_div").innerHTML=""
}

function logout()
{
  localStorage.removeItem("User_name")
  localStorage.removeItem("Room_name")
  window.location="index.html"
}