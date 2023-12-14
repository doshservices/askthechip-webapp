import React, { useState, useEffect } from "react";
import { Loader } from "..";
import { notify, warn } from "../../App";
import { useAuth } from "../../contexts/AuthContext/AuthContext";

const EditPost = ({ setOpenEditModal, postId, handleGetPosts }) => {
  const { token } = useAuth();
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
          notify("Successfully updated your post!");
          setOpenEditModal(false);
          handleGetPosts();
          setUpdating(false);
        } else {
          warn("Error updating post:", response.status);
          setOpenEditModal(false);
          setUpdating(false);
        }
      });
    } catch (error) {
      warn("Error updating post:", error);
      setOpenEditModal(false);
      setUpdating(false);
    }
  };

  return (
    <div className="edit__post">
      <div className="wrapper">
        <div>
          <div>
            {updating ? (
              <Loader color="#05675A" />
            ) : (
              <form onSubmit={handleSubmit}>
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
                <div className="actions">
                  <button onClick={handleSubmit} type="submit">Update</button>
                  <button onClick={() => setOpenEditModal(false)} type="button">Cancel</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPost;
