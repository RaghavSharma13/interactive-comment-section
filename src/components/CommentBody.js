import React from "react";
import styled from "styled-components";
import Colors from "../constants/Colors";

const CommentBoxBody = styled.span`
  width: 100%;
  color: ${Colors.Grayish_Blue};
`;

const CommentBody = ({ content }) => {
  return <CommentBoxBody>{content}</CommentBoxBody>;
};

export default CommentBody;
