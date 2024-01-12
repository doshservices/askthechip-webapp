import { useAuth } from "../../contexts/AuthContext/AuthContext";
import { Loader } from "..";
import React, { useState, useEffect } from "react";
import { api } from "../../contexts";

const EditComment = ({ closeModal, commentId, commentText, getComments }) => {
  const { token } = useAuth();
  const [content, setContent] = useState("");
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    setContent(commentText);
  }, []);

  const handleTextChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setUpdating(true);
      await fetch(
        `${api}/api/comment/?commentId=${commentId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ text: content }),
        }
      ).then((response) => {
        if (response.ok) {
          closeModal()
          getComments()
        }
        if (!response.ok) {
          setUpdating(false);
        }
      });
    } catch (error) {
      console.error("Error updating comment:", error);
      setUpdating(false);
    }
  };

  return (
    <div className="edit__comment">
      <div className="wrapper">
        <div>
          {updating ? (
            <div className="">
              <Loader color="#05675A" />
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className=""
            >
              <textarea
                placeholder="Update your post"
                onChange={handleTextChange}
                value={content}
                name="content"
                id="content"
                cols="100"
                rows="3"
              />
              <div className="actions">
                <button className="update" onClick={handleSubmit} type="submit">Update</button>
                <button className="cancel" onClick={closeModal} type="button">Cancel</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditComment;
