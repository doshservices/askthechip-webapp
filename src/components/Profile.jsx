import axios from "axios";
import envelope from "../assets/icons/envelope.svg";
import edit from "../assets/icons/edit.svg";
import camera from "../assets/icons/camera-icon.svg";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import { setUser } from "../store/slice/userSlice";
import { usePosts } from "../contexts/PostContext/PostContext";
import { useProfile } from "../contexts/ProfileContext/ProfileContext";
import { useNavigate } from "react-router-dom";
import { Posts, Share } from "./home";
import { useEffect, useState } from "react";
import { CircleLoader, SideNav } from ".";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../contexts";
import { EmptyPost } from "./home/feed/EmptyData";

export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result;
      resolve(base64String);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
};

const Profile = () => {
  const dispatch = useDispatch();
  const [viewer, setViewer] = useState("self");
  const [postCategory, setPostCategory] = useState("all")
  const [profileImg, setProfileImg] = useState(null);
  const { posts, setPosts } = usePosts();
  const reversedPosts = [...posts].reverse();
  const [updatingPicture, setUpdatingPicture] = useState(false);
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();
  const { profile, setProfile } = useProfile();
  const navigate = useNavigate()
  const userDetails = useSelector((state) => state?.user?.user);

  const filteredPosts = reversedPosts.filter((postItem) => postItem?.userId?._id === profile?._id);

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

  const handleFileChange = (e) => {
    try {
      if (e.target.files && e.target.files.length > 0) {
        const selectedFile = e.target.files[0];

        if (!selectedFile) {
          return;
        }
        setProfileImg(selectedFile);
      } else {
      }
    } catch (error) {
    }
  };

  const handleUpdatePicture = async () => {
    if (!profileImg) return;
    try {
      setUpdatingPicture(true);

      const formData = new FormData();
      formData.append("profileImg", profileImg);

      const response = await axios.patch(
        `${api}/api/users`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log(response);
      if (response?.data) {
        dispatch(setUser(response?.data?.data?.user))
        setProfileImg(null)
        // console.log("Profile picture updated successfully");
      }
      setProfileImg("")
      setUpdatingPicture(false);
    } catch (error) {
      console.error("Error updating profile picture:", error);
    }
    setProfileImg(null)
  };

  useEffect(() => {
    setTimeout(() => {
      handleUpdatePicture();
    }, 1000)
  }, [profileImg]);

  const username =
    profile?.role === "USER"
      ? `${profile?.firstName} ${profile?.lastName}`
      : `${profile?.companyName}`;
  const role = profile?.role === "USER" ? "User" : "Service Provider";

  return (
    <div className="pageLayout">
      <SideNav />
      <div className="pageLayout__wrapper__container">
        <div className="profile__wrapper">
          <div className="grid grid-cols-1 h-[7.6875rem] bg-coverImage bg-[#2d2d2d]/60 bg-blend-overlay rounded-lg">
            <div className="pl-40 sm:pl-44 md:pl-48 xm:pl-48 pt-10">
              <div className="text-light mt-6 sm:mt-4">
                <div className="font-DMSans font-medium text-2xl mb-2 mt-2">
                  {userDetails?.firstName} {userDetails?.lastName}
                </div>
                <div className="w-[90%] text-sm font-DMSans mb-2">{userDetails?.role}</div>
              </div>
            </div>
          </div>
          <div className="grid-cols-3">
            <div className="col-span-1 sm:-mt-[4rem] xm:-mt-[4rem]">
              <div className="relative ml-8">
                {!userDetails?.profileImg ? (
                  <div className="flex items-center justify-center w-[70px] h-[70px] md:w-[100px] md:h-[100px] rounded-full bg-primary100 font-bold text-xl">
                    <span className="text-white">{userDetails?.firstName[0]}</span>
                  </div>
                ) : (
                  <img
                    src={userDetails?.profileImg}
                    alt="Profile Image"
                    className="rounded-full w-[70px] h-[70px] md:w-[100px] md:h-[100px] h-auto aspect-square"
                  />
                )}
                <form className="flex flex-col items-center justify-center mt-2">
                  <label className="w-full cursor-pointer">
                    <img
                      src={camera}
                      alt="Camera"
                      className="bottom-0 left-11 absolute bg-black/50 rounded"
                    />
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                      name="profileImg"
                      accept="image/*"
                    />
                  </label>
                </form>
              </div>
              <div className="post_actions">
                <div className="post__category__toggler ml-8 mt-4">
                  <button onClick={() => setPostCategory("all")} className={postCategory === "all" ? "active" : ""}>All Post</button>
                  <button onClick={() => setPostCategory("white-board")} className={postCategory === "white-board" ? "active" : ""}>White Board</button>
                  <button onClick={() => setPostCategory("black-board")} className={postCategory === "black-board" ? "active" : ""}>Black Board</button>
                </div>
                <div className="flex justify-center items-center">
                  {viewer === "self" ? (
                    <div className="flex">
                      <div>
                        <button onClick={() => navigate("/settings")} className="bg-tertiary border-[0.3px] text-white text-center border-tertiary flex px-4 py-[0.2rem] hover:scale-110 transition duration-200 rounded-lg items-center text-sm">
                          <img src={edit} alt="Edit Profile" className="p-1" />
                          Edit Profile
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex">
                      <div>
                        <button className="bg-primary80 font-DMSans text-light border-[0.3px] border-tertiary flex px-2 py-[0.2rem] hover:scale-90 transition duration-200 rounded-lg items-center">
                          <img src={envelope} alt="Settings" className="px-0.5" />
                          Message
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div>
              <div className="col-span-12 sm:flex flex-col sm:col-span-8">
                <Share handleGetPosts={handleGetPosts} />
                <div>
                  {postCategory === "all" ?
                    <>
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
                            </> :
                            <EmptyPost />
                          }
                        </>
                      )}
                    </>
                    :
                    null
                  }
                  {postCategory === "white-board" ?
                    <>
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
                              {filteredPosts?.filter(post => post.board === "WHITE_BOARD").map((post, index) => (
                                <Posts
                                  key={index}
                                  post={post}
                                  handleGetPosts={handleGetPosts}
                                />
                              ))}
                            </> :
                            <EmptyPost />
                          }
                        </>
                      )}
                    </>
                    :
                    null
                  }
                  {postCategory === "black-board" ?
                    <>
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
                              {filteredPosts?.filter(post => post.board === "BLACK_BOARD").map((post, index) => (
                                <Posts
                                  key={index}
                                  post={post}
                                  handleGetPosts={handleGetPosts}
                                />
                              ))}
                            </> :
                            <EmptyPost />
                          }
                        </>
                      )}
                    </>
                    :
                    null
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
