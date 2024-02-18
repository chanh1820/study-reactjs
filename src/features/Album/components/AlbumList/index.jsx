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
    const { albumData } = props
    console.log(albumData);
    return (
        <ul className='album-list'>
            {albumData.map(item => (
                <li key={item.id}>
                    <AlbumItem album={item} />
                </li>
            ))}
        </ul>
    );
}

export default AlbumList;
