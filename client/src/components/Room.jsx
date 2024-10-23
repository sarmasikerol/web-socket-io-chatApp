import React from "react";

const Room = ({ username, room, setUsername, setRoom, setChatScreen, socket }) => {

    const sendRoom = () => {

        socket.emit('room', room)
        setChatScreen(true)
        
    }
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-1/3 h-[500px] bg-indigo-600 flex flex-col space-y-4 p-3">
        <h1 className="font-bold text-2xl text-center">WELCOME TO CHAT</h1>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="h-12 rounded-xl p-3 outline-none"
          type="text"
          placeholder="Username"
        />
        <input
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          className="h-12 rounded-xl p-3 outline-none"
          type="text"
          placeholder="Room"
        />
        <div onClick={sendRoom} className="tracking-wider transform hover:scale-110 duration-300 cursor-pointer text-white bg-indigo-900 rounded-xl text-center p-3">
          CHAT
        </div>
      </div>
    </div>
  );
};

export default Room;
