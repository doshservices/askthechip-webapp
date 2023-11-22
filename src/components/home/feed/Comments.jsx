import React, { useState } from 'react'
import { useProfile } from '../../../contexts/ProfileContext/ProfileContext';
import threeDotsIcon from "../../../assets/icons/three-dots.svg";
import editIcon from "../../../assets/icons/edit-icon.svg";
import deleteIcon from "../../../assets/icons/delete-icon.svg";
import DeleteComment from "../../DeleteComment/DeleteModal";
import EditComment from "../../EditComment/EditComment";

const Comments = ({ c, getUsername, handleGetPosts, color }) => {
  const { profile } = useProfile();
  const [showMore, setShowMore] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const authUserId = profile?._id;
  const commentUserId = c?.userId?._id;
  const commenterImg = c?.userId?.profileImg;
  const myComment = authUserId === commentUserId;

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true);
    setShowMore(false);
  };
  const handleOpenEditModal = () => {
    setOpenEditModal(true);
    setShowMore(false);
  };

  return (
    <>
      <div>
        <div className="flex mt-4">
          <div className="w-full mr-1">
            {!commenterImg ? (
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary100 font-bold text-xl">
                <span className="text-white">{getUsername(c.userId)[0]}</span>
              </div>
            ) : (
              <img src={commenterImg} alt="profile" className="rounded-[50%] w-10 aspect-square" />
            )}
          </div>
          <div className="flex">
            <div className="flex justify-center items-center font-bold">
              <div>{getUsername(c.userId)}</div>
            </div>
          </div>
        </div>
        <div className='flex items-center'>
          <div className={`ml-11 mr-8 text-sm ${color} font-DMSans`}>{c.text}</div>
          {myComment && (
            <div
              className={
                showMore
                  ? `flex relative text-primary p-0 mx-1/2 my-3 bg-primary/10 w-8 h-8 rounded-full justify-center items-center`
                  : `flex relative text-primary p-0 mx-1/2 my-3 hover:bg-primary/10 w-8 h-8 rounded-full justify-center items-center`
              }
            >
              <img
                onClick={() => setShowMore(!showMore)}
                src={threeDotsIcon}
                alt="delete"
                className="w-4"
              />
              {showMore && (
                <div className="absolute top-8 right-0 w-28 p-4 rounded-lg bg-white shadow">
                  <div
                    onClick={handleOpenEditModal}
                    className="hover:bg-primary/20 flex cursor-pointer justify-center text-primary"
                  >
                    <img
                      src={editIcon}
                      alt="edit"
                      className="w-4 mr-2 text-primary"
                    />
                    Edit
                  </div>
                  <div
                    onClick={handleOpenDeleteModal}
                    className="hover:bg-red/20 flex cursor-pointer justify-center text-[#EB5757]"
                  >
                    <img src={deleteIcon} alt="delete" className="w-4 mr-2" />
                    Delete
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {openDeleteModal && (
        <DeleteComment
          setOpenDeleteModal={setOpenDeleteModal}
          handleGetPosts={handleGetPosts}
          commentId={c?._id}

        />
      )}
      {openEditModal && (
        <EditComment
          setOpenEditModal={setOpenEditModal}
          handleGetPosts={handleGetPosts}
          commentId={c?._id}
          commentText={c?.text}
        />
      )}
    </>
  )
}

export default Comments
