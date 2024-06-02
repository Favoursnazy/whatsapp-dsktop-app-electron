import React from 'react';
import MainContentDisplay from '../components/routes/calls/MainContentDisplay';
import ContentList from '../components/routes/calls/ContentList';

const CallsPage = React.memo((props: any) => {
  return (
    <div className="route-component">
      <ContentList />
      <MainContentDisplay />
    </div>
  );
});

export default CallsPage;
