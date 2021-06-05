import React from 'react';
import Modal from 'react-modal';

const OptionModal =(props)=>(
        <Modal
            ariaHideApp={false}
            isOpen={!!props.selectedOption}
            contentLabel="Selected Option"
            closeTimeoutMS={200}
            onRequestClose={props.handleCloseModal}
            className="modal"
        
        >
            <h3 className="modal__title">Selected Option</h3>
            {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
            <button className="button"
            onClick={props.handleCloseModal}>Close</button>
        </Modal>
    )

export default OptionModal;