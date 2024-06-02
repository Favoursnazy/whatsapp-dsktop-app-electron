import React from 'react';
import ChatPageHeader from '../components/chatPage/ChatPageHeader';
import ChatBox from '../components/chatPage/ChatBox';
import ChatPageArea from '../components/chatPage/ChatPageArea';

const ChatPage = React.memo((props: any) => {
  return (
    <div className="chat-page">
      <ChatPageHeader />
      <ChatPageArea />
      <ChatBox />
    </div>
  );
});

export default ChatPage;
