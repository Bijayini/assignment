import React from 'react';
import PropTypes from 'prop-types';

const FormField = ({label, labelFor,children}) =>(<div className="form-field">
    <label htmlFor={labelFor}>{label} &#42;</label>
    {children}
</div>);

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  labelFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FormField;