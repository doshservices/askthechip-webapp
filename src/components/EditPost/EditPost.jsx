import React, { useState, useEffect } from "react";
import { CircleLoader } from "..";
import { notify, warn } from "../../App";
import { useAuth } from "../../contexts/AuthContext/AuthContext";

const EditPost = ({ setOpenEditModal, postId, handleGetPosts }) => {
  const { user, token } = useAuth();
  //   const [postImg, setPostImg] = useState("");
  const [content, setContent] = useState("");
  const [board, setBoard] = useState("WHITE_BOARD");
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    fetch(
      `https://askthechip-hvp93.ondigitalocean.app/api/post/${postId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((res) => {
        const resData = res?.data?.post;
        setBoard(resData.board);
        setContent(resData.content);
      })
      .catch((error) => {
        console.error("Error retrieving post:", error);
      });
  }, [postId]);

  const handleBoardChange = (e) => {
    setBoard(e.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedPostData = { board, content };

    try {
      setUpdating(true);
      await fetch(
        `https://askthechip-hvp93.ondigitalocean.app/api/post/update-post?postId=${postId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedPostData),
        }
      ).then((response) => {
        if (response.ok) {
          // console.log("Successfully updated your post!");
          notify("Successfully updated your post!");
          setOpenEditModal(false);
          handleGetPosts();
          setUpdating(false);
        } else {
          // console.error("Error updating post:", response.status);
          warn("Error updating post:", response.status);
          setOpenEditModal(false);
          setUpdating(false);
        }
      });
    } catch (error) {
      // console.error("Error updating post:", error);
      warn("Error updating post:", error);
      setOpenEditModal(false);
      setUpdating(false);
    }
  };

  return (
    <>
      <div>
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
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
                            onChange={handleContentChange}
                            value={content}
                            name="post"
                            id="post"
                            cols="100"
                            rows="3"
                            className="bg-[#f4f4f4] border-0 outline-none text-sm placeholder:text-dark-gray w-full resize-none mt-4"
                          />
                        </div>
                        <div className="my-auto ml-2 mr-1">
                          <select
                            className="my-auto py-0.5 border border-primary100/50 outline-none rounded-lg"
                            value={board}
                            onChange={handleBoardChange}
                          >
                            <option value="WHITE_BOARD">White Board</option>
                            <option value="BLACK_BOARD">Black Board</option>
                          </select>
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
      <form
        onSubmit={handleSubmit}
        className="col-span-10 ml-2 flex flex-col justify-between w-[calc(100%_-_0.5rem)] rounded-lg bg-grey  border border-black/10"
      >
        <div className="flex w-full justify-between">
          <div className="flex ml-2 w-[80%]">
            <textarea
              placeholder="Share a post"
              onChange={handleContentChange}
              value={content}
              name="post"
              id="post"
              cols="100"
              rows="1"
              className="bg-[#f4f4f4] border-0 outline-none text-sm placeholder:text-dark-gray w-full resize-none mt-4"
            />
          </div>
        </div>
        <div className="flex flex-col justify-end items-end sm:hidden sm:justify-between w-full">
          {content && (
            <div>
              <div className="ml-2 mr-1">
                <select
                  className="my-auto py-0.5 border border-primary100/50 outline-none rounded-lg"
                  value={board}
                  onChange={handleBoardChange}
                >
                  <option value="WHITE_BOARD">White Board</option>
                  <option value="BLACK_BOARD">Black Board</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default EditPost;
