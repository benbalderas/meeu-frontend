import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PrivateRoute({
  sessionData,
  path,
  component,
  ...rest
}) {
  const user = useSelector((state) => state.user.data);

  if (user) {
    return <Route path={path} component={component} {...rest} />;
  }

  return <Redirect to="/login" {...rest} />;
}
