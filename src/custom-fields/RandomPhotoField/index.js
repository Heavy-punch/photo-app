import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';
import { FormFeedback, FormGroup, Label, } from 'reactstrap'
import RandomPhoto from 'components/RandomPhoto';

RandomPhotoField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
};
RandomPhotoField.defaultProps = {
    label: '',
};

function RandomPhotoField(props) {
    const { field, form, label } = props;
    const { name, value, onBlur } = field;
    const { errors, touched } = form;
    const showErrors = errors[name] && touched[name]

    const handleImageUrlChange = (newImageUrl) => {
        form.setFieldValue(name, newImageUrl);
    };
    return (
        <FormGroup>
            {label && <Label>{label}</Label>}
            <RandomPhoto
                name={name}
                imageUrl={value}
                onImageUrlChange={handleImageUrlChange}
                onRandomButtonBlur={onBlur}
            />
            <div className={showErrors ? 'is-invalid' : ''}></div>
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
}

export default RandomPhotoField;