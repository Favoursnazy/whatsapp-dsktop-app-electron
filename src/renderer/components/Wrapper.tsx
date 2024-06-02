import { MDBContainer } from 'mdb-react-ui-kit';
import React from 'react';
import SideBar from './main-components/SideBar';
import MainDisplay from './main-components/MainDisplay';

const WrapperComponent = React.memo((props: any) => {
  return (
    <MDBContainer fluid className="app-wrapper d-flex">
      <SideBar />
      <MainDisplay />
    </MDBContainer>
  );
});

export default WrapperComponent;
