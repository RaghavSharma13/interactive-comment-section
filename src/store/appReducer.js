import jsonData from "../data/data.json";
import {
  ADD_COMMENT,
  ADD_REPLY,
  DELETE_COMMENT,
  EDIT_COMMENT,
  UPDATE_SCORE,
} from "./appActions";
const initialState = jsonData;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT: {
      return {
        ...state,
        comments: state.comments.concat({
          id: new Date().toISOString(),
          content: action.content,
          createdAt: new Date().toISOString(),
          score: 0,
          user: {
            image: {
              png: state.currentUser.image.png,
              webp: state.currentUser.image.webp,
            },
            username: state.currentUser.username,
          },
          replies: [],
        }),
      };
    }
    case ADD_REPLY: {
      const reqCommentIndex = state.comments.findIndex(
        (com) => com.id === action.commentId
      );

      const newReply = {
        id: new Date().toISOString(),
        content: action.comment,
        createdAt: new Date().toISOString(),
        score: 0,
        replyingTo: action.replyingTo,
        user: {
          image: {
            png: state.currentUser.image.png,
            webp: state.currentUser.image.webp,
          },
          username: state.currentUser.username,
        },
      };

      let updatedComments = state.comments;
      updatedComments[reqCommentIndex].replies =
        state.comments[reqCommentIndex].replies.concat(newReply);

      return {
        ...state,
        comments: updatedComments,
      };
    }
    case EDIT_COMMENT: {
      const commentIndex = state.comments.findIndex(
        (com) => com.id === action.commentId
      );

      let comment = state.comments[commentIndex];

      if (action.replyId) {
        const replyIndex = comment.replies.findIndex(
          (reply) => reply.id === action.replyId
        );
        comment.replies[replyIndex].content = action.comment;
      } else {
        comment.content = action.comment;
      }

      let updatedComments = state.comments;
      updatedComments[commentIndex] = comment;

      return {
        ...state,
        comments: updatedComments,
      };
    }
    case DELETE_COMMENT: {
      const commentIndex = state.comments.findIndex(
        (com) => com.id === action.commentId
      );

      let comment = state.comments[commentIndex];
      let updatedComments = state.comments;

      if (action.replyId) {
        const filteredReplies = comment.replies.filter(
          (reply) => reply.id !== action.replyId
        );
        comment.replies = filteredReplies;
        updatedComments[commentIndex] = comment;
      } else {
        updatedComments = state.comments.filter(
          (com) => com.id !== action.commentId
        );
      }

      return {
        ...state,
        comments: updatedComments,
      };
    }
    case UPDATE_SCORE: {
      const commentIndex = state.comments.findIndex(
        (com) => com.id === action.commentId
      );
      let updatedComments = state.comments;
      if (action.replyId) {
        const replyIndex = state.comments[commentIndex].replies.findIndex(
          (reply) => reply.id === action.replyId
        );
        updatedComments[commentIndex].replies[replyIndex].score = action.score;
      } else {
        updatedComments[commentIndex].score = action.score;
      }
      return {
        ...state,
        comments: updatedComments,
      };
    }
    default:
      return state;
  }
};

export default reducer;
