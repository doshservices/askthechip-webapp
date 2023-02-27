import React from 'react'
import coverImage from '../assets/images/cover-image.png';
import profileImage from '../assets/images/profile-picture.png';
import gear from '../assets/icons/gear.svg';
import edit from '../assets/icons/edit.svg';
// import Button from './Button';

const Profile = () => {
    return (
        <div>
            <div>
                <img src={coverImage} alt="Cover image" />
            </div>
            <div className='grid-cols-3 ml-8'>
                <div className='col-span-1 -mt-[20%]'>
                    <img src={profileImage} alt="Profile Image" className='rounded-full max-w-[30%]' />
                </div>
                <div className='font-Montserrat font-medium text-[#181818] text-2xl mb-2 mt-2'>
                    Username
                </div>
                <div className='text-[#181818] mb-2'>
                    <div className='w-[90%] text-sm font-Montserrat mb-2'>Architect</div>
                    <div className='w-[95%] text-sm font-Montserrat'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus eros eu vehicula interdum. </div>
                </div>
                <div className='flex'>
                    <div>
                        <button className='bg-tertiary border-[0.3px] mr-2 text-white border-tertiary flex px-3 py-[0.2rem] hover:scale-110 transition duration-200 rounded-lg items-center'>
                            <img src={edit} alt="Edit Profile" className='px-1' />
                            Edit Profile
                        </button>
                    </div>
                    <div>
                        <button className='bg-[#F7F9FA] border-[0.3px] border-tertiary text-tertiary flex pl-1 pr-3 py-[0.2rem] hover:scale-110 transition duration-200 rounded-lg items-center'>
                            <img src={gear} alt="Settings" className='px-0.5' />
                            Settings
                        </button>
                    </div>
                </div>
                <div className='text-[#181818] font-Montserrat'>
                    <div className='text-[#181818] font-semibold'>Work Experience</div>
                    <div className="flex">
                        <div className="h-[48px] w-[32px] bg-tertiary rounded-3xl mr-3"></div>
                        <div>
                            <div className='text-[#181818] font-semibold'>Freelance UI/UX designer</div>
                            <div><span>Lorem Ipsum</span> Lorem ipsum</div>
                            <div>Jun 2022 - Present <span className='text-tertiary'>1yr 02mos</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile