import React from "react";
import "../styles/ConfirmDialog.css";

const ConfirmDialog = ({ onConfirm, onCancel }) => {
  return (
    <div className="confirm-dialog-overlay">
      <div className="confirm-dialog">
        <h2>Delete Comment</h2>
        <p>
          Are you sure you want to delete this comment? This will remove the
          comment and can’t be undone.
        </p>
        <div className="confirm-dialog-buttons">
          <button onClick={onCancel}>NO,CANCEL</button>
          <button onClick={onConfirm}>YES,DELETE</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
