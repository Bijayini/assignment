import React, {Component, Fragment} from 'react';
import PropTypes from "prop-types";

import Button from "../ui-components/Button";
import Modal from "../ui-components/Modal";

import labels from "../labels/Task.labels";

class DeleteTask extends Component{
    constructor(){
        super();
        this.state = {
            isOverlayOpen:false
        }
    }

    toggleOverlay=()=>{
        this.setState({
            isOverlayOpen:!this.state.isOverlayOpen
        })
    };

    handelDelete = () =>{
        const {handelClick, id } = this.props;
        handelClick(id);
        this.toggleOverlay();
    };


    render(){
        const {isOverlayOpen} = this.state;
        const{id } = this.props;
        const buttons = [
            {
                label:labels.cancel,
                type: 'secondary',
                callback:this.toggleOverlay,
            },
            {
                label: labels.continue,
                type: 'primary',
                callback:()=>{this.handelDelete(id)},
            },
        ];
        return(<Fragment>
                <Button variant="primary" size="small"  onClick={this.toggleOverlay}>{labels.delete}</Button>
                {isOverlayOpen && <Modal toggleOverlay={this.toggleOverlay} buttons={buttons}>
                    <p>{labels.are_you_sure}</p>
                </Modal>}
            </Fragment>

           );
    }
}

DeleteTask.propTypes = {
    handelClick: PropTypes.func.isRequired,
};

export default DeleteTask;