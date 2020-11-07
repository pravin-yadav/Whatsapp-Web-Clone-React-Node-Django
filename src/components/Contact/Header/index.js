import React from 'react';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

class Header extends React.Component {
    render() {
        return (
            <header>
                <img className="header--avatar" src={'./assets/profile_pic.jpg'} alt="" />
                <div className="header--buttons">
                    <div className="header--btn">
                        <DonutLargeIcon />
                    </div>
                    <div className="header--btn">
                        <ChatIcon />
                    </div>
                    <div className="header--btn">
                        <MoreVertIcon />
                    </div>
                </div>
            </header>
        )
    }
}

export default Header