import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Colors from "../constants/Colors";
import { ReactComponent as PlusIcon } from "../assets/images/icon-plus.svg";
import { ReactComponent as MinusIcon } from "../assets/images/icon-minus.svg";
import { css } from "styled-components";
import Sizes from "../constants/Sizes";

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${Colors.Light_gray};
  border-radius: 10px;
  overflow: hidden;
  width: 90px;

  ${(props) =>
    props.inHeader &&
    css`
      display: none;
      @media (min-width: ${Sizes.largeScreen}) {
        display: block;
        flex-direction: column;
        margin-right: 16px;
        max-width: 40px;
      }
    `}
`;

const IconWrapper = styled.div`
  flex: 1;
  display: grid;
  padding: 13px 5px;
  place-items: center;
  cursor: pointer;
  ${(props) =>
    props.disable &&
    css`
      pointer-events: none;
    `}
`;

const ButtonStyles = css`
  ${IconWrapper}:hover & path {
    fill: ${Colors.Moderate_blue};
  }
`;

const StyledIncButton = styled(PlusIcon)`
  ${ButtonStyles}
`;

const StyledDecButton = styled(MinusIcon)`
  ${ButtonStyles}
`;

const Votes = styled.p`
  color: ${Colors.Moderate_blue};
  text-align: center;
`;

const VoteButton = ({ votes, inHeader, onVoteCast, scoreLimit }) => {
  const [disableInc, setDisableInc] = useState(false);
  const [disableDec, setDisableDec] = useState(false);

  useEffect(() => {
    if (scoreLimit === 1) {
      setDisableInc(true);
      setDisableDec(false);
    } else if (scoreLimit === -1) {
      setDisableDec(true);
      setDisableInc(false);
    } else {
      setDisableInc(false);
      setDisableDec(false);
    }
  }, [scoreLimit, setDisableDec, setDisableInc]);

  return (
    <ButtonWrapper inHeader={inHeader}>
      <IconWrapper
        disable={disableInc}
        onClick={() => {
          onVoteCast(1);
        }}
      >
        <StyledIncButton />
      </IconWrapper>
      <Votes>{votes}</Votes>
      <IconWrapper
        disable={disableDec}
        onClick={() => {
          onVoteCast(-1);
        }}
      >
        <StyledDecButton />
      </IconWrapper>
    </ButtonWrapper>
  );
};

export default VoteButton;
