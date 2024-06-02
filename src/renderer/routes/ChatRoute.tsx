import React from 'react';
import ChatHeadList from '../components/routes/chat/ChatHeadList';
import MainChatDisplay from '../components/routes/chat/ManChatDisplay';

const ChatRoute = React.memo((props: any) => {
  return (
    <div className="route-component">
      <ChatHeadList />
      <MainChatDisplay />
    </div>
  );
});

export default ChatRoute;
