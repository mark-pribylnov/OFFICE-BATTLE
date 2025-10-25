import "./play-game.js";

// // io connects to the socket.io server at the url. It return a socket that we store in the variable "socket" (or name it whatever you want) -> https://youtu.be/GdYVTWujYD8?si=6GbbzrMgQfIhF8Vh&t=3813
// const socket = io("http://localhost:3000", {
//   // About auth and query -> https://youtu.be/GdYVTWujYD8?si=kSriN0mXVNd4qwLq&t=3695
//   auth: {
//     secret: "Little secret", // NOT available in the URL, but available in server in the "connection" (io.on("connection", socket =>{...}))
//   },
//   // with this auth: you can make authentification and if the client didn't pass, disconnect it form the server side
//   query: {
//     meaningOfLife: 42, // available in the URL
//   },
// }); // insert your express server address

// // This socket has an "on" method and an "emit" method just like in server.js -> https://youtu.be/GdYVTWujYD8?si=4mWIdS6U1ijKxO-N&t=2146

// socket.on("anyEventName(here's your stuff)", data => {
//   console.log(data);
//   // once "enyEventName" is emmited from the server, we run this callback
//   socket.emit("thank_you_event", ["here's the money"]);
// });

// socket.on("Hey_to_all_clients", data => {
//   console.log("Message to all clients", data);
// });

// socket.on("message_from_server_to_all_clients", newMessage => {
//   document.getElementById("messages").innerHTML += `<li>${newMessage}</li>`;
// });

// document.getElementById("messages-form").addEventListener("submit", e => {
//   e.preventDefault();

//   const newMessage = document.getElementById("user-message").value;
//   document.getElementById("user-message").value = "";

//   socket.emit("message_from_client_to_server", newMessage); // this socket is sending an event to the server
// });
