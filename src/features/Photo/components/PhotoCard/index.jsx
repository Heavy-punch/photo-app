import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './PhotoCard.scss'
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';

PhotoCard.propTypes = {
    photo: PropTypes.object,
    onEditClick: PropTypes.func,
    onRemoveClick: PropTypes.func,
};

PhotoCard.defaultProps = {
    photo: {},
    onEditClick: null,
    onRemoveClick: null,
};

function PhotoCard(props) {
    const { photo, onEditClick, onRemoveClick } = props;
    // console.log(photo);
    const [activeRemove, setActiveRemove] = useState(false)

    const handleEditClick = () => {
        if (onEditClick) onEditClick(photo);
    }
    const handleRemoveClick = () => {
        if (onRemoveClick) onRemoveClick(photo);
        setActiveRemove(true);
    }

    return (
        <div className={activeRemove ? "photo photo--removed" : "photo"}>
            <img
                src={photo.photo}
                alt={photo.title}
            />
            <div className="photo__overlay">
                <h3 className="title">{photo.title}</h3>
                <div className="actions">
                    <div>
                        <Button outline size="sm" color="light" onClick={handleEditClick}>edit</Button>
                    </div>
                    <div>
                        <Button outline size="sm" color="danger" onClick={handleRemoveClick}>remove</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotoCard;