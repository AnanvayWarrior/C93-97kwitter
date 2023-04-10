var firebaseConfig = {
      apiKey: "AIzaSyC1_NqwWaAyy8_4_xAV1Fn7BgH9aa5Cvlk",
      authDomain: "kwitter-628e7.firebaseapp.com",
      databaseURL: "https://kwitter-628e7-default-rtdb.firebaseio.com",
      projectId: "kwitter-628e7",
      storageBucket: "kwitter-628e7.appspot.com",
      messagingSenderId: "22667291786",
      appId: "1:22667291786:web:682753851d36d2ce15d173"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+ user_name +"!";
function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirect_to_room_name(this.id)'># "+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function addroom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function redirect_to_room_name(name)
{
      console.log(name)
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";

}

function logout()
{
      localStorage.removeItem("room_name")
      localStorage.removeItem("user_name")
      window.location="index.html";
}




