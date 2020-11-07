import React from 'react';

class ChatListItem extends React.Component {
    render() {
        return (
            <div className="chat-sidebar-chatlist--listitem">
                <img className="chat-sidebar-chatlist--avatar" src="/assets/images/profile_pic.jpg" alt="" />
                <div className="chat-sidebar-chatlist--content">
                    <div className="chat-sidebar-chatlist--data">
                        <div className="chat-sidebar-chatlist--name">Pravin Yadav </div>
                        <div className="chat-sidebar-chatlist--time">Thu 19:20</div>
                    </div>
                    <div className="chat-sidebar-chatlist--data">
                        <div className="chat-sidebar-chatlist--text">
                            Hey,How are you Hey,How are you Hey,How are you Hey,How are you Hey,How are you Hey,How are you Hey,How are you?
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatListItem

