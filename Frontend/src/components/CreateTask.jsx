import React, {Component} from "react";
import PropTypes from 'prop-types';

import Modal from "../ui-components/Modal";
import Loader from "../ui-components/Loader";

import TaskForm from "../components/TaskForm";
import Error from "../pages/Error";
import labels from '../labels/Task.labels';

class CreateTask extends Component{
    static propTypes = {
        toggleOverlay: PropTypes.func.isRequired,
        loading:PropTypes.bool,
        error:PropTypes.string,
    };

    constructor(props){
        super(props);
        this.state = {
            title: "",
            description: "",
            status:'',
            hasError:false
        };
    }


    handleChange =(event)=> {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    handleSubmit = () => {
        const {title, description, status} = this.state;
        const {createTask, toggleOverlay } = this.props;

        if(title !== '' && description !== '' && status !== ''){
            createTask({
                title,
                description,
                status
            });
            toggleOverlay();
        }else{
            this.setState({hasError:true});
        }
    };

    render(){
        const { error, loading,toggleOverlay} = this.props;
        const {title, description, status, hasError} = this.state;
        const buttons = [
            {
                label:labels.cancel,
                type: 'secondary',
                callback:toggleOverlay,
            },
            {
                label: labels.continue,
                type: 'primary',
                callback:this.handleSubmit,
            },
        ];
        if (error) {
            return <Error message={error}/>
        }

        if (loading) {
            return <Loader/>;
        }
        return(
            <Modal toggleOverlay={toggleOverlay} buttons={buttons}>
                <h3 className="modal-title">{labels.create_a_task}</h3>
                <TaskForm title={title} description={description} status={status} handleChange={this.handleChange} hasError={hasError}/>
            </Modal>
        );
    }
}
export default  CreateTask;