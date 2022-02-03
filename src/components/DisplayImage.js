import styled, { css } from "styled-components";
import Sizes from "../constants/Sizes";

const DisplayImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin-right: 16px;

  ${(props) =>
    props.applyMediaQuery &&
    css`
      display: none;
      @media (min-width: ${Sizes.largeScreen}) {
        display: inline;
      }
    `}
`;

export default DisplayImage;
