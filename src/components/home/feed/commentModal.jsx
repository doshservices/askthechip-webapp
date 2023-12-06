import { useState, useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContext/AuthContext";
import axios from "axios";

export const CommentModal = ({ close, post }) => {
    // console.log(post);

    const { token } = useAuth();
    const [comment, setComment] = useState([])
    // const [optionsModal, setOptionsModal] = useState(false)

    // console.log(comment);
    const getComments = async () => {
        try {
            const response = await axios.get(
                `https://askthechip-hvp93.ondigitalocean.app/api/comment?postId=${post._id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setComment(response?.data?.data?.comment);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getComments()
    }, [])

    return (
        <section className="comment__modal">
            <svg onClick={close} className="close__btn" width="35" height="35 " fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25Zm3.53 12.22a.75.75 0 1 1-1.06 1.06L12 13.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06L10.94 12 8.47 9.53a.75.75 0 0 1 1.06-1.06L12 10.94l2.47-2.47a.75.75 0 0 1 1.06 1.06L13.06 12l2.47 2.47Z"></path>
            </svg>
            <div style={{ maxWidth: post?.postImg ? "800px " : "450px" }} className="comment__modal__wrapper">
                {post?.postImg ?
                    <figure>
                        <img src={post?.postImg} alt="" />
                    </figure>
                    : null
                }
                <div className="comments">
                    <h3 className="content">{post?.content}</h3>
                    {comment.map((comments, index) => {
                        return (
                            <div className="comment" key={index}>
                                {post?.userId?.profileImg ?
                                    <img src={post?.userId?.profileImg} alt="" />
                                    :
                                    <div className="dp__placeholder">
                                        <p>{post?.userId?.fullName?.[0]}</p>
                                    </div>
                                }
                                <div>
                                    <p className="fullname">{post?.userId?.fullName}</p>
                                    <p className="content">{comments?.text}</p>
                                </div>
                                {/* <svg className="block ml-auto cursor-pointer mt-2" width="18" height="18" fill="#2d2d2d" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 14.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"></path>
                                    <path d="M12 21.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"></path>
                                    <path d="M12 6.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"></path>
                                </svg> */}
                                {/* <div className="options">
                                    <button>Delete Comment</button>
                                </div> */}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}