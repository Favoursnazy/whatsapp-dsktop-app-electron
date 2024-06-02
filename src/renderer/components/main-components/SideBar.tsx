import React from 'react';
import { SideBarIcon } from '../Icon';
import { ReactComponent as ChatIcon } from '../../../../assets/icons-svg/chat-bubble-2.svg';
import { ReactComponent as CallIcon } from '../../../../assets/icons-svg/call-27.svg';
import { ReactComponent as StatusIcon } from '../../../../assets/icons-svg/Status.svg';
import { ReactComponent as ArchiveIcon } from '../../../../assets/icons-svg/archivebox-2.svg';
import { ReactComponent as StarIcon } from '../../../../assets/icons-svg/star-86.svg';
import { ReactComponent as SettingsIcon } from '../../../../assets/icons-svg/gear-66.svg';

const SideBar = React.memo((props: any) => {
  return (
    <div className="app-sidebar">
      <div>
        <SideBarIcon to={'chat'}>
          <ChatIcon />
        </SideBarIcon>
        <SideBarIcon to={'calls'}>
          <CallIcon />
        </SideBarIcon>
        <SideBarIcon to={'status'}>
          <StatusIcon />
        </SideBarIcon>
        <hr className="seperator" />
        <SideBarIcon>
          <ArchiveIcon />
        </SideBarIcon>
        <SideBarIcon>
          <StarIcon />
        </SideBarIcon>
      </div>
      <div>
        <SideBarIcon to={'settings'}>
          <SettingsIcon />
        </SideBarIcon>
      </div>
    </div>
  );
});

export default SideBar;
