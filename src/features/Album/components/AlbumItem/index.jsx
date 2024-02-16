import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

AlbumItem.propTypes = {
    
};

function AlbumItem(props) {
    const {album} = props;
    return (
        <div className='album-item'>
            <h2>{album.songName}</h2>
            <img src={album.thumbnail} alt=''/>
        </div>
    );
}

export default AlbumItem;