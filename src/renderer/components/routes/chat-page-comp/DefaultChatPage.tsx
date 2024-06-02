import React from 'react';
import { ReactComponent as WhatsappIcon } from '../../../../../assets/icons-svg/whatsapp.svg';
import { ReactComponent as PadLockIcon } from '../../../../../assets/icons-svg/padlock.svg';

const DefaultChatPage = React.memo((props: any) => {
  return (
    <div className="default-chat-page">
      <div>
        <WhatsappIcon />
      </div>
      <div>Whatsapp for Windows</div>

      <div className="encr-message">
        <PadLockIcon />
        Your personal message are<span>end-to-end encrypted</span>
      </div>
    </div>
  );
});

export default DefaultChatPage;
