import axios from "axios";
import { Posts } from "../components/home";
import { SideNav } from "../components";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import { usePosts } from "../contexts/PostContext/PostContext";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CircleLoader } from "../components";
import { useEffect, useState } from "react";
import { setChatUserId, setMessageClass } from "../store/slice/chatViewSlice";
import { api } from "../contexts";
import { EmptyPost } from "../components/home/feed/EmptyData";

const UserProfile = () => {
    const [postCategory, setPostCategory] = useState("all")
    const [loading, setLoading] = useState(false)
    const { posts, setPosts } = usePosts();
    const reversedPosts = [...posts].reverse();
    const userId = JSON.parse(localStorage.getItem("ask-un-id"))
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (!userId) {
            navigate("/home")
        }
    }, [])

    const filteredPosts = reversedPosts.filter((postItem) => postItem?.userId?._id === userId);

    const { token } = useAuth()
    const id = JSON.parse(localStorage.getItem("ask-un-id"))
    const url = `${api}/api/users/${id}`
    const [profileDetails, setProfileDetails] = useState([])
    // console.log(profileDetails);

    const saveChatUserId = () => {
        if (Object.keys(profileDetails).length > 0) {
            dispatch(setChatUserId(profileDetails))
            dispatch(setMessageClass("show"))
            setTimeout(() => {
                navigate("/messages")
            }, 1000);
        } else {
        }
    }

    const handleGetPosts = async () => {
        setLoading(true);
        try {
            const res = await fetch(
                `${api}/api/post?limit=0&skip=0`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (res.ok) {
                const resData = await res.json();
                const getPosts = resData.data.post;
                setPosts(getPosts);
                setLoading(false);
            }
        } catch (error) {
            setLoading(false);
        }
    };

    useEffect(() => {
        handleGetPosts();
    }, [setPosts]);

    const getUserDetails = () => {
        setLoading(true)
        axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
            .then((response) => {
                setLoading(false)
                setProfileDetails(response?.data?.data?.user)
            }).catch((error) => {
                setLoading(false)
            })
    }

    useEffect(() => {
        getUserDetails()
    }, [])

    const username =
        profileDetails?.role === "BUSINESS"
            ? `${profileDetails?.companyName}`
            : `${profileDetails?.firstName} ${profileDetails?.lastName}`;

    return (
        <>
            <section className="pageLayout">
                <SideNav />
                <div className="pageLayout__wrapper__container">
                    <div className="profile__wrapper">
                        <div className="grid grid-cols-1 h-[7.6875rem] bg-coverImage bg-[#2d2d2d]/60 bg-blend-overlay rounded-lg">
                            <div className="pl-40 sm:pl-44 md:pl-48 xm:pl-48 pt-10">
                                <div className="text-light mt-6 sm:mt-4">
                                    {profileDetails?.role ?
                                        <div className="font-DMSans font-medium text-2xl mb-2 mt-2">
                                            <span>{username}</span>
                                        </div>
                                        : null
                                    }
                                    <div className="w-[90%] text-sm font-DMSans mb-2">{profileDetails.role}</div>
                                </div>
                            </div>
                        </div>
                        <div className="grid-cols-3">
                            <div className="col-span-1 -mt-[4.5rem] sm:-mt-[4rem] xm:-mt-[4rem]">
                                <div className="relative">
                                    {!profileDetails?.profileImg ? (
                                        <div className="flex items-center justify-center w-28 h-28 rounded-full bg-primary100 font-bold text-xl">
                                            <span className="text-white">{username?.[0]}</span>
                                        </div>
                                    ) : (
                                        <img
                                            src={profileDetails?.profileImg}
                                            alt="Profile Image"
                                            className="rounded-full max-w-[8rem] sm:max-w-[8rem] xm:max-w-[8rem] h-auto aspect-square"
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="post_actions items-center mt-4">
                                <div className="post__category__toggler">
                                    <button onClick={() => setPostCategory("all")} className={postCategory === "all" ? "active" : ""}>All Post</button>
                                    <button onClick={() => setPostCategory("white-board")} className={postCategory === "white-board" ? "active" : ""}>White Board</button>
                                    <button onClick={() => setPostCategory("black-board")} className={postCategory === "black-board" ? "active" : ""}>Black Board</button>
                                </div>
                                <button onClick={saveChatUserId} className="bg-primary80 font-DMSans text-light border-[0.3px] border-tertiary px-4 py-[0.4rem] hover:scale-90 transition duration-200 rounded-lg">
                                    Send Message
                                </button>
                            </div>
                            <div className="">
                                <div>
                                    <div className="p-2 pb-0">
                                    </div>
                                    <div>
                                        {loading ? (
                                            <div className="flex justify-center items-center m-4">
                                                <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all p-8 sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                                    <CircleLoader color="#05675A" />
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                {filteredPosts.length > 0 ?
                                                    <>
                                                        {filteredPosts?.map((post, index) => (
                                                            <Posts
                                                                key={index}
                                                                post={post}
                                                                handleGetPosts={handleGetPosts}
                                                            />
                                                        ))}
                                                    </>
                                                    :
                                                    <EmptyPost />
                                                }
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default UserProfile;