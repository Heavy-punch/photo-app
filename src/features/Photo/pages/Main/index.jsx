import { Button } from 'reactstrap';
import PhotoList from 'features/Photo/components/PhotoList';
import { removePhoto } from 'features/Photo/photoSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Container } from 'reactstrap';
import Banner from '../../../../components/Banner';
import Images from '../../../../constants/images';

MainPage.propTypes = {

};

function MainPage(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    const listPhoto = useSelector(state => {
        return state.photos;
    });

    useEffect(() => {
        localStorage.setItem('photoList', JSON.stringify(listPhoto));
    }, [listPhoto]);

    const handlePhotoEditClick = (photo) => {
        history.push(`/photos/${photo.id}`)
    };
    const handlePhotoRemoveClick = (photo) => {
        setTimeout(() => {
            const action = removePhoto(photo.id);
            dispatch(action);
        }, 200);

    };
    return (
        <div className='photo-main'>
            <Banner title="awesome photo of you😊" backgroundUrl={Images.PINK_BG} />
            <Container className="text-center">
                <div className="py-5">
                    <Link to="/photos/add"><Button outline color="info">Add new photo</Button></Link>
                </div>
                <PhotoList
                    listPhoto={listPhoto}
                    onPhotoEditClick={handlePhotoEditClick}
                    onPhotoRemoveClick={handlePhotoRemoveClick}
                />
            </Container>
        </div>

    );
}

export default MainPage;