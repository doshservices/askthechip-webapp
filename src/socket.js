import { io } from "socket.io-client";
const URL = "https://askthechip-hvp93.ondigitalocean.app";

export const useSocket = () => {
  const socket = io.connect(URL);
  // console.log(socket);
  return socket;
};

// export default useSocket;
