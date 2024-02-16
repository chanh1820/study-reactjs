import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

Album.propTypes = {
    
};

const albumData = [
    {
        id : 1,
        songName : "Ngắm hoa lệ rơi",
        thumbnail:"https://cdn.sforum.vn/sforum/wp-content/uploads/2020/06/anh-bia-34.png" 
    },
    {
        id : 2,
        songName : "Em của ngày hôm qua",
        thumbnail:"https://cdn.sforum.vn/sforum/wp-content/uploads/2020/06/anh-bia-34.png" 
    },
    {
        id : 3,
        songName : "Những lời hứa bỏ quên",
        thumbnail:"https://cdn.sforum.vn/sforum/wp-content/uploads/2020/06/anh-bia-34.png" 
    }
]
function Album(props) {
    return (
        <div>
        <h1> hello</h1>

            <AlbumList albumData = {albumData}/>
        </div>
    );
}

export default Album;