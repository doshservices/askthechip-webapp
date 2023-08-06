import { createContext, useContext, useEffect, useState } from "react"

export const ChatContext = createContext({
  selectedChat: null,
  setSelectedChat: () => null,
});


const SelectedChatProvider = ({ children }) => {
  const [selectedChat, setSelectedChat] = useState(null);

  const value = {
    selectedChat,
    setSelectedChat,
  };
  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
};
export const useSelectedChat = () => useContext(ChatContext);
export default SelectedChatProvider;