import React from 'react';
import { ReactComponent as PadLock } from '../../../../../assets/icons-svg/Icon (5).svg';
import { ReactComponent as ProfileIcon } from '../../../../../assets/icons-svg/whatsapp-with-bg.svg';
import { ReactComponent as AccountIcon } from '../../../../../assets/icons-svg/Icon (6).svg';
import { ReactComponent as NotificationIcon } from '../../../../../assets/icons-svg/Icon (7).svg';
import { ListGroup, ListItem } from '../../../shared/ReUseables';
import SettingsListHeader from './SettingsListHeader';

const SettingsList = React.memo((props: any) => {
  return (
    <div className="route-comp-1 settings-list">
      <SettingsListHeader />
      <div className="create-call">
        <div className="create-call-inner settings">
          <div>
            <ProfileIcon />
          </div>
          <div>
            <div className="title">Favoursnazy</div>
            <div>Hey there i am using Whatsapp </div>
          </div>
        </div>
      </div>
      <div className="px-3 mt-4">
        <ListGroup>
          <ListItem
            title="Acount"
            icon={<AccountIcon />}
            style={{ fontSize: '80%' }}
          />
          <ListItem
            title="Privacy"
            icon={<PadLock />}
            style={{ fontSize: '80%' }}
          />
          <ListItem
            title="Chats"
            icon={<ProfileIcon />}
            style={{ fontSize: '80%' }}
            route="/settings/chat-settings"
          />
          <ListItem
            title="Notifications"
            icon={<NotificationIcon />}
            style={{ fontSize: '80%' }}
          />
        </ListGroup>
      </div>
      <div className="px-3 mt-4">
        <ListGroup>
          <ListItem
            title="Help"
            icon={<AccountIcon />}
            style={{ fontSize: '80%' }}
          />
        </ListGroup>
      </div>
    </div>
  );
});

export default SettingsList;
