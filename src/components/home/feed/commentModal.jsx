import axios from "axios";
import Loader from "../../Loader/Loader";
import { useAuth } from "../../../contexts/AuthContext/AuthContext";
import { useWindowWidth } from "../../../utils/windowWidth";
import { useState, useEffect } from "react";
import EditComment from "../../EditComment/EditComment";
import { forwardRef } from "react";
import useClickOutside from "../../../utils/useClickOiutside";
import { useRef } from "react";
import { api } from "../../../contexts";

const DeleteComment = ({ closeModal, api }) => {
    return (
        <div className="delete__comment">
            <div className="wrapper">
                <p>Are you sure you want to Delete this Comment?</p>
                <div className="actions">
                    <button onClick={api} className="delete">Delete</button>
                    <button onClick={closeModal} className="cancel">Cancel</button>
                </div>
            </div>
        </div>
    )
}

const Comment = ({ comment, post, getComments }) => {

    const { user, token } = useAuth()
    const [optionsModal, setOptionsModal] = useState(false);
    const [deletePopUP, setDeletePopup] = useState(false)
    const [editPopup, setEditPopup] = useState(false)
    const [deleting, setDeleting] = useState(false)

    const toggleDeleteModal = () => {
        setDeletePopup(!deletePopUP)
        setOptionsModal(false)
    }

    const toggleEditModal = () => {
        setEditPopup(!editPopup)
        setOptionsModal(false)
    }

    const handleDelete = async () => {
        setDeleting(true);
        try {
            const response = await fetch(
                `${api}/api/comment/?commentId=${comment?._id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (response.ok) {
                // const resData = await response.json();
                setDeleting(false);
                setDeletePopup(false);
                getComments()
            }
            if (!response.ok) {
                setDeleting(false);
            }
        } catch (error) {
            setDeleting(false);
            setDeletePopup(false);
        }
    };

    const commentOptionRef = useRef();

    useClickOutside(commentOptionRef, () => setOptionsModal(false))

    return (
        <div ref={commentOptionRef} className="comment">
            {comment?.userId?.profileImg ?
                <img src={comment?.userId?.profileImg} alt="" />
                :
                <div className="dp__placeholder">
                    <p>{comment?.userId?.fullName?.[0]}</p>
                </div>
            }
            <div>
                <p className="fullname">{comment?.userId?.fullName}</p>
                <p className="content">{comment?.text}</p>
            </div>
            <svg onClick={() => setOptionsModal(!optionsModal)} className="block ml-auto cursor-pointer mt-2" width="18" height="18" fill="#2d2d2d" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 14.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"></path>
                <path d="M12 21.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"></path>
                <path d="M12 6.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"></path>
            </svg>
            {optionsModal ?
                <div className="options">
                    {user?._id === comment?.userId?._id ?
                        <>
                            <button onClick={toggleEditModal} className="edit">Edit Comment</button>
                            <button onClick={toggleDeleteModal} className="delete">Delete Comment</button>
                        </>
                        :
                        <button className="edit">Reply</button>
                    }
                </div>
                :
                null
            }
            {deletePopUP ? <DeleteComment closeModal={toggleDeleteModal} api={handleDelete} /> : null}
            {editPopup ? <EditComment getComments={getComments} commentText={comment?.text} closeModal={toggleEditModal} commentId={comment?._id} /> : null}
        </div>
    )
}

export const CommentModal = forwardRef(({ close, post }, ref) => {

    const { token } = useAuth();
    const [comment, setComment] = useState([])
    const [commentPost, setCommentPost] = useState("");
    const [loading, setLoading] = useState(false);

    const handleComment = (e) => {
        setCommentPost(e.target.value);
    };

    const getComments = async () => {
        try {
            const response = await axios.get(
                `${api}/api/comment?postId=${post._id}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            // console.log(response);
            setComment(response?.data?.data?.comment);
        } catch (error) {
        }
    };

    const handleSubmit = async (e) => {
        console.log(post?._id);
        e.preventDefault();
        try {
            setLoading(true);
            const res = await axios.post(`${api}/api/comment?postId=${post?._id}`,
                {
                    text: commentPost,
                    docModel: "post"
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setCommentPost("");
            getComments()
            setLoading(false);
            // console.log(res);
        } catch (err) {
            // console.log(err);
            setLoading(false);
        }
        setLoading(false);
    };

    useEffect(() => {
        getComments()
    }, [])

    const width = useWindowWidth()

    return (
        <section className="comment__modal">
            <svg onClick={close} className="close__btn" width="35" height="35 " fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25Zm3.53 12.22a.75.75 0 1 1-1.06 1.06L12 13.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06L10.94 12 8.47 9.53a.75.75 0 0 1 1.06-1.06L12 10.94l2.47-2.47a.75.75 0 0 1 1.06 1.06L13.06 12l2.47 2.47Z"></path>
            </svg>
            <div ref={ref} style={{ maxWidth: post?.postImg ? "800px " : "450px" }} className="comment__modal__wrapper">
                {post?.postImg ?
                    <figure>
                        <img src={post?.postImg} alt="" />
                    </figure>
                    :
                    null
                }
                <div className="comments">
                    <h3 className="content">{post?.content}</h3>
                    {comment.map((comments, index) => {
                        return (
                            <Comment getComments={getComments} comment={comments} key={index} post={post} />
                        )
                    })}
                </div>
                <form onSubmit={handleSubmit} className="add__comment" style={{ left: width < 600 || !post?.postImg ? "10px" : "50.5%" }}>
                    <textarea
                        placeholder="Post a comment...."
                        rows="1"
                        onChange={handleComment}
                        value={commentPost}
                        name="comment"
                        id="comment"></textarea>
                    {commentPost ?
                        <button type="submit" disabled={loading}>
                            {loading ? <Loader /> : "Post"}
                        </button>
                        :
                        null
                    }
                </form>
            </div>
        </section>
    )
})