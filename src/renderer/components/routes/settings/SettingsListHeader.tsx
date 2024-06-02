import React from 'react';

const SettingsListHeader = React.memo((props: any) => {
  return (
    <div className="header-main settings-list">
      <div>{props.title || 'Settings'}</div>
    </div>
  );
});

export default SettingsListHeader;
