import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import PhotoCard from '../PhotoCard';

PhotoList.propTypes = {
    listPhoto: PropTypes.array,
    onPhotoEditClick: PropTypes.func,
    onPhotoRemoveClick: PropTypes.func,
};
PhotoList.defaultProps = {
    listPhoto: [],
    onPhotoEditClick: null,
    onPhotoRemoveClick: null,
};

function PhotoList(props) {
    const { listPhoto, onPhotoEditClick, onPhotoRemoveClick } = props;
    // console.log(listPhoto);
    return (
        <Row>
            {listPhoto.map(photo => (
                <Col key={photo.id} xs='12' md='6' lg='3'>
                    <PhotoCard
                        photo={photo}
                        onEditClick={onPhotoEditClick}
                        onRemoveClick={onPhotoRemoveClick}
                    />
                </Col>
            ))}
        </Row>
    );
}

export default PhotoList;