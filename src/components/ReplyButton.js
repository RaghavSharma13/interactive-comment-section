import React from "react";
import styled, { css } from "styled-components";
import { ReactComponent as DeleteIcon } from "../assets/images/icon-delete.svg";
import { ReactComponent as EditIcon } from "../assets/images/icon-edit.svg";
import { ReactComponent as ReplyIconImage } from "../assets/images/icon-reply.svg";
import Colors from "../constants/Colors";
import Sizes from "../constants/Sizes";

const ButtonHeaderStyles = css`
  ${(props) =>
    props.inHeader
      ? css`
          margin-left: auto;
          @media (max-width: ${Sizes.largeScreen}) {
            display: none;
          }
        `
      : css``}
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;
  text-transform: uppercase;
  font-weight: 700;
  color: ${(props) => (props.delete ? Colors.Soft_Red : Colors.Moderate_blue)};
  margin-right: ${(props) => (props.delete ? css`16px` : css`0px`)};
  cursor: pointer;
  &:hover {
    color: ${(props) =>
      props.delete ? Colors.Pale_red : Colors.Light_grayish_blue};
  }
  ${ButtonHeaderStyles}
`;

const ButtonWrapper = styled.div`
  display: flex;
  ${ButtonHeaderStyles}
`;

const IconStyles = css`
  margin-right: 8px;
  ${StyledButton}:hover & path {
    fill: ${(props) => props.hovercolor};
  }
`;

const StyledReplyIcon = styled(ReplyIconImage)`
  ${IconStyles}
`;

const StyledDeleteIcon = styled(DeleteIcon)`
  ${IconStyles}
`;

const StyledEditIcon = styled(EditIcon)`
  ${IconStyles}
`;

const ReplyButton = ({
  onReplyClicked,
  fromSelf,
  onDeleteClicked,
  inHeader,
}) => {
  if (fromSelf) {
    return (
      <ButtonWrapper inHeader={inHeader}>
        <StyledButton delete onClick={onDeleteClicked}>
          <StyledDeleteIcon hovercolor={Colors.Pale_red} />
          Delete
        </StyledButton>
        <StyledButton onClick={() => onReplyClicked("Update")}>
          <StyledEditIcon hovercolor={Colors.Light_grayish_blue} />
          Edit
        </StyledButton>
      </ButtonWrapper>
    );
  }
  return (
    <StyledButton inHeader={inHeader} onClick={() => onReplyClicked("Reply")}>
      <StyledReplyIcon hovercolor={Colors.Light_grayish_blue} />
      Reply
    </StyledButton>
  );
};

export default ReplyButton;
