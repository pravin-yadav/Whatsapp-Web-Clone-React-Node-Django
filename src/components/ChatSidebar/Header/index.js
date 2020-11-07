import React from 'react';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

class Header extends React.Component {
    render() {
        return (
            <header>
                <img className="chat-sidebar-head--avatar" src={'./assets/images/profile_pic.jpg'} alt="" />
                <div className="chat-sidebar-head--buttons">
                    <div className="chat-sidebar-head--btn">
                        <DonutLargeIcon />
                    </div>
                    <div className="chat-sidebar-head--btn">
                        <ChatIcon />
                    </div>
                    <div className="chat-sidebar-head--btn">
                        <MoreVertIcon />
                    </div>
                </div>
            </header>
        )
    }
}

export default Header