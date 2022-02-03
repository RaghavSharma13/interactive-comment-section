import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CommentBox from "./CommentBox";
import RepliesSection from "./RepliesSection";

const StyledCommentSection = styled.div`
  overflow-y: auto;
  border-radius: 10px;
  padding: 0 10px;
`;

const Wrapper = styled.div`
  margin: 20px 0;
`;

const CommentSection = () => {
  const data = useSelector((root) => root.appReducer.comments);

  return (
    <StyledCommentSection>
      {data.map((comment) => {
        return (
          <Wrapper key={comment.id}>
            <CommentBox commentId={comment.id} comment={comment} />
            {comment.replies.length > 0 && (
              <RepliesSection commentId={comment.id} />
            )}
          </Wrapper>
        );
      })}
    </StyledCommentSection>
  );
};

export default CommentSection;
