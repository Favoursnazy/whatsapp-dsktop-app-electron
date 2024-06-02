import React from 'react';
import { ListGroup, ListItem } from '../../../shared/ReUseables';
import SettingsListHeader from './SettingsListHeader';

const SettingsDetails = React.memo((props: any) => {
  return (
    <div
      className="route-comp-1 settings-list"
      style={{ width: '100%', border: 'none' }}
      data-aos="fade-right"
    >
      <SettingsListHeader title="Chats" />
      <div className="px-3 mt-5">
        <ListItem title="Chat Wallpaper" style={{ fontSize: '80%' }} />
      </div>
      <div className="px-3 mt-5">
        <ListItem
          title="Appearance"
          isRoute
          route={'/settings/appearance'}
          style={{ fontSize: '80%' }}
        />
      </div>
      <div className="px-3 mt-5">
        <ListItem title="Save to Downloads" style={{ fontSize: '80%' }} />
      </div>
      <div className="px-3 mt-5">
        <ListItem title="Export Chats" style={{ fontSize: '80%' }} />
      </div>

      <div className="px-3 mt-5">
        <ListGroup>
          <ListItem title="Archive All Chats" style={{ fontSize: '80%' }} />
          <ListItem title="Clear All Chats" style={{ fontSize: '80%' }} />
          <ListItem title="Export Chats" style={{ fontSize: '80%' }} />
        </ListGroup>
      </div>
    </div>
  );
});

export default SettingsDetails;
