import React from 'react';
import SettingsList from '../components/routes/settings/SettingsList';
import SettingsMainContentDisplay from '../components/routes/settings/SettingsMainDisplay';

const SettingsPage = React.memo((props) => {
  return (
    <div className="route-component">
      <SettingsList />
      <SettingsMainContentDisplay />
    </div>
  );
});

export default SettingsPage;
