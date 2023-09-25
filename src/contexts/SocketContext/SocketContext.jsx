import { createContext, useContext, useEffect, useState } from "react"
import { io } from "socket.io-client";


export const SocketContext = createContext({
  socket: null,
  setSocket: () => { }
});


const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const URL = "https://askthechip-hvp93.ondigitalocean.app";
  useEffect(() => {
    setSocket(io(URL));
  }, [])
  console.log('socket here:', socket)

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