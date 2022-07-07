import React from 'react'
import "./Message.css";

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className="container">
            <div className="container__avatar">
                <img src={props.avatar} alt=""/>
            </div>
            <div className="angle"/>
            <div className="container__message">
                <h1>{props.name}</h1>
                <p>{props.message}</p>
                <div className="container__time">{props.time}</div>
            </div>
        </div>
    );
}

export default Message;
