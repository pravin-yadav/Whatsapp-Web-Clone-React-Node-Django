import React from 'react';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

class Header extends React.Component {
    render() {
        return (
            <header>
                <img className="contact-head--avatar" src={'./assets/images/profile_pic.jpg'} alt="" />
                <div className="contact-head--buttons">
                    <div className="contact-head--btn">
                        <DonutLargeIcon />
                    </div>
                    <div className="contact-head--btn">
                        <ChatIcon />
                    </div>
                    <div className="contact-head--btn">
                        <MoreVertIcon />
                    </div>
                </div>
            </header>
        )
    }
}

export default Header