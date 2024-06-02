import React, { useRef } from 'react';
import { ReactComponent as PadLockIcon } from '../../../../assets/icons-svg/padlock.svg';
import { ChatBubble } from '../../shared/ReUseables';
import { useAppSelector } from '../../shared/hooks';
import { useParams } from 'react-router-dom';

const ChatPageArea = React.memo((props: any) => {
  const chatMessages = useAppSelector((state) => state.main.chat);
  const { conversationId } = useParams();
  const userDetails = useAppSelector((state) => state.main.user_details);
  const containerRef = useRef<any>();

  React.useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [conversationId]);
  return (
    <div ref={containerRef} className="chat-page-center">
      <div className="d-flex justify-content-center mt-3">
        <div className="chat-page-enc-text">
          <PadLockIcon />
          Messages and calls are end-to-end encrypted. No one outside of this
          chat, not even whatsapp can read or listen to them.
          <span> Click to learn more</span>
        </div>
      </div>
      <div>
        {chatMessages
          .filter(
            (chat) =>
              chat.conversation_id === (conversationId as unknown as number),
          )
          .map((chat) => (
            <ChatBubble sent={userDetails.id === chat.user_id} chat={chat} />
          ))}
      </div>
    </div>
  );
});

export default ChatPageArea;
