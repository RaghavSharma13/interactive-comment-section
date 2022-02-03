import React from "react";
import styled from "styled-components";
import Colors from "../constants/Colors";

const DeleteModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${Colors.ModalBackground};
  display: grid;
  place-items: center;
`;

const DeleteModal = styled.div`
  width: 320px;
  padding: 16px;
  background-color: ${Colors.White};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
`;

const DeleteModalHeader = styled.h3`
  color: ${Colors.Dark_blue};
`;

const DeleteModalMessage = styled.p`
  color: ${Colors.Grayish_Blue};
  margin: 24px 0;
`;

const DeleteModalButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const DeleteModalButton = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  padding: 15px 20px;
  color: ${Colors.White};
  background-color: ${(props) =>
    props.delete ? Colors.Soft_Red : Colors.Grayish_Blue};
  &:hover {
    background-color: ${(props) =>
      props.delete ? Colors.Pale_red : Colors.Light_grayish_blue};
  }
  border-radius: 5px;
  border: none;
  outline: none;
  font-weight: 500;
`;

const DeleteModalCmp = ({ onDeleteClicked, HideModal }) => {
  return (
    <DeleteModalWrapper>
      <DeleteModal>
        <DeleteModalHeader>Delete Comment</DeleteModalHeader>
        <DeleteModalMessage>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </DeleteModalMessage>
        <DeleteModalButtonWrapper>
          <DeleteModalButton onClick={HideModal}>No, Cancel</DeleteModalButton>
          <DeleteModalButton delete onClick={onDeleteClicked}>
            Yes, Delete
          </DeleteModalButton>
        </DeleteModalButtonWrapper>
      </DeleteModal>
    </DeleteModalWrapper>
  );
};

export default DeleteModalCmp;
