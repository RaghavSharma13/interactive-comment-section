import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import Colors from "../constants/Colors";
import * as appActions from "../store/appActions";
import DisplayImage from "./DisplayImage";
import Sizes from "../constants/Sizes";

const CommentInputarea = styled.div`
  width: 100%;
  padding: 15px;
  background-color: ${Colors.White};
  display: flex;
  flex-direction: column;
  margin: ${(props) => (props.inSection ? css`20px 0` : css`20px 0 0`)};
  border-radius: 10px;
  align-items: flex-start;
  @media (min-width: ${Sizes.largeScreen}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const CommentInput = styled.textarea`
  border: 1px solid ${Colors.Dark_blue};
  border-radius: 10px;
  padding: 15px 20px;
  height: 90px;
  /* margin-right: 16px; */
  width: 100%;
  color: ${Colors.Dark_blue};
  font-weight: 400;
  flex: 1;
  &::-webkit-scrollbar-track {
    margin: 2px 0;
  }
`;

const InputButton = styled.button`
  padding: 15px 30px;
  background-color: ${Colors.Moderate_blue};
  border-radius: 10px;
  outline: none;
  border: none;
  color: ${Colors.White};
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: ${Colors.Light_grayish_blue};
  }
  ${(props) =>
    props.applyMediaQuery &&
    css`
      display: none;
      @media (min-width: ${Sizes.largeScreen}) {
        display: inline-block;
        margin-left: 16px;
      }
    `}
`;

const CommentInputFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  width: 100%;
  @media (min-width: ${Sizes.largeScreen}) {
    display: none;
  }
`;

const CommentInputArea = ({ inSection, onClick, btnText, editableText }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState(editableText ? editableText : "");
  const currentUser = useSelector((root) => root.appReducer.currentUser);

  if (!onClick) {
    onClick = (comment) => dispatch(appActions.addComment(comment));
  }

  const updateComment = (e) => {
    setComment(e.target.value);
  };

  const postComment = () => {
    onClick(comment);
    setComment("");
  };

  return (
    <CommentInputarea inSection={inSection}>
      <DisplayImage
        applyMediaQuery={true}
        src={require(`../assets${currentUser.image.png}`)}
      />
      <CommentInput
        placeholder="Add a comment..."
        value={comment}
        onChange={updateComment}
      />
      <InputButton applyMediaQuery={true} onClick={postComment}>
        {btnText}
      </InputButton>
      <CommentInputFooter>
        <DisplayImage src={require(`../assets${currentUser.image.png}`)} />
        <InputButton onClick={postComment}>{btnText}</InputButton>
      </CommentInputFooter>
    </CommentInputarea>
  );
};

export default CommentInputArea;
