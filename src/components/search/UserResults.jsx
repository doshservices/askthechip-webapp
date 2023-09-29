import { useNavigate } from "react-router-dom"

export const UserResults = ({ users }) => {

    const navigate = useNavigate()
    const getUserId = () => {
        localStorage.setItem("ask-un-id", JSON.stringify(users._id))
        setTimeout(() => {
            navigate("/users-profile")
        }, 1000)
    }

    return (
        <>
            <div className="flex items-center justify-between my-2">
                <div className="flex items-center">
                    {users.profileImg ?
                        <img height="40px" width="40px" className="object-cover mr-2" src={users.profileImg} alt={users.firstName} />
                        :
                        <div className="border-[2px] border-solid border-black/10 rounded-full p-1 mr-2">
                            <svg width="40" height="40" fill="#068978" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.592 3.027C14.68 2.042 13.406 1.5 12 1.5c-1.414 0-2.692.54-3.6 1.518-.918.99-1.365 2.334-1.26 3.786C7.348 9.67 9.528 12 12 12c2.472 0 4.648-2.33 4.86-5.195.106-1.439-.344-2.78-1.268-3.778Z"></path>
                                <path d="M20.25 22.5H3.75a1.454 1.454 0 0 1-1.134-.522 1.655 1.655 0 0 1-.337-1.364c.396-2.195 1.63-4.038 3.571-5.333C7.574 14.132 9.758 13.5 12 13.5c2.242 0 4.426.633 6.15 1.781 1.94 1.294 3.176 3.138 3.571 5.332.091.503-.032 1-.336 1.365a1.453 1.453 0 0 1-1.135.522Z"></path>
                            </svg>
                        </div>
                    }
                    <div>
                        <h3 className="font-OpenSans text-[1rem] font-[600] text-dark2D">{users.fullName}</h3>
                        <p className="font-OpenSans text-[.9rem] font-[500] text-secondary">{users.role}</p>
                    </div>
                </div>
                <button className="block text-light bg-primary px-4 py-2 font-OpenSans rounded-[5px]" onClick={getUserId}>Profile</button>
            </div>
        </>
    )
}