import { createContext, useContext, useEffect, useState } from "react"
import { io } from "socket.io-client";

export const SocketContext = createContext({
  socket: null,
  setSocket: () => { }
});

export const OnlineUsersContext = createContext({
  onlineUsers: null,
  setOnlineUsers: () => { },
});

const SocketProvider = ({ children }) => {

  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState(null);

  useEffect(() => {
    const newSocket = io("https://api.askthechip.com", {
      transports: ["polling", "websocket"],
    });
    setSocket(newSocket);

    // return () => {
    //   newSocket.disconnect();
    // };
  }, []);

  // useEffect(() => {
  //   socket?.on("getMessage", (incomingMessage) => {
  //     console.log(incomingMessage, "messagge");
  //     setReceivedMessages(incomingMessage);
  //   });

  //   // return () => {
  //   //   socket?.off("getMessage");
  //   // };
  // }, [socket]);

  useEffect(() => {
    socket?.on("getOnlineUsers", (users) => {
      console.log({ users });
      setOnlineUsers(users);
    });
  }, [socket]);

  const onlineUsersValue = {
    onlineUsers,
    setOnlineUsers,
  };

  const socketValue = {
    socket,
  };

  return (
    <SocketContext.Provider value={socketValue}>
      <OnlineUsersContext.Provider value={onlineUsersValue}>
        {children}
      </OnlineUsersContext.Provider>
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
export const useOnlineUsers = () => useContext(OnlineUsersContext);
export default SocketProvider;