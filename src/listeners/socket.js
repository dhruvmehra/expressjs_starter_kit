// import { DefaultTrack } from "../utils/track/DefaultTrack";
const io = require("socket.io")();

const socket = {
  io: io,
};

// Socket.io logic here!
io.on("connection", function (socket) {
  console.log("A user connected", socket.id);
  // Logic here
  socket.on("disconnect", (data) => {
    // Logic here
  });
});
// end of socket.io logic

module.exports = socketGame;
