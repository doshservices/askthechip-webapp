import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext/AuthContext";
import { useEffect } from "react";
import axios from "axios";

export const CommentModal = ({ close, post }) => {
    console.log(post);

    const { token } = useAuth();
    const [comment, setComment] = useState([])
    console.log(comment);
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
            <svg onClick={close} className="close__btn" width="40" height="40" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                                <img src={post?.userId?.profileImg} alt="" />
                                <div>
                                    <p className="fullname">{post?.userId?.fullName}</p>
                                    <p className="content">{comments?.text}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}