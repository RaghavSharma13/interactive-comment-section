import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Colors from "../constants/Colors";
import CommentBox from "./CommentBox";

const StyledCommentSection = styled.div`
  overflow-y: auto;
  margin-left: 15px;
  padding-left: 15px;
  border-left: 2px solid ${Colors.Grayish_Blue};
`;

const RepliesSection = ({ commentId }) => {
  const replies = useSelector(
    (root) =>
      root.appReducer.comments.find((com) => com.id === commentId).replies
  );
  return (
    <StyledCommentSection>
      {replies.map((reply) => (
        <CommentBox
          replyingTo={reply.replyingTo}
          comment={reply}
          key={reply.id}
          commentId={commentId}
          replyId={reply.id}
        />
      ))}
    </StyledCommentSection>
  );
};

export default RepliesSection;
