import React, { useState } from "react";
import coverImage from "../assets/images/cover-image.png";
import profileImage from "../assets/images/profile-picture.png";
import gear from "../assets/icons/gear.svg";
import edit from "../assets/icons/edit.svg";
import envelope from "../assets/icons/envelope.svg";
import { aboutData, experienceData, interestTopics } from "../data";
import { Link } from "react-router-dom";
// import Button from './Button';

const Profile = () => {
  const [viewer, setViewer] = useState("self");
  const [type, setType] = useState(!"personal");

  return (
    <div>
      <div className="grid grid-cols-1">
        <img src={coverImage} alt="Cover image" className="w-full col-span-1" />
      </div>
      <div className="grid-cols-3 ml-8">
        <div className="col-span-1 -mt-[4rem] sm:-mt-[5rem] xm:-mt-[4rem]">
          <img
            src={profileImage}
            alt="Profile Image"
            className="rounded-full max-w-[8rem] sm:max-w-[10rem] xm:max-w-[8rem]"
          />
        </div>
        <div className="text-[#181818] mb-2 flex justify-between">
          <div>
            <div className="font-DMSans font-medium text-[#181818] text-2xl mb-2 mt-2">
              Username
            </div>
            <div className="w-[90%] text-sm font-DMSans mb-2">
              {type === "personal" ? "Architect" : "Industry"}
            </div>
          </div>
          <div className="flex justify-center items-center">
            {viewer === "self" ? (
              <div className="flex">
                {/* <div>
                  <button className="bg-tertiary border-[0.3px] mr-4 text-white border-tertiary flex px-2 py-[0.2rem] hover:scale-110 transition duration-200 rounded-lg items-center text-sm">
                    <img src={edit} alt="Edit Profile" className="px-1" />
                    Edit Profile
                  </button>
                </div> */}
                <div>
                  <Link to="/settings">
                    <button className="bg-[#F7F9FA] border-[0.3px] border-tertiary text-tertiary flex pl-1 pr-3 py-[0.2rem] hover:scale-110 transition duration-200 rounded-lg items-center text-sm">
                      <img src={gear} alt="Settings" className="pr-1 pl-2" />
                      Settings
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex">
                <div>
                  <button className="bg-primary80 font-DMSans text-light border-[0.3px] border-tertiary flex px-2 py-[0.2rem] hover:scale-90 transition duration-200 rounded-lg items-center">
                    <img
                      src={envelope}
                      alt="Settings"
                      className="px-0.5"
                    />
                    Message
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="text-sm font-DMSans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus
          eros eu vehicula interdum.{" "}
        </div>
        {type === "personal" ? (
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
            <div className="text-[#181818] font-medium mt-3 text-lg">
              About
            </div>
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
        )}

        <div className="font-DMSans">
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
        </div>
      </div>
    </div>
  );
};

export default Profile;
