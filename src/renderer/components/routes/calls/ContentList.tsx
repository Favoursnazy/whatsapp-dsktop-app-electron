import React from 'react';
import ContentListHeader from './ContentListHeader';
import { ReactComponent as LinkIcon } from '../../../../../assets/icons-svg/link.svg';

const ContentList = React.memo((props: any) => {
  const handleShowNativeModal = React.useCallback(() => {
    window.electron.ipcRenderer.showCallNativeModal();
  }, []);
  return (
    <div className="route-comp-1 chat-head-list">
      <ContentListHeader />
      <div className="create-call" onClick={handleShowNativeModal}>
        <div className="create-call-inner">
          <div>
            <LinkIcon />
          </div>
          <div>
            <div className="title">Create Call Link</div>
            <div>Share a link for your Whatsapp call </div>
          </div>
        </div>
      </div>
      <div className="call-content-second">
        <div>Start a video or Voice Call</div>
        <div>Make calls to your Whatsapp contacts, Including groups calls</div>
      </div>
    </div>
  );
});

export default ContentList;
