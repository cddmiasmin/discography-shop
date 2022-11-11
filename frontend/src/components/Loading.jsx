import React from 'react'
import Header from './Header/Header';


const Loading = () => {
    return (
        <div
            className='d-flex position-absolute flex-column w-100 h-100 justify-content-center align-items-center'
        >
            <Header colorIsDarkOrLight={'light'} color={'white'} colorIsWhiteOrBlack={'white'} />
            <img
                className='rounded-circle'
                style={{width: '15%', height: '30%'}}
                src="https://media3.giphy.com/media/4T7zBzdeNEtjThYDWn/giphy.gif?cid=ecf05e476frjpui8wf6aryk0wlql2n9cskp7sfcxze1creqt&rid=giphy.gif&ct=g"
                alt=""
            />
        </div>
    )
}

export default Loading