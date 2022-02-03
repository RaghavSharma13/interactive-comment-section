export const ADD_COMMENT = "AddComment";
export const addComment = (content) => {
  return {
    type: ADD_COMMENT,
    content,
  };
};

export const ADD_REPLY = "AddReply";
export const addReply = (comment, commentId, replyingTo) => {
  return {
    type: ADD_REPLY,
    comment,
    commentId,
    replyingTo,
  };
};

export const EDIT_COMMENT = "EditComment";
export const editComment = (comment, commentId, replyId) => {
  return {
    type: EDIT_COMMENT,
    comment,
    commentId,
    replyId,
  };
};

export const DELETE_COMMENT = "DeleteComment";
export const deleteComment = (commentId, replyId) => {
  return {
    type: DELETE_COMMENT,
    commentId,
    replyId,
  };
};

export const UPDATE_SCORE = "UpdateScore";
export const updateScore = (score, commentId, replyId) => {
  return {
    type: UPDATE_SCORE,
    score,
    commentId,
    replyId,
  };
};
