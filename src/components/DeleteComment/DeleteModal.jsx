import React, { useState } from "react";
import { CircleLoader } from "..";
import { notify, warn } from "../../App";
import { useAuth } from "../../contexts/AuthContext/AuthContext";

const DeleteModal = ({ commentId, setOpenDeleteModal, handleGetPosts }) => {
  const [deleting, setDeleting] = useState(false);
  const { user, token } = useAuth();

  const handleDelete = async () => {
    setDeleting(true);
    notify("Deleting comment...");
    try {
      const response = await fetch(
        `https://askthechip-endpoint-production.up.railway.app/api/comment/?commentId=${commentId}`,
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
        console.log(resData);
        console.log(resData.data);
        console.log("Comment deleted successfully");
        notify("Comment deleted successfully");
        setDeleting(false);
        setOpenDeleteModal(false);
        handleGetPosts();
      }
    } catch (error) {
      console.log(error);
      console.log("Comment deletion failed");
      warn("Comment deletion failed, try again");
      setDeleting(false);
      setOpenDeleteModal(false);
    }
    setDeleting(false);
  };
  //   {
  //     "status": "error",
  //     "message": "you can not edit this comment"
  // }
  return (
    <div>
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-[#A3A3C1] opacity-75"></div>
          </div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          {deleting ? (
            <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all p-8 sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <CircleLoader color="#05675A" />
            </div>
          ) : (
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      Delete Comment
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to delete this comment? This
                        action cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={handleDelete}
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Delete
                </button>
                <button
                  onClick={() => setOpenDeleteModal(false)}
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
