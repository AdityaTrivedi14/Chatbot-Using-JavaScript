function talk(){
  var know = {
    "Hi" : "Hello, Developers Community Here.",
    "How are you" : "Good :)",
    "What can i do for you" : "Please Give us A Subscribe.",
    "ok" : "Thank You So Much <3",
    "Bye" : "Okay! Will meet soon. TC:).."
  };
  var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
  if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
  }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
  }
}
