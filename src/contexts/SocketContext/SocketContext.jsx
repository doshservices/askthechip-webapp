import { createContext, useContext, useEffect, useState } from "react"
import { io } from "socket.io-client";

export const SocketContext = createContext({
  socket: null,
  setSocket: () => { }
});

const SocketProvider = ({ children }) => {

  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState("");

  // setTimeout(() => {
  //   console.log(socket);
  // }, 3000)

  useEffect(() => {
    const newSocket = io("http://api.askthechip.com:7000", {
      transports: ["polling", "websocket"],
    });
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    socket?.on("getMessage", (incomingMessage) => {
      console.log(incomingMessage, "messagge");
      setReceivedMessages(incomingMessage);
    });

    return () => {
      socket?.off("getMessage");
    };
  }, [socket]);


  const value = {
    socket
  };

  return (
    <SocketContext.Provider value={value}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
export default SocketProvider;