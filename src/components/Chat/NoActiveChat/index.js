import React from 'react'

class NoActiveChat extends React.Component {
    render() {
        return (
            <div className="chat--noactivechat">
                <img src={'/assets/images/no-chat.jpg'} alt="" />
                <div>
                    <div className="chat-noactivechat--title">Keep your phone connected</div>
                    <div className="chat-noactivechat--text">WhatsApp connects to your phone to sync messages. To reduce data usage, connect your phone to Wi-Fi.</div>
                </div>
            </div>
        )
    }
}

export default NoActiveChat