import { createContext, useContext, useEffect, useState } from "react"
import { useAuth } from "../AuthContext/AuthContext";

export const ConversationContext = createContext({
  conversation: [],
  loadingConversations: null,
  setConversation: () => null,
  setLoadingConversations: () => null,
});


const ConversationProvider = ({ children }) => {
  const [conversation, setConversation] = useState([]);
  const [loadingConversations, setLoadingConversations] = useState(false);
 

  const value = {
    conversation, setConversation,
    loadingConversations, setLoadingConversations
  };
  return (
    <ConversationContext.Provider value={value}>
      {children}
    </ConversationContext.Provider>
  );
};
export const useConversation = () => useContext(ConversationContext);
export default ConversationProvider;