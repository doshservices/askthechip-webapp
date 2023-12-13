import { useDispatch } from "react-redux";
import { setChatUserId, setMessageClass } from "../../store/slice/chatViewSlice";

export const Message = ({ info }) => {
    const dispatch = useDispatch()

    const saveId = () => {
        dispatch(setChatUserId(info?.id))
        dispatch(setMessageClass("show"))
    }

    return (
        <div className="chat__messages">
            <img src={info?.photo} alt={info?.name} />
            <div className="sender__info">
                <h3>{info.name}</h3>
                <p>{info.previewMessage}</p>
            </div>
            <div className="time">
                <p role="time">{info?.time}</p>
                <span>{info?.unread}</span>
            </div>
        </div>
    )
}