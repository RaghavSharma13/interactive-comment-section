import React, { useState } from "react";
import Colors from "../constants/Colors";
import styled from "styled-components";
import CommentHeader from "./CommentHeader";
import CommentBody from "./CommentBody";
import CommentFooter from "./CommentFooter";
import { useSelector } from "react-redux";
import CommentInputArea from "./CommentInputArea";
import { useDispatch } from "react-redux";
import * as appActions from "../store/appActions";
import DeleteModalCmp from "./DeleteModalCmp";
import Sizes from "../constants/Sizes";
import VoteButton from "./VoteButton";

const CommnetBoxWrapper = styled.div`
  width: 100%;
  background-color: ${Colors.White};
  padding: 16px;
  display: flex;
  font-size: 16px;
  border-radius: 10px;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 16px;

  @media (min-width: ${Sizes.largeScreen}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const CommentBodyWrapper = styled.div`
  margin: 20px 0px;
  width: 100%;
`;

const ReplyingTo = styled.span`
  color: ${Colors.Moderate_blue};
`;

const MediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

const CommentBox = ({ comment, replyingTo, commentId, replyId }) => {
  const currentUser = useSelector(
    (root) => root.appReducer.currentUser.username
  );
  const [showInputBox, setShowInputBox] = useState(false);
  const dispatch = useDispatch();
  const [inputContext, setInputContext] = useState("Send");
  const [confirmDelete, setConfirmDelete] = useState();
  const [scoreLimit, setScoreLimit] = useState(0);

  const replyClicked = (context) => {
    setShowInputBox((prevState) => !prevState);
    setInputContext(context);
  };

  const onSendReply = (content) => {
    dispatch(appActions.addReply(content, commentId, comment.user.username));
    setShowInputBox(false);
  };

  const onEditComment = (content) => {
    dispatch(appActions.editComment(content, commentId, replyId));
    setShowInputBox(false);
  };

  const deleteComment = () => {
    dispatch(appActions.deleteComment(commentId, replyId));
    setConfirmDelete(null);
  };

  const onDeleteClicked = () => setConfirmDelete("open");

  const castVote = (vote) => {
    setScoreLimit((prevState) => prevState + vote);
    dispatch(appActions.updateScore(comment.score + vote, commentId, replyId));
  };

  return (
    <>
      <CommnetBoxWrapper>
        <VoteButton
          votes={comment.score}
          inHeader={true}
          onVoteCast={castVote}
          scoreLimit={scoreLimit}
        />
        <MediaWrapper>
          <CommentHeader
            user={comment.user}
            createdAt={comment.createdAt.split("T")[0]}
            fromSelf={currentUser === comment.user.username}
            onDeleteClicked={onDeleteClicked}
            onReplyClicked={replyClicked}
          />
          <CommentBodyWrapper>
            {replyingTo && <ReplyingTo>@{replyingTo} </ReplyingTo>}
            <CommentBody content={comment.content} />
          </CommentBodyWrapper>
        </MediaWrapper>
        <CommentFooter
          score={comment.score}
          fromSelf={currentUser === comment.user.username}
          onReplyClicked={replyClicked}
          onDeleteClicked={onDeleteClicked}
          onVoteCast={castVote}
          scoreLimit={scoreLimit}
        />
      </CommnetBoxWrapper>
      {showInputBox && (
        <CommentInputArea
          inSection={true}
          onClick={inputContext === "Update" ? onEditComment : onSendReply}
          btnText={inputContext}
          editableText={inputContext === "Update" ? comment.content : null}
        />
      )}
      {confirmDelete && (
        <DeleteModalCmp
          onDeleteClicked={deleteComment}
          HideModal={() => setConfirmDelete(null)}
        />
      )}
    </>
  );
};

export default CommentBox;
