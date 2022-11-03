import React from 'react';
import Modal from 'react-modal';
import IndecisionApp from './IndecisionApp';

const OptionModal = (props) => (
        <Modal
            isOpen={!!props.selectedOption}
            onRequestClose={props.handleCloseOption}
            contentLabel="Selected Option"
        >
            <h3>Selected Option</h3>
            {props.selectedOption && <p>{props.selectedOption}</p>}
            <button onClick={props.handleCloseOption}>Okay</button>
        </Modal>
    );


export default OptionModal;