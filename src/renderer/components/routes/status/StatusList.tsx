import React from 'react';
import { ReactComponent as LinkIcon } from '../../../../../assets/icons-svg/link.svg';
import StatusHeadListHeader from './StatusHeadListHeader';
import SearchBox from '../chat/SearchBox';

const StatusList = React.memo((props: any) => {
  return (
    <div className="route-comp-1 chat-head-list">
      <StatusHeadListHeader />
      <SearchBox />
      <div>
        <div className="section-title">Viewed updates</div>
        <div className="status-head">
          <div className="preview">
            <span>.</span>
          </div>
          <div>
            <div>Favoursnazy</div>
            <div className="time">21h ago</div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default StatusList;
