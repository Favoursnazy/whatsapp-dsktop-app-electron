import React from 'react';
import { ReactComponent as PlusIcon } from '../../../../assets/icons-svg/plus.svg';
import { ReactComponent as FileIcon } from '../../../../assets/icons-svg/sticker.svg';
import { ReactComponent as SmileFaceIcon } from '../../../../assets/icons-svg/grinning-face.svg';
import { ReactComponent as MicIcon } from '../../../../assets/icons-svg/mic.svg';
import { useAppDispatch, useAppSelector } from '../../shared/hooks';
import { useParams } from 'react-router-dom';
import { IChatBubble } from '../../shared/types';
import { updateChat } from '../../shared/slices/redux-slice';
import contacts from '../../shared/contacts';

const ChatBox = React.memo((props: any) => {
  const disptach = useAppDispatch();
  const chats = useAppSelector((state) => state.main.chat);
  const userDetails = useAppSelector((state) => state.main.user_details);
  const { conversationId } = useParams();

  const handleSendMessage = React.useCallback(
    (e: any) => {
      e.preventDefault();
      if (e.key.toLowerCase() == 'enter') {
        const chatBubble: IChatBubble = {
          message: e.target.innerText,
          time: '05:55',
          user_id: userDetails.id,
          id:
            chats.filter(
              (chat) =>
                chat.conversation_id === (conversationId as unknown as number),
            ).length + 1,
          conversation_id: conversationId as unknown as number,
        };
        disptach(updateChat(chatBubble));
        if (
          chats.filter(
            (chat) =>
              chat.conversation_id === (conversationId as unknown as number),
          ).length %
            3 ===
          0
        ) {
          const chatBubbleResp: IChatBubble = {
            message: 'Thank ou for message,how are you?',
            time: '05:55',
            user_id: contacts.find(
              (contact) => contact.id == (conversationId as unknown as number),
            )!.id,
            id:
              chats.filter(
                (chat) =>
                  chat.conversation_id ===
                  (conversationId as unknown as number),
              ).length + 1,
            conversation_id: conversationId as unknown as number,
          };
          disptach(updateChat(chatBubbleResp));
        }
        setTimeout(() => {
          document.querySelector('.chat-page-center')!.scrollTop =
            document.querySelector('.chat-page-center')?.scrollHeight as number;
        }, 300);
        e.target.innerText = '';
      }
    },
    [chats, conversationId],
  );

  return (
    <div className="chat-box-container">
      <div>
        <PlusIcon className="bigger" />
      </div>
      <div className="input-container">
        <div
          className="input"
          contentEditable="true"
          onKeyUp={handleSendMessage}
        />
        <div>
          <FileIcon />
          <SmileFaceIcon />
        </div>
      </div>
      <div>
        <MicIcon />
      </div>
    </div>
  );
});

export default ChatBox;
