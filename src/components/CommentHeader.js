import React from "react";

import styled, { css } from "styled-components";
import Colors from "../constants/Colors";
import DisplayImage from "./DisplayImage";
import ReplyButton from "./ReplyButton";
import moment from "moment";

moment.updateLocale("en", {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d seconds",
    m: "1 minute",
    mm: "%d minutes",
    h: "1 hour",
    hh: "%dh",
    d: "1 day",
    dd: "%d days",
    M: "1 month",
    MM: "%d months",
    y: "1 year",
    yy: "%d years",
  },
});

const CommnetBoxHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const HeaderText = styled.p`
  font-weight: 500;
  ${(props) =>
    props.fromSelf
      ? css`
          margin-right: 8px;
        `
      : css`
          margin-right: 16px;
        `}
  ${(props) =>
    props.username
      ? css`
          color: ${Colors.Grayish_Blue};
        `
      : css`
          color: ${Colors.Light_grayish_blue};
        `}
`;

const UserTag = styled.p`
  background-color: ${Colors.Moderate_blue};
  color: ${Colors.White};
  font-weight: 500;
  padding: 2px 4px;
  margin-right: 8px;
  text-align: center;
  border-radius: 3px;
`;

const CommentHeader = ({
  user,
  createdAt,
  fromSelf,
  onDeleteClicked,
  onReplyClicked,
}) => {
  return (
    <CommnetBoxHeader>
      <DisplayImage src={require(`../assets${user.image.png}`)} />
      <HeaderText fromSelf={fromSelf} username>
        {user.username}
      </HeaderText>
      {fromSelf && <UserTag>you</UserTag>}
      <HeaderText>{moment(createdAt).fromNow()}</HeaderText>
      <ReplyButton
        fromSelf={fromSelf}
        onDeleteClicked={onDeleteClicked}
        onReplyClicked={onReplyClicked}
        inHeader={true}
      />
    </CommnetBoxHeader>
  );
};

export default CommentHeader;
