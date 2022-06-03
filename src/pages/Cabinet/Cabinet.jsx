import React from 'react';

import SideNav from '../../components/SideMenu/SideMenu';
import withAuthorization from '../../HOC/withAuth';

const Cabinet = () => {
  return (
    <div>
      <SideNav />
      <div className="cabinet-container">
        <div className="title">
          <h2 data-testid="Cabinet Title">Cabinet</h2>
        </div>
      </div>
    </div>
  );
};

export default withAuthorization(Cabinet);
