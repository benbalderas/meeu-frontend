import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function AdminRoute({ sessionData, path, component, ...rest }) {
  const user = useSelector((state) => state.user.data);

  if (user) {
    if (user.role === 'Admin') {
      return <Route path={path} component={component} {...rest} />;
    } else {
      return <Redirect to="/museums" {...rest} />;
    }
  }

  return <Redirect to="/login" {...rest} />;
}
