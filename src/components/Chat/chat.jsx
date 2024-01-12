import axios from "axios";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import { useWindowWidth } from "../../utils/windowWidth";
import { setMessageClass } from "../../store/slice/chatViewSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { FavoriteIcon, VideoCallIcon, VoiceCallIcon } from "../../assets/icons";
import { useSocket } from "../../contexts/SocketContext/SocketContext";

const Message = ({ text, message, id }) => {
    return (
        <div className={message?.senderId !== id ? "message sender" : "message mine"}>
            <p>{text}</p>
        </div>
    )
}

export const ChatBox = ({ online, conversation }) => {
    const dispatch = useDispatch()
    const userId = useSelector((state) => state?.user?.user?._id);
    const { token } = useAuth()
    const [message, setMessage] = useState("");
    const chatUserDetails = useSelector((state) => state?.chat?.chatUserId);
    const conversationId = useSelector((state) => state?.chat?.conversationId);
    const messageName = useSelector((state) => state?.chat?.messageClass);
    const [receivedMessages, setReceivedMessages] = useState([]);
    const scrollRef = useRef();
    const { socket } = useSocket()
    console.log(receivedMessages);

    const allMembers = conversation.flatMap(member => member.members);

    let onlineArr = [];
    online?.forEach((user) => onlineArr.push(user._id))

    const checkUserOnline = () => {
        if (onlineArr?.includes(chatUserDetails?._id)) {
            return "online"
        } else {
            return null
        }
    }

    const onlineUser = checkUserOnline();

    useEffect(() => {
        socket?.emit("addUser", userId);
    }, [socket, userId]);

    const getMessages = async () => {
        try {
            const response = await axios.get(
                `https://askthechip-hvp93.ondigitalocean.app/api/chat/conversation/messages?conversationId=${conversationId}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setReceivedMessages(response?.data?.data?.message)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        socket?.on("getMessage", (incomingMessage) => {
            // console.log(incomingMessage);
            receivedMessages.push(
                incomingMessage
            )
            console.log(receivedMessages);
        });
    }, []);

    useEffect(() => {
        getMessages();
    }, [conversationId]);

    const createConversation = () => {
        const url = "https://askthechip-hvp93.ondigitalocean.app/api/chat/conversation"
        axios.post(url, { members: [userId, chatUserDetails?._id] }, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
            }).catch((err) => {
            })
    }

    const sendMessage = async (e) => {
        e.preventDefault();
        if (chatUserDetails?._id) {
            socket?.emit("sendMessage", {
                senderId: userId,
                recieverId: chatUserDetails?._id,
                text: message,
                conversationId: conversationId
            });
        } else {
            console.log("id not found");
        }
        receivedMessages.push({
            conversationId: conversationId,
            createdAt: Date.now(),
            senderId: userId,
            text: message
        })
        setMessage("");
        if (chatUserDetails?._id && !allMembers.includes(chatUserDetails?._id)) {
            createConversation()
        }
    };

    useEffect(() => {
        scrollRef.current?.scrollIntoView()
    }, []);

    useEffect(() => {
        scrollRef.current?.scrollIntoView()
    }, [conversationId, messageName]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView()
    }, [sendMessage]);

    const changeMessageClass = () => dispatch(setMessageClass("hide"))

    const width = useWindowWidth()

    return (
        <div className="chat">
            {chatUserDetails === null ? <p className="block m-auto max-w-[fit-content]">AskTheChip WebApp</p>
                :
                <>
                    <div className="chat__header">
                        <div className="flex items-center gap-[5px] cursor-pointer">
                            {width < 650 &&
                                <svg onClick={changeMessageClass} width="25" height="25" fill="none" stroke="#2d2d2d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.438 18.75 4.688 12l6.75-6.75"></path>
                                    <path d="M5.625 12h13.688"></path>
                                </svg>
                            }
                            <div onClick={changeMessageClass} className={onlineUser === "online" ? "chat__header__user__img online" : "chat__header__user__img"}>
                                {chatUserDetails?.profileImg ?
                                    <img src={chatUserDetails?.profileImg} alt="people" />
                                    :
                                    <span className="text-white">{chatUserDetails.firstName?.[0]}</span>
                                }
                            </div>
                        </div>
                        <div className="chat__header__user">
                            <h3>{chatUserDetails?.firstName} {chatUserDetails?.lastName}</h3>
                            <p className="last__seen" role="time">{onlineUser}</p>
                        </div>
                        <div className="chat__header__actions">
                            <VideoCallIcon />
                            <VoiceCallIcon />
                            <FavoriteIcon />
                        </div>
                    </div>
                    <div className="chat__full__messages">
                        {receivedMessages ?
                            <>
                                {receivedMessages?.map((message, index) => {
                                    return (
                                        <Message id={userId} key={index} message={message} text={message?.text} />
                                    )
                                })}
                            </>
                            :
                            null
                        }
                        <div ref={scrollRef}></div>
                    </div>
                    <div className="chat__send__box">
                        <textarea
                            cols="20"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type your message here..."
                        // onKeyDown={(e) => {
                        //     if (e.key === "Enter") {
                        //         e.preventDefault(); // Prevent the newline character from being added
                        //         sendMessage(); // Call your sendMessage function
                        //     }
                        // }}
                        >
                        </textarea>
                        <div className="actions">
                            {message.replaceAll(' ', '').length > 0 ?
                                <button onClick={sendMessage} className="send__btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" viewBox="0 0 19 16" fill="none">
                                        <path d="M0 16V0L19 8L0 16ZM1.5 13.675L15.1 8L1.5 2.25V6.45L7.55 8L1.5 9.5V13.675Z" fill="#F8F8F8" />
                                    </svg>
                                    <span>Send</span>
                                </button>
                                :
                                <div className="icons">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M10.0003 11.1888C9.4031 11.1888 8.9031 10.9741 8.50033 10.5447C8.09755 10.1153 7.89616 9.5939 7.89616 8.98047V3.7513C7.89616 3.17259 8.10061 2.6807 8.50951 2.27561C8.91842 1.87052 9.41494 1.66797 9.9991 1.66797C10.5832 1.66797 11.0802 1.87052 11.4899 2.27561C11.8996 2.6807 12.1045 3.17259 12.1045 3.7513V8.98047C12.1045 9.5939 11.9031 10.1153 11.5003 10.5447C11.0975 10.9741 10.5975 11.1888 10.0003 11.1888ZM9.37533 17.5013V14.668C7.9031 14.5152 6.66699 13.8971 5.66699 12.8138C4.66699 11.7305 4.16699 10.4527 4.16699 8.98047H5.41699C5.41699 10.2444 5.86344 11.3069 6.75633 12.168C7.64921 13.0291 8.72908 13.4596 9.99591 13.4596C11.2627 13.4596 12.3441 13.0291 13.2399 12.168C14.1357 11.3069 14.5837 10.2444 14.5837 8.98047H15.8337C15.8337 10.4527 15.3337 11.7305 14.3337 12.8138C13.3337 13.8971 12.0975 14.5152 10.6253 14.668V17.5013H9.37533ZM10.0003 9.9388C10.2503 9.9388 10.4552 9.84505 10.6149 9.65755C10.7746 9.47005 10.8545 9.24436 10.8545 8.98047V3.7513C10.8545 3.51519 10.7726 3.31727 10.6089 3.15755C10.4452 2.99783 10.2423 2.91797 10.0003 2.91797C9.75831 2.91797 9.55545 2.99783 9.39174 3.15755C9.22802 3.31727 9.14616 3.51519 9.14616 3.7513V8.98047C9.14616 9.24436 9.22602 9.47005 9.38574 9.65755C9.54546 9.84505 9.75033 9.9388 10.0003 9.9388Z" fill="#2D2D2D" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M7.5 7.5C7.33424 7.5 7.17527 7.56585 7.05806 7.68306C6.94085 7.80027 6.875 7.95924 6.875 8.125C6.875 8.29076 6.80915 8.44973 6.69194 8.56694C6.57473 8.68415 6.41576 8.75 6.25 8.75C6.08424 8.75 5.92527 8.68415 5.80806 8.56694C5.69085 8.44973 5.625 8.29076 5.625 8.125C5.625 7.62772 5.82254 7.15081 6.17417 6.79917C6.52581 6.44754 7.00272 6.25 7.5 6.25C7.99728 6.25 8.47419 6.44754 8.82583 6.79917C9.17746 7.15081 9.375 7.62772 9.375 8.125C9.375 8.29076 9.30915 8.44973 9.19194 8.56694C9.07473 8.68415 8.91576 8.75 8.75 8.75C8.58424 8.75 8.42527 8.68415 8.30806 8.56694C8.19085 8.44973 8.125 8.29076 8.125 8.125C8.125 7.95924 8.05915 7.80027 7.94194 7.68306C7.82473 7.56585 7.66576 7.5 7.5 7.5ZM12.5 7.5C12.3342 7.5 12.1753 7.56585 12.0581 7.68306C11.9408 7.80027 11.875 7.95924 11.875 8.125C11.875 8.29076 11.8092 8.44973 11.6919 8.56694C11.5747 8.68415 11.4158 8.75 11.25 8.75C11.0842 8.75 10.9253 8.68415 10.8081 8.56694C10.6908 8.44973 10.625 8.29076 10.625 8.125C10.625 7.62772 10.8225 7.15081 11.1742 6.79917C11.5258 6.44754 12.0027 6.25 12.5 6.25C12.9973 6.25 13.4742 6.44754 13.8258 6.79917C14.1775 7.15081 14.375 7.62772 14.375 8.125C14.375 8.29076 14.3092 8.44973 14.1919 8.56694C14.0747 8.68415 13.9158 8.75 13.75 8.75C13.5842 8.75 13.4253 8.68415 13.3081 8.56694C13.1908 8.44973 13.125 8.29076 13.125 8.125C13.125 7.95924 13.0592 7.80027 12.9419 7.68306C12.8247 7.56585 12.6658 7.5 12.5 7.5ZM5.66875 10C5.57929 10 5.49087 10.0192 5.40948 10.0564C5.32808 10.0935 5.25561 10.1476 5.19695 10.2152C5.13829 10.2827 5.09482 10.3621 5.06946 10.4479C5.04411 10.5337 5.03748 10.6239 5.05 10.7125C5.21983 11.9043 5.81398 12.9949 6.72332 13.7838C7.63265 14.5728 8.79612 15.0072 10 15.0072C11.2039 15.0072 12.3673 14.5728 13.2767 13.7838C14.186 12.9949 14.7802 11.9043 14.95 10.7125C14.9625 10.6238 14.9559 10.5335 14.9304 10.4476C14.905 10.3617 14.8614 10.2823 14.8026 10.2147C14.7438 10.1472 14.6712 10.093 14.5897 10.056C14.5081 10.0189 14.4196 9.99983 14.33 10H5.66875ZM10 13.75C9.22427 13.75 8.46759 13.5097 7.8341 13.062C7.2006 12.6143 6.72142 11.9812 6.4625 11.25H13.5375C13.2786 11.9812 12.7994 12.6143 12.1659 13.062C11.5324 13.5097 10.7757 13.75 10 13.75ZM17.5 10C17.5 9.01509 17.306 8.03982 16.9291 7.12987C16.5522 6.21993 15.9997 5.39314 15.3033 4.6967C14.6069 4.00026 13.7801 3.44781 12.8701 3.0709C11.9602 2.69399 10.9849 2.5 10 2.5C9.01509 2.5 8.03982 2.69399 7.12987 3.0709C6.21993 3.44781 5.39314 4.00026 4.6967 4.6967C4.00026 5.39314 3.44781 6.21993 3.0709 7.12987C2.69399 8.03982 2.5 9.01509 2.5 10C2.5 11.9891 3.29018 13.8968 4.6967 15.3033C6.10322 16.7098 8.01088 17.5 10 17.5C11.9891 17.5 13.8968 16.7098 15.3033 15.3033C16.7098 13.8968 17.5 11.9891 17.5 10ZM3.75 10C3.75 8.3424 4.40848 6.75269 5.58058 5.58058C6.75269 4.40848 8.3424 3.75 10 3.75C11.6576 3.75 13.2473 4.40848 14.4194 5.58058C15.5915 6.75269 16.25 8.3424 16.25 10C16.25 11.6576 15.5915 13.2473 14.4194 14.4194C13.2473 15.5915 11.6576 16.25 10 16.25C8.3424 16.25 6.75269 15.5915 5.58058 14.4194C4.40848 13.2473 3.75 11.6576 3.75 10Z" fill="#2D2D2D" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M11.6045 2.08677C11.9312 2.08674 12.2522 2.17208 12.5358 2.33433C12.8194 2.49658 13.0556 2.73011 13.2212 3.01177L13.8995 4.1676H15.6253C16.3435 4.1676 17.0322 4.45283 17.5401 4.96056C18.048 5.46829 18.3334 6.15695 18.3337 6.8751V14.7918C18.3337 15.1474 18.2636 15.4996 18.1275 15.8282C17.9914 16.1568 17.7919 16.4554 17.5404 16.7069C17.2889 16.9583 16.9904 17.1578 16.6618 17.2939C16.3332 17.4301 15.981 17.5001 15.6253 17.5001H4.37533C3.65703 17.5001 2.96816 17.2148 2.46024 16.7069C1.95233 16.1989 1.66699 15.5101 1.66699 14.7918V6.8751C1.66699 6.15681 1.95233 5.46793 2.46024 4.96002C2.96816 4.45211 3.65703 4.16677 4.37533 4.16677H6.10866L6.83783 2.9801C7.00548 2.70695 7.24036 2.48134 7.52003 2.3248C7.7997 2.16826 8.11483 2.08602 8.43533 2.08594H11.6045V2.08677ZM11.6045 3.33677H8.43533C8.34413 3.33685 8.25406 3.35688 8.17142 3.39546C8.08879 3.43404 8.0156 3.49023 7.95699 3.5601L7.90283 3.6351L6.99199 5.11844C6.93614 5.20954 6.85786 5.2848 6.76464 5.33703C6.67141 5.38926 6.56635 5.41671 6.45949 5.41677H4.37616C4.18458 5.41666 3.99485 5.4543 3.81782 5.52754C3.64079 5.60078 3.47993 5.70818 3.34442 5.84361C3.20892 5.97904 3.10142 6.13984 3.02808 6.31683C2.95474 6.49382 2.91699 6.68352 2.91699 6.8751V14.7918C2.91699 15.5968 3.57033 16.2501 4.37533 16.2501H15.6253C16.0121 16.2501 16.383 16.0965 16.6565 15.823C16.93 15.5495 17.0837 15.1785 17.0837 14.7918V6.8751C17.0837 6.48833 16.93 6.1174 16.6565 5.84391C16.383 5.57042 16.0121 5.41677 15.6253 5.41677H13.542C13.433 5.41683 13.326 5.3884 13.2314 5.33432C13.1368 5.28023 13.058 5.20237 13.0028 5.10844L12.1428 3.64427C12.0877 3.55046 12.009 3.47267 11.9146 3.4186C11.8202 3.36452 11.7133 3.33603 11.6045 3.33594V3.33677ZM10.0003 6.66677C10.9949 6.66677 11.9487 7.06186 12.652 7.76512C13.3552 8.46838 13.7503 9.42221 13.7503 10.4168C13.7503 11.4113 13.3552 12.3652 12.652 13.0684C11.9487 13.7717 10.9949 14.1668 10.0003 14.1668C9.00576 14.1668 8.05194 13.7717 7.34868 13.0684C6.64541 12.3652 6.25033 11.4113 6.25033 10.4168C6.25033 9.42221 6.64541 8.46838 7.34868 7.76512C8.05194 7.06186 9.00576 6.66677 10.0003 6.66677ZM10.0003 7.91677C9.67202 7.91677 9.34693 7.98143 9.04362 8.10707C8.7403 8.23271 8.4647 8.41686 8.23256 8.649C8.00041 8.88115 7.81626 9.15675 7.69063 9.46006C7.56499 9.76338 7.50033 10.0885 7.50033 10.4168C7.50033 10.7451 7.56499 11.0702 7.69063 11.3735C7.81626 11.6768 8.00041 11.9524 8.23256 12.1845C8.4647 12.4167 8.7403 12.6008 9.04362 12.7265C9.34693 12.8521 9.67202 12.9168 10.0003 12.9168C10.6634 12.9168 11.2993 12.6534 11.7681 12.1845C12.2369 11.7157 12.5003 11.0798 12.5003 10.4168C12.5003 9.75373 12.2369 9.11784 11.7681 8.649C11.2993 8.18016 10.6634 7.91677 10.0003 7.91677Z" fill="#2D2D2D" />
                                    </svg>
                                </div>
                            }
                        </div>
                    </div>
                </>
            }
        </div>
    )
}