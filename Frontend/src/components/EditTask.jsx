import React, {Component, Fragment} from "react";
import PropTypes from 'prop-types';

import Modal from "../ui-components/Modal";
import Loader from "../ui-components/Loader";
import Button from "../ui-components/Button";

import labels from '../labels/Task.labels';
import TaskForm from "./TaskForm";
import Error from "../pages/Error";



class EditTask extends Component{
    static propTypes = {
         task:PropTypes.shape({
             title:PropTypes.string.isRequired,
             description:PropTypes.string.isRequired,
             status:PropTypes.string.isRequired,
             _id:PropTypes.string.isRequired,
         }).isRequired
    };

    constructor(props){
        super(props);
        const {task:{title, description, status}} = props;
        this.state = {
            title: title,
            description: description,
            status:status,
            hasError:false,
            isOverlayOpen:false,
        };
    }


   componentDidUpdate(prevProps){
        const {task} = this.props;
        const {title, description, status} =task;
        if(JSON.stringify(task) !== JSON.stringify(prevProps.task)){
            this.setState({
                title,
                description,
                status,
            })
        }
   }

    clearForm = ()=>{
        const {task:{title, description, status}} = this.props;
        this.setState({
             title,
             description,
             status,
        });
    };

    handleChange =(event)=> {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    toggleOverlay=()=>{
        this.setState({
            isOverlayOpen:!this.state.isOverlayOpen
        })
    };

    handelCancel=()=>{
        this.clearForm();
        this.toggleOverlay();
    };

    handleSubmit = () => {
        const {title, description, status} = this.state;
        const {editTask, task } = this.props;

        if(title !== '' && description !== '' && status !== ''){
            if(title !== task.title || description !== task.description || status !== task.status){
                editTask({
                    title,
                    description,
                    status
                },task._id);
            }
            this.toggleOverlay();
        }else{
            this.setState({hasError:true});
        }
    };

    render(){
        const { error, loading} = this.props;
        const {title, description, status, hasError, isOverlayOpen,} = this.state;
        const buttons = [
            {
                label:labels.cancel,
                type: 'secondary',
                callback:this.handelCancel,
            },
            {
                label: labels.continue,
                type: 'primary',
                callback:this.handleSubmit,
            },
        ];
        if (error) {
            return <Error message={error}/>;
        }

        if (loading) {
            return <Loader/>;
        }
        return(
            <Fragment>
                <Button variant="primary" size="small" classList="edit" onClick={this.toggleOverlay}>{labels.edit}</Button>
                {isOverlayOpen && <Modal toggleOverlay={this.handelCancel} buttons={buttons}>
                    <h3 className="modal-title">{labels.edit_a_task}</h3>
                    <TaskForm title={title} description={description} status={status} handleChange={this.handleChange} hasError={hasError}/>
                </Modal>}
            </Fragment>

        );
    }
}

export default EditTask;
