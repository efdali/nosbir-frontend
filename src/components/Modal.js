import React from "react";
import ReactModal from "react-modal";
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { hideModal } from "../store/actions/modalAction";
ReactModal.setAppElement("#root");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
  overlay:{
    background: "rgba(39,41,48,.95)"
  }
};
export default function Modal(props) {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(hideModal(props.modal));
  };
  return (
    <ReactModal {...props} style={customStyles} onRequestClose={closeModal}>
      <div className="close-modal">
        <i class="fas fa-times" onClick={closeModal}></i>
      </div>
      {props.children}
    </ReactModal>
  );
}
Modal.prototype={
  modal:PropTypes.string.isRequired,
  isOpen:PropTypes.bool
}
Modal.defaultProps={
  isOpen:false
}