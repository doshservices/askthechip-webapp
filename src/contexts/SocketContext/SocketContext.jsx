import { createContext, useContext, useEffect, useState } from "react"
import { io } from "socket.io-client";
import { api } from "../index";
import { useSelector } from "react-redux";

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
  const userId = useSelector((state) => state?.user?.user?._id);
  // console.log(socket);

  useEffect(() => {
    const newSocket = io(api, {
      transports: ["polling", "websocket"],
    });
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  // useEffect(()= >)

  useEffect(() => {
    socket?.emit("addUser", userId);
  }, [socket, userId]);

  useEffect(() => {
    socket?.on("getOnlineUsers", (users) => {
      console.log({ users });
      setOnlineUsers(users);
    });

    return () => {
      socket?.off("getOnlineUsers");
    };
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