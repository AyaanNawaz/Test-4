
firebaseConfig = {
      apiKey: "AIzaSyCWuibRz4NrSADiSQ4JH4fsX7pbdnk2lZI",
      authDomain: "kwitter-a562e.firebaseapp.com",
      databaseURL: "https://kwitter-a562e-default-rtdb.firebaseio.com",
      projectId: "kwitter-a562e",
      storageBucket: "kwitter-a562e.appspot.com",
      messagingSenderId: "714617867823",
      appId: "1:714617867823:web:be4891536d5aaae1b940da",
      measurementId: "G-29Y3G61VWD"
    };
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name +"!";
function addRoom(){
room_name=document.getElementById("room_name").value ;
firebase.database().ref("/").child(room_name).update({
      purpose: "Adding Room Name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html"

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+" </div><hr>";
"<br>"
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}
function logOut(){
window.location="index.html"
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
}