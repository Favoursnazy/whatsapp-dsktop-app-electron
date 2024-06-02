import React from 'react';
import { Link } from 'react-router-dom';

export const SideBarIcon = React.memo((props: any) => {
  return (
    <Link to={props.to}>
      <div className="sidebar-icon">{props.children}</div>
    </Link>
  );
});
