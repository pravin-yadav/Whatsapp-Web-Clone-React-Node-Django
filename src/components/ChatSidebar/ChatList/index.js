import React, { useState } from 'react';
import ChatListItem from './ChatListItem';

export const ChatList = () => {
    const [chatList] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}])
    return (
        <div className="chat-sidebar--chatlist">
            {chatList.map((chat, index) => <ChatListItem key={index} data={chat} />)}
        </div>
    )
}

