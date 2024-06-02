import React from 'react';
import ChatHeadListHeader from './ChatHeadListHeader';
import SearchBox from './SearchBox';
import { ChatHead } from '../../../shared/ReUseables';
import { ReactComponent as PadLockIcon } from '../../../../../assets/icons-svg/padlock.svg';
import contacts from '../../../shared/contacts';

const ChatHeadList = React.memo((props: any) => {
  return (
    <div className="route-comp-1 chat-head-list">
      <ChatHeadListHeader />
      <SearchBox />
      <div>
        {contacts.map((contact, index) => (
          <ChatHead data={contact} key={index} />
        ))}
      </div>
      <div className="encr-message">
        <PadLockIcon />
        Your personal message are<span>end-to-end encrypted</span>
      </div>
    </div>
  );
});

export default ChatHeadList;
