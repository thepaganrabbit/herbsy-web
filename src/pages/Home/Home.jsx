import React from 'react';
import SideNav from '../../components/SideMenu/SideMenu';
import withAuthorization from '../../HOC/withAuth';

const Home = () => {
  return (
    <div className="home-main">
      <SideNav />
      Home
    </div>
  );
};

export default withAuthorization(Home);
