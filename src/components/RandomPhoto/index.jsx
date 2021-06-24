import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'reactstrap';
import './RandomPhoto.scss';

RandomPhoto.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    onImageUrlChange: PropTypes.func,
    onRandomButtonBlur: PropTypes.func
};
RandomPhoto.defaultProps = {
    name: '',
    imageUrl: '',
    onImageUrlChange: null,
    onRandomButtonBlur: null
};
const getRandomImageUrl = () => {
    const randomId = Math.trunc(Math.random() * 2000);
    return `https://picsum.photos/id/${randomId}/300/300`;
};
function RandomPhoto(props) {
    const { onImageUrlChange, name, imageUrl, onRandomButtonBlur } = props;
    const handleRandomPhotoClick = async () => {
        if (onImageUrlChange) {
            const newImageUrl = getRandomImageUrl();
            onImageUrlChange(newImageUrl);
        }
    };
    return (
        <div className='random-photo'>
            <div className='random-photo__button'>
                <Button
                    name={name}
                    type="button"
                    outline
                    color="primary"
                    onBlur={onRandomButtonBlur}
                    onClick={handleRandomPhotoClick}
                >
                    Random a photo
                </Button>
            </div>
            <div className='random-photo__photo'>
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt="Oops... not found. Please waiting a while..."
                        onError={handleRandomPhotoClick}
                    />
                )}
            </div>
        </div>
    );
}

export default RandomPhoto;