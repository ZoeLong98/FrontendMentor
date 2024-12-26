import React, { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { DataContext } from "../DataContext";
import "../styles/Comment.css";
import "../styles/styles.css";
import MyCommentBox from "./MyCommentBox";
import ConfirmDialog from "./ConfirmDialog";

function Comment({ id, content, createdAt, score, user, replies }) {
  const [replyId, setReplyId] = useState(null);
  const { currentUser } = useContext(UserContext);
  const { deleteCommentById, updateCommentById, updateScoreById } =
    useContext(DataContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const handleReply = (id) => {
    if (replyId === id) {
      setReplyId(null);
      return;
    }
    setReplyId(id);
  };
  const handleDelete = (id) => {
    setShowConfirmDialog(true);
  };
  const confirmDelete = () => {
    deleteCommentById(id);
    console.log("Deleted comment with id:", id);
    setShowConfirmDialog(false);
  };

  const cancelDelete = () => {
    setShowConfirmDialog(false);
  };
  const handleEdit = (id) => {
    setIsEditing(!isEditing);
  };
  const handleUpdate = (id, editedContent) => {
    updateCommentById(id, editedContent);
    setIsEditing(false);
  };
  const addScore = (id) => () => {
    updateScoreById(id, 1, currentUser.username);
    console.log("Added score to comment with id:", id);
  };
  const minusScore = (id) => () => {
    updateScoreById(id, -1, currentUser.username);
    console.log("Minus score to comment with id:", id);
  };
  return (
    <>
      <div className="comment">
        <div className="score">
          <div onClick={addScore(id)} style={{ cursor: "pointer" }}>
            <img src="/icon-plus.svg" alt="plus-score" />
          </div>
          <div className="score-number">{score}</div>
          <div onClick={minusScore(id)} style={{ cursor: "pointer" }}>
            <img src="/icon-minus.svg" alt="minus-score" />
          </div>
        </div>
        <div className="right-wrapper">
          <div className="upper-wrapper">
            <div className="basicInfo">
              <div className="basic-avatar">
                <img src={user.image.png} alt="avatar" />
              </div>
              <div className="basic-name">{user.username}</div>
              <div className="basic-postDate">{createdAt}</div>
            </div>
            {currentUser && currentUser === user.username ? (
              <div className="manageMyComment">
                <div className="manage" onClick={() => handleDelete(id)}>
                  <img src="/icon-delete.svg" alt="delete" />
                  <div className="delete-text">Detele</div>
                </div>
                <div className="manage" onClick={() => handleEdit(id)}>
                  <img src="/icon-edit.svg" alt="edit" />
                  <div className="edit-text">Edit</div>
                </div>
              </div>
            ) : (
              <div className="reply" onClick={() => handleReply(id)}>
                <img src="/icon-reply.svg" alt="reply" />
                <div className="reply-text">Reply</div>
              </div>
            )}
          </div>

          {isEditing ? (
            <textarea
              value={editedContent}
              className="commentText edit-box"
              onChange={(e) => setEditedContent(e.target.value)}
            />
          ) : (
            <div className="commentText">{content}</div>
          )}
          {isEditing && (
            <button
              onClick={() => handleUpdate(id, editedContent)}
              className="button_purple"
              style={{ marginTop: "10px", alignSelf: "flex-end" }}
            >
              Update
            </button>
          )}
        </div>
      </div>

      {replyId === id && <MyCommentBox id={id} />}
      {showConfirmDialog && (
        <ConfirmDialog onConfirm={confirmDelete} onCancel={cancelDelete} />
      )}
    </>
  );
}
function Comments({ id, content, createdAt, score, user, replies }) {
  return (
    <div className="comment-container">
      <Comment
        key={id}
        content={content}
        createdAt={createdAt}
        score={score}
        user={user}
        id={id}
      />

      {replies
        ? replies.map((reply) => (
            <div className="reply-container">
              <div className="vertical-line-container">
                <div className="vertical-line"></div>
              </div>
              <div className="reply-wrapper">
                <Comments
                  key={reply.id}
                  id={reply.id}
                  content={reply.content}
                  createdAt={reply.createdAt}
                  score={reply.score}
                  user={reply.user}
                  replies={reply.replies}
                />
              </div>
            </div>
          ))
        : null}
    </div>
  );
}

export default Comments;
