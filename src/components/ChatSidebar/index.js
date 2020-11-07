import React from 'react'
import { ChatList } from './ChatList'
import Header from './Header'
import Search from './Search'

class ChatSidebar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Search />
                <ChatList />
            </React.Fragment>
        )
    }
}
export default ChatSidebar