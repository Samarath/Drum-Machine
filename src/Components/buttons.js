import React from 'react';

const Buttons = (props) => {
    // console.log(window)
    return (
        <button onClick={props.musickey.func} id={props.id}>{props.musickey}</button>
    )
}

export default Buttons;