import {
    ProfileDesktop,
    Profile,
    DesktopLayout,
    MobileLayout,
} from "../components";
import camera from "../assets/icons/camera-icon.svg"
import axios from "axios";
import { useAuth } from "../contexts/AuthContext/AuthContext";
import { useEffect, useState } from "react";
import { SideNav } from "../components";
import envelope from "../assets/icons/envelope.svg";
import briefcase from "../assets/icons/briefcase-icon.svg";
import followers from "../assets/icons/followers-icon.svg";
import mapMarker from "../assets/icons/map-marker.svg";
import photo from "../assets/images/photo.svg";
import profileImage from "../assets/images/profile-picture.png";

const UserProfile = () => {
    const [profileImage, setProfileImg] = useState("")
    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        try {
            const base64String = await fileToBase64(file);
            setProfileImg(base64String);
            notify("Picture uploaded, updating your profile picture...");
        } catch (error) {
            console.error("Error converting file to base64:", error);
            warn("An error has occured, pls try again!");
        }
    };
    const { token } = useAuth()
    const id = JSON.parse(localStorage.getItem("ask-un-id"))
    const url = `https://askthechip-hvp93.ondigitalocean.app/api/users/${id}`
    const [profileDetails, setProfileDetails] = useState([])

    const getUserDetails = () => {
        axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
            .then((response) => {
                // console.log(response);
                setProfileDetails(response?.data?.data?.user)
            }).catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        getUserDetails()
    }, [])

    return (
        <>
            <section className="grid grid-cols-24 justify-between bg-light">
                <div className="col-span-3 sm:col-span-3 xm:col-span-4 h-screen overflow-y-auto border-r border-[#EBEEF0]">
                    <SideNav />
                </div>
                <div className="col-span-21 sm:col-span-21 xm:col-span-20 h-screen overflow-y-auto pl-[1rem] pr-[1rem] sm:pl-10 sm:pr-[10] pt-6 border-r border-[#EBEEF0]">
                    <div className="mt-0 md:mt-5">
                        <div className="grid grid-cols-1 h-[7.6875rem] bg-coverImage bg-[#2d2d2d]/60 bg-blend-overlay rounded-lg">
                            <div className="pl-40 sm:pl-44 md:pl-48 xm:pl-48 pt-10">
                                <div className="text-light mt-6 sm:mt-4">
                                    <div className="font-DMSans font-medium text-2xl mb-2 mt-2">
                                        {profileDetails?.fullName}
                                    </div>
                                    <div className="w-[90%] text-sm font-DMSans mb-2">{profileDetails.role}</div>
                                </div>
                            </div>
                            {/* <img src={coverImage} alt="Cover image" className="w-full col-span-1" /> */}
                        </div>
                        <div className="grid-cols-3 ml-4 sm:ml-8">
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
                            <div className="text-[#181818] mb-2 flex justify-between border-b border-[#EBEEF0] py-4">
                                <div className="flex">
                                    <div className="bg-[#E9E9E9] rounded-full px-5 py-2 mr-5">
                                        All Post
                                    </div>
                                    <div className="text-[#8C8C8C] py-2 pr-5">White Board</div>
                                    <div className="text-[#8C8C8C] py-2 pr-5">Black Board</div>
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
                            <div className="grid grid-cols-12">
                                <div className="col-span-12 sm:col-span-4 border-r border-[#ebeef0] pr-4">
                                    <div className="bg-[#f4f4f4] rounded-lg py-4">
                                        <div className="border-b-[3px] border-white text-dark2D text-lg font-medium pb-4 px-4">
                                            About
                                        </div>
                                        <div className="px-4">
                                            <div className="flex items-center pt-4">
                                                <div>
                                                    <img
                                                        src={briefcase}
                                                        alt="Briefcase" />
                                                </div>
                                                <div className="ml-2 text-dark2D font-DMSans text-sm font-medium">
                                                    UX/UI Designer at{" "}
                                                    <span className="text-primary80">Dosh Services Ltd</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center pt-4">
                                                <div>
                                                    <img
                                                        src={briefcase}
                                                        alt="Briefcase" />
                                                </div>
                                                <div className="ml-2 text-dark2D font-DMSans text-sm font-medium">
                                                    Super Hero at{" "}
                                                    <span className="text-primary80">The Avengers</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center pt-4">
                                                <div>
                                                    <img
                                                        src={followers}
                                                        alt="Briefcase" />
                                                </div>
                                                <div className="ml-2 text-dark2D font-DMSans text-sm font-medium">
                                                    Followed by 300 People
                                                </div>
                                            </div>
                                            <div className="flex items-center pt-4">
                                                <div>
                                                    <img
                                                        src={mapMarker}
                                                        alt="Briefcase" />
                                                </div>
                                                <div className="ml-2 text-dark2D font-DMSans text-sm font-medium">
                                                    From Mombasa, Kenya
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 bg-[#f4f4f4] rounded-lg py-4">
                                        <div className="border-b-[3px] border-white text-dark2D text-lg font-medium pb-4 px-4">
                                            Photos
                                        </div>
                                        <div className="grid grid-cols-12 gap-4 p-4">
                                            <div className="col-span-4">
                                                <img
                                                    src={photo}
                                                    alt="Photos"
                                                    className="rounded-xl flex w-full"
                                                />
                                            </div>
                                            <div className="col-span-4">
                                                <img
                                                    src={photo}
                                                    alt="Photos"
                                                    className="rounded-xl flex w-full"
                                                />
                                            </div>
                                            <div className="col-span-4">
                                                <img
                                                    src={photo}
                                                    alt="Photos"
                                                    className="rounded-xl flex w-full"
                                                />
                                            </div>
                                            <div className="col-span-4">
                                                <img
                                                    src={photo}
                                                    alt="Photos"
                                                    className="rounded-xl flex w-full"
                                                />
                                            </div>
                                            <div className="col-span-4">
                                                <img
                                                    src={photo}
                                                    alt="Photos"
                                                    className="rounded-xl flex w-full"
                                                />
                                            </div>
                                            <div className="col-span-4">
                                                <img
                                                    src={photo}
                                                    alt="Photos"
                                                    className="rounded-xl flex w-full"
                                                />
                                            </div>
                                            <div className="col-span-4">
                                                <img
                                                    src={photo}
                                                    alt="Photos"
                                                    className="rounded-xl flex w-full"
                                                />
                                            </div>
                                            <div className="col-span-4">
                                                <img
                                                    src={photo}
                                                    alt="Photos"
                                                    className="rounded-xl flex w-full"
                                                />
                                            </div>
                                            <div className="col-span-4">
                                                <img
                                                    src={photo}
                                                    alt="Photos"
                                                    className="rounded-xl flex w-full"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 bg-[#f4f4f4] rounded-lg py-4 mb-8">
                                        <div className="border-b-[3px] border-white text-dark2D text-lg font-medium pb-4 px-4">
                                            Friends
                                        </div>
                                        <div className="grid grid-cols-12 gap-4 p-4">
                                            <div className="col-span-4">
                                                <img
                                                    src={photo}
                                                    alt="Photos"
                                                    className="rounded-full flex w-full"
                                                />
                                            </div>
                                            <div className="col-span-4">
                                                <img
                                                    src={profileImage}
                                                    alt="Photos"
                                                    className="rounded-full flex w-full"
                                                />
                                            </div>
                                            <div className="col-span-4">
                                                <img
                                                    src={photo}
                                                    alt="Photos"
                                                    className="rounded-full flex w-full"
                                                />
                                            </div>
                                            <div className="col-span-4">
                                                <img
                                                    src={profileImage}
                                                    alt="Photos"
                                                    className="rounded-full flex w-full"
                                                />
                                            </div>
                                            <div className="col-span-4">
                                                <img
                                                    src={photo}
                                                    alt="Photos"
                                                    className="rounded-full flex w-full"
                                                />
                                            </div>
                                            <div className="col-span-4">
                                                <img
                                                    src={profileImage}
                                                    alt="Photos"
                                                    className="rounded-full flex w-full"
                                                />
                                            </div>
                                            <div className="col-span-4">
                                                <img
                                                    src={photo}
                                                    alt="Photos"
                                                    className="rounded-full flex w-full"
                                                />
                                            </div>
                                            <div className="col-span-4">
                                                <img
                                                    src={profileImage}
                                                    alt="Photos"
                                                    className="rounded-full flex w-full"
                                                />
                                            </div>
                                            <div className="col-span-4">
                                                <img
                                                    src={photo}
                                                    alt="Photos"
                                                    className="rounded-full flex w-full"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-12 hidden sm:flex flex-col sm:col-span-8">
                                    <div className="p-2 pb-0">
                                        {/* <Share handleGetPosts={handleGetPosts} /> */}
                                    </div>
                                    <div>
                                        {/* {loading ? (
                                        <div className="flex justify-center items-center m-4">
                                            <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all p-8 sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                                <CircleLoader color="#05675A" />
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            {reversedPosts?.map((post, index) => (
                                                <Posts
                                                    key={index}
                                                    post={post}
                                                    handleGetPosts={handleGetPosts}
                                                />
                                            ))}
                                        </>
                                    )} */}
                                    </div>
                                </div>
                            </div>

                            {/* <div className="text-sm font-DMSans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus
          eros eu vehicula interdum.{" "}
        </div> */}
                            {/* {type === "personal" ? (
          <div className="text-[#181818] font-DMSans">
            <div className="text-[#181818] font-medium mt-3 text-lg">
              Work Experience
            </div>
            {experienceData.map((xp, index) => (
              <div className="flex my-3" key={index}>
                <div className="h-[48px] w-[38px] bg-tertiary rounded-3xl mr-3"></div>
                <div>
                  <div className="text-[#181818] font-medium">{xp.role}</div>
                  <div className="text-[10px]">
                    <span className="font-medium">{xp.heading}</span>{" "}
                    {xp.subheading}
                  </div>
                  <div className="text-[10px] my-1">
                    {xp.starting} - {xp.ending}{" "}
                    <span className="text-tertiary font-medium">
                      {xp.duration}
                    </span>
                  </div>
                  <div className="text-[10px]">{xp.description}</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-[#181818] font-DMSans">
            <div className="text-[#181818] font-medium mt-3 text-lg">About</div>
            {aboutData.map((about, index) => (
              <div className="flex my-3" key={index}>
                <div className="h-[48px] w-[38px] bg-tertiary rounded-3xl mr-3"></div>
                <div>
                  <div className="text-[10px]">
                    <span className="font-medium">{about.heading}</span>{" "}
                    {about.subheading}
                  </div>
                  <div className="text-[10px] mt-1 mb-[0.4rem]">
                    {about.address}{" "}
                    <span className="text-tertiary font-medium ml-4">
                      {about.website}
                    </span>
                  </div>
                  <div className="text-[10px]">{about.description}</div>
                </div>
              </div>
            ))}
          </div>
        )} */}

                            {/* <div className="font-DMSans">
          <div className="text-[#181818] font-medium mt-3 text-lg">
            Interests
          </div>
          <div className="text-tertiary font-medium my-2">Topics</div>
          <div className="grid grid-cols-2 gap-10">
            {interestTopics.map((interest, index) => (
              <div className="grid grid-cols-12 my-2" key={index}>
                <div className="col-span-3">
                  <img src={interest.img} alt={interest.title} />
                </div>
                <div className="col-span-9 ml-2">
                  <div className="font-medium">{interest.title}</div>
                  <div className="text-xs">{interest.followers} followers</div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default UserProfile;