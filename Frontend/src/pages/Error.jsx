import React from "react";
import PropTypes from "prop-types";

import labels from "../labels/Error.labels";
import '../styles/error.scss';

const Error = ({message}) => {
    return <div className="wrap error-page">
        <h1 className="error-title">{message}</h1>
        <p>{labels.message}</p>
    </div>;
};

Error.defaultProps = {
    message:labels.something_went_wrong
};

Error.propTypes = {
    message: PropTypes.string,
};


export default Error;