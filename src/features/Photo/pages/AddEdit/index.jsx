import React from 'react';
import Banner from '../../../../components/Banner';
import { useDispatch, useSelector } from 'react-redux';
import PhotoForm from '../../components/PhotoForm';
import './styles.scss';
import { useHistory, useParams } from 'react-router-dom';
import { randomNumber } from 'utils/common';
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';

AddEditPage.propTypes = {

};

function AddEditPage(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const { photoId } = useParams();
    const isAddMode = !photoId;

    const editPhoto = useSelector(state => {
        const foundPhoto = state.photos.find(photo => photo.id === photoId - 0);
        // console.log({ photos: state.photos, photoId, foundPhoto });
        return foundPhoto;
    })

    const initialValues = isAddMode ?
        {
            title: '',
            categoryId: null,
            photo: '',
        }
        : editPhoto;

    const handleFormSubmit = (values) => {
        return new Promise(resolve => {
            setTimeout(() => {
                if (isAddMode) {
                    const newPhoto = {
                        ...values,
                        id: randomNumber(10000, 99999)
                    }
                    const action = addPhoto(newPhoto);
                    dispatch(action);
                } else {
                    const action = updatePhoto(values);
                    dispatch(action);
                }
                history.push('/photos')
                resolve(true)
            }, 2000);

        })
    };

    return (
        <div className="photo-edit">
            <Banner title="Select your interest image 😊" />
            <div className="photo-edit__form">
                <PhotoForm
                    initialValues={initialValues}
                    isAddMode={isAddMode}
                    onSubmit={handleFormSubmit}
                />
            </div>
        </div>
    );
}

export default AddEditPage;