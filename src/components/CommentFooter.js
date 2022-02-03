import React from "react";
import styled from "styled-components";
import ReplyButton from "./ReplyButton";
import VoteButton from "./VoteButton";
import Sizes from "../constants/Sizes";

const CommentBoxFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${Sizes.largeScreen}) {
    display: none;
  }
`;

const CommentFooter = ({
  score,
  fromSelf,
  onReplyClicked,
  onDeleteClicked,
  onVoteCast,
  scoreLimit,
}) => {
  return (
    <CommentBoxFooter>
      <VoteButton
        votes={score}
        onVoteCast={onVoteCast}
        scoreLimit={scoreLimit}
      />
      <ReplyButton
        onDeleteClicked={onDeleteClicked}
        fromSelf={fromSelf}
        onReplyClicked={onReplyClicked}
      />
    </CommentBoxFooter>
  );
};

export default CommentFooter;
