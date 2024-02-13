function adsusername()
    {
       User_name=document.getElementById("username").value
       localStorage.setItem("User_name",User_name)
       window.location="kwitter_room.html"
    }
