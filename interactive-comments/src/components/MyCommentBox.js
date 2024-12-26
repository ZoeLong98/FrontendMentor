import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles/MyCommentBox.css";
import "../styles/styles.css";
import { useContext } from "react";
import { DataContext } from "../DataContext";

function MyCommentBox({ id }) {
  const [replyContent, setReplyContent] = useState("");
  const { addReply } = useContext(DataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (replyContent.trim()) {
      const reply = {
        id: uuidv4(),
        content: replyContent,
        createdAt: new Date().toISOString().slice(0, 10),
        score: 0,
        user: {
          username: "juliusomo",
          image: {
            png: "/avatars/image-juliusomo.png",
          },
        },
        replies: [],
      };
      addReply(id, reply);
      setReplyContent("");
    }
  };
  return (
    <div className="MyCommentBox">
      <form onSubmit={handleSubmit}>
        <img src="/avatars/image-juliusomo.png" alt="myAvatar" />
        <textarea
          placeholder={`Add a comment`}
          value={replyContent}
          onChange={(e) => setReplyContent(e.target.value)}
        ></textarea>
        <button type="submit" className="button_purple">
          SEND
        </button>
      </form>
    </div>
  );
}

export default MyCommentBox;
