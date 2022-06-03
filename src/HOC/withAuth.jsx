import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Spinner} from 'react-bootstrap';

import useUsers from '../hooks/useUsers';

const withAuthorization = Component => props => {
  const { isLoggedIn } = useUsers();
  const navagate = useNavigate();
  React.useEffect(() => {
    if (!isLoggedIn) {
      navagate('/login');
    }
  }, [isLoggedIn]);
  if (!isLoggedIn) {
    return <Spinner animation="border" />
  }
  return <Component {...props} />;
};

export default withAuthorization;
