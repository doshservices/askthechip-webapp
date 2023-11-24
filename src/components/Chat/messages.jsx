export const Message = ({ senderImg, senderName, amount, message, time }) => {
    return (
        <div className="chat__messages">
            <img src={senderImg} alt={senderName} />
            <div className="sender__info">
                <h3>{senderName}</h3>
                <p>{message}</p>
            </div>
            <div className="time">
                <p role="time">{time}</p>
                <span>{amount}</span>
            </div>
        </div>
    )
}