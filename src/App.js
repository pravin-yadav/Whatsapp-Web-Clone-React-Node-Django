import React from 'react'
import Chat from './components/Chat';
import ChatSidebar from './components/ChatSidebar';
import './styles/index.scss';

function App() {
  return (
    <React.Fragment>
      <div className="banner" />
      <div className="container">
        <div className="chat-sidebar--container">
          <ChatSidebar />
        </div>
        <div className="chat--container">
          <Chat />
        </div>
      </div>
    </React.Fragment>

  );
}

export default App;
