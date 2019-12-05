import React from "react";
import ReactModal from "react-modal";
import {useDispatch} from 'react-redux';
import {setModalVisibility} from '../store/actions/modalActions';
import NavbarBrand from "./navbarBrand";
ReactModal.setAppElement("#__next");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)"
  },
  overlay: {
    background: "rgba(39,41,48,.95)"
  }
};
export default function Modal(props) {
  const dispatch=useDispatch();
  const closeModal = () => {
    dispatch(setModalVisibility(props.modal),false);
  };
  return (
    <ReactModal isOpen={props.isOpen} style={customStyles} onRequestClose={closeModal}>
      <div className="modal-header">
        <NavbarBrand/>
          <button className="default-btn" onClick={closeModal}>&times;</button>
      </div>
      {props.children}
    </ReactModal>
  );
}
Modal.defaultProps = {
  isOpen: false
};
