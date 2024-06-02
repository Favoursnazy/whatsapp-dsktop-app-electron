import React from 'react';
import StatusList from '../components/routes/status/StatusList';
import MainStatsuDisplay from '../components/routes/status/MainStatusDisplay';

const StatusPage = React.memo((props: any) => {
  return (
    <div className="route-component">
      <StatusList />
      <MainStatsuDisplay />
    </div>
  );
});

export default StatusPage;
