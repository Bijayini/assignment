import React, {Fragment} from "react";

import labels from '../labels/Task.labels';
import FormField from "../ui-components/FormField";

const TaskForm  = ({title, description, status, handleChange, hasError})=>{
    return(
        <Fragment>
            <FormField label={labels.title} labelFor={title}>
                <input type="text" id="title" name="title" value={title} onChange={handleChange} />
            </FormField>
            <FormField label={labels.description} labelFor={description}>
                <textarea id="description" name="description" value={description} onChange={handleChange} />
            </FormField>
            <FormField label={labels.status} labelFor={status}>
                <select value={status} name="status" onChange={handleChange}>
                    <option value="">{labels.select_status}</option>
                    <option value="in progress">{labels.in_progress}</option>
                    <option value="completed">{labels.completed}</option>
                    <option value="urgent">{labels.urgent}</option>
                </select>
            </FormField>
            {hasError &&<p className="error-message">{labels.please_fill_all_required_field}</p>}
        </Fragment>
    );
};

export default TaskForm;
