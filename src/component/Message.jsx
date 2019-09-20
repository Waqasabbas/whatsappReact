import React from 'react';
import './Message.css';
import PropTypes from 'prop-types';

function Message(props) {
    return (
        
        <li className={props.all}>
            <img src={props.imgURL} alt={props.name} />
            <div className="body">
                <div className="msgRead">
                <h3>{props.name}</h3>
                <p><span>{props.unreadMsg}</span></p>
                </div>
                <p>{props.number}</p>
                <p>{props.message}</p>
                <p>{props.time}</p>
            </div>
        </li>
    )
}

Message.propTypes = {
    name: PropTypes.string.isRequired,
    unreadMsg: PropTypes.bool,
    number: PropTypes.string,
    time: PropTypes.string,
    imgURL: PropTypes.string.isRequired,
    message: PropTypes.string,

}

export default Message;