import React from 'react';
import PropTypes from 'prop-types';
import AlbumItem from '../AlbumItem';
import './styles.scss';

AlbumList.propTypes = {
    albumList: PropTypes.array
};

AlbumList.defaultProps = {
    albumList: [],
};

function AlbumList(props) {
    const {albumData} = props
    console.log(albumData);
    return (
        <div className='album-list'>
            {
                albumData.map(item => (
                    <AlbumItem album = {item}/>
                ))
            }
        </div>
    );
}

export default AlbumList;