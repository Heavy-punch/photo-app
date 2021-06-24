import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';
import InputField from 'custom-fields/InputField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import SelectedField from 'custom-fields/SelectField';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { Button, FormGroup, Spinner } from 'reactstrap';
// import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';
// import Images from '../../../../constants/images';
import * as Yup from 'yup';

PhotoForm.propTypes = {

};

function PhotoForm(props) {
    const { initialValues, isAddMode } = props;

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('this feild is required.?'),
        categoryId: Yup.number().required('this field is also required.??').nullable(),
        photo: Yup.string().when('categoryId', {
            is: 1,
            then: Yup.string().required('this field is also required!!'),
            otherwise: Yup.string().notRequired(),
        })
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}
        >
            {formikPorps => {
                const { values, errors, touched, isSubmitting } = formikPorps;
                return (
                    <Form>
                        <FastField
                            name="title"
                            component={InputField}

                            label="Title"
                            placeholder="something you want"
                        />

                        <FastField
                            name="categoryId"
                            component={SelectedField}

                            label="Category"
                            placeholder="something you want"
                            options={PHOTO_CATEGORY_OPTIONS}
                        />

                        <FastField
                            name="photo"
                            component={RandomPhotoField}

                            label="photo"
                        />

                        <FormGroup>
                            <Button
                                type="submit"
                                outline
                                color={isAddMode ? "primary" : "warning"}
                            >
                                {isAddMode ? 'Add to album ' : 'update the photo '}
                                {isSubmitting && <Spinner size="sm" color="info" type="grow"> </Spinner>}
                            </Button>
                        </FormGroup>
                    </Form>
                );
            }}

        </Formik>

    );
}

export default PhotoForm;