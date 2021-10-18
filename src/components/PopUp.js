import React, { Component } from 'react';
import Modal from "react-modal";
import "../css/PopUp.scss";

const PropUp = ()=>̣(

        <Modal
        isOpen={true}
        onRequestClose={toggleModal}
        contentLabel="Travel Info"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div>My modal dialog.</div>
        <button onClick={toggleModal}>Close modal</button>
      </Modal>
);

export default PropUp;

