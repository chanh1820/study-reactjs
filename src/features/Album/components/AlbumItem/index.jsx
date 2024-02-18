import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
AlbumItem.propTypes = {
    
};

function AlbumItem(props) {
    const {album} = props;
    return (
        <div className='album-item'>
            <h2>{album.songName}</h2>
            <img className='image-item' src={album.thumbnail} alt=''/>
        </div>
    );
}

export default AlbumItem;