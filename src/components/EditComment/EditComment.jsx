import React, { useState, useEffect } from "react";
import { CircleLoader } from "..";
import { inform, notify, warn } from "../../App";
import { useAuth } from "../../contexts/AuthContext/AuthContext";

const EditComment = ({
  setOpenEditModal,
  commentId,
  commentText,
  handleGetPosts,
}) => {
  const { user, token } = useAuth();
  const [content, setContent] = useState("");
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    setContent(commentText);
  }, []);

  const handleTextChange = (e) => {
    setContent(e.target.value);
  };
  // console.log(commentId);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(text);
    try {
      setUpdating(true);
      await fetch(
        `https://askthechip-endpoint-production.up.railway.app/api/comment/?commentId=${commentId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ text: content }),
        }
      ).then((response) => {
        console.log(response);
        if (response.ok) {
          console.log("Successfully updated your comment!");
          notify("Successfully updated your comment!");
          setOpenEditModal(false);
          handleGetPosts();
        }
        if (!response.ok) {
          setUpdating(false);
          setOpenEditModal(false);
          inform("Problem editing your comment, try again!");
        }
      });
    } catch (error) {
      console.error("Error updating comment:", error);
      warn("Error updating comment:", error);
      setOpenEditModal(false);
      setUpdating(false);
    }
  };

  return (
    <>
      <div>
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-2ext-center">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-[#A3A3C1] opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            {updating ? (
              <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all p-8 sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <CircleLoader color="#05675A" />
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              >
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="col-span-10 ml-2 flex flex-col justify-between w-[calc(100%_-_0.5rem)] rounded-lg bg-grey  border border-black/10">
                      <div className="flex w-full justify-between">
                        <div className="flex ml-2 w-[80%]">
                          <textarea
                            placeholder="Update your post"
                            onChange={handleTextChange}
                            value={content}
                            name="content"
                            id="content"
                            cols="100"
                            rows="3"
                            className="bg-[#f4f4f4] border-0 outline-none text-sm placeholder:text-dark-gray w-full resize-none mt-4"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => setOpenEditModal(false)}
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditComment;
