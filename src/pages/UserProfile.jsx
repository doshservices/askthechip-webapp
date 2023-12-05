import camera from "../assets/icons/camera-icon.svg"
import axios from "axios";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import { useEffect, useState } from "react";
import { SideNav } from "../components";
import envelope from "../assets/icons/envelope.svg";
import { Posts } from "../components/home";
import { CircleLoader } from "../components";
import { usePosts } from "../contexts/PostContext/PostContext";

const UserProfile = () => {
    const [profileImage, setProfileImg] = useState("")
    const [viewer, setViewer] = useState("self");
    const [postCategory, setPostCategory] = useState("all")
    const [loading, setLoading] = useState(false)
    const { posts, setPosts } = usePosts();
    const reversedPosts = [...posts].reverse();
    const userId = JSON.parse(localStorage.getItem("ask-un-id"))

    const filteredPosts = reversedPosts.filter((postItem) => postItem?.userId?._id === userId);

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        try {
            const base64String = await fileToBase64(file);
            setProfileImg(base64String);
        } catch (error) {
        }
    };

    const { token } = useAuth()
    const id = JSON.parse(localStorage.getItem("ask-un-id"))
    const url = `https://askthechip-hvp93.ondigitalocean.app/api/users/${id}`
    const [profileDetails, setProfileDetails] = useState([])

    const handleGetPosts = async () => {
        setLoading(true);
        try {
            const res = await fetch(
                "https://askthechip-hvp93.ondigitalocean.app/api/post?limit=0&skip=0",
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

    return (
        <>
            <section className="pageLayout">
                <SideNav />
                <div className="pageLayout__wrapper__container">
                    <div className="profile__wrapper">
                        <div className="grid grid-cols-1 h-[7.6875rem] bg-coverImage bg-[#2d2d2d]/60 bg-blend-overlay rounded-lg">
                            <div className="pl-40 sm:pl-44 md:pl-48 xm:pl-48 pt-10">
                                <div className="text-light mt-6 sm:mt-4">
                                    <div className="font-DMSans font-medium text-2xl mb-2 mt-2">
                                        {profileDetails?.fullName}
                                    </div>
                                    <div className="w-[90%] text-sm font-DMSans mb-2">{profileDetails.role}</div>
                                </div>
                            </div>
                        </div>
                        <div className="grid-cols-3">
                            <div className="col-span-1 -mt-[4.5rem] sm:-mt-[4rem] xm:-mt-[4rem]">
                                <div className="relative">
                                    {!profileDetails?.profileImg ? (
                                        <div className="flex items-center justify-center w-28 h-28 rounded-full bg-primary100 font-bold text-xl">
                                            <span className="text-white">{profileDetails?.firstName?.[0]}</span>
                                        </div>
                                    ) : (
                                        <img
                                            src={profileDetails?.profileImg}
                                            alt="Profile Image"
                                            className="rounded-full max-w-[8rem] sm:max-w-[8rem] xm:max-w-[8rem] h-auto aspect-square"
                                        />
                                    )}
                                    <div className="flex flex-col items-center justify-center mt-2">
                                        <label className="w-full cursor-pointer">
                                            <img
                                                src={camera}
                                                alt="Camera"
                                                className="bottom-0 left-12 absolute bg-black/50 rounded"
                                            />
                                            <input
                                                type="file"
                                                className="hidden"
                                                onChange={handleFileChange}
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="post_actions">
                                <div className="post__category__toggler">
                                    <button onClick={() => setPostCategory("all")} className={postCategory === "all" ? "active" : ""}>All Post</button>
                                    <button onClick={() => setPostCategory("white-board")} className={postCategory === "white-board" ? "active" : ""}>White Board</button>
                                    <button onClick={() => setPostCategory("black-board")} className={postCategory === "black-board" ? "active" : ""}>Black Board</button>
                                </div>
                                <div className="flex justify-center items-center">
                                    <div className="flex">
                                        <div>
                                            <button className="bg-primary80 font-DMSans text-light border-[0.3px] border-tertiary flex px-2 py-[0.2rem] hover:scale-90 transition duration-200 rounded-lg items-center">
                                                <img
                                                    src={envelope}
                                                    alt="Settings" className="px-0.5" />
                                                Message
                                            </button>
                                        </div>
                                    </div>
                                </div>
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
                                                    <h2 className="m-5 text-[#8C8C8C]">No Posts Yet</h2>
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