import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://s1.1zoom.ru/big0/562/347669-admin.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1
            <hr/>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            {/*<hr/>*/}
            {/*/!*для личного творчества, могу проверить*!/*/}
            {/*/!*<AlternativeMessage/>*!/*/}
            {/*<hr/>*/}
        </div>
    )
}

export default HW1
