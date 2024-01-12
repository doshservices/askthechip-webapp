import React, { useState } from "react";
import { Loader } from "..";
import { notify } from "../../App";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
import { api } from "../../contexts";

const DeleteModal = ({ action, postId, setOpenDeleteModal, handleGetPosts, getComments }) => {
  const [deleting, setDeleting] = useState(false);
  const { token } = useAuth();

  const handleDelete = async () => {
    setDeleting(true);
    notify(`Deleting your ${action}`);
    try {
      const response = await fetch(
        `${api}/api/post/delete-post?postId=${postId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const resData = await response.json();
        setDeleting(false);
        setOpenDeleteModal(false);
        handleGetPosts();
        getComments()
      }
      if (!response.ok) {
        setDeleting(false);
        setOpenDeleteModal(false);
      }
    } catch (error) {
      setDeleting(false);
      setOpenDeleteModal(false);
    }
  };

  return (
    <div className="delete__modal">
      <div className="wrapper">
        {deleting ? (
          <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all p-8 sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <Loader color="#05675A" />
          </div>
        ) : (
          <div>
            <h3>Delete {action}</h3>
            <p>Are you sure you want to delete this {action}? This action cannot be undone.</p>
            <div className="actions">
              <button className="delete" onClick={handleDelete} type="button">Delete</button>
              <button className="cancel" onClick={() => setOpenDeleteModal(false)} type="button">Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteModal;
