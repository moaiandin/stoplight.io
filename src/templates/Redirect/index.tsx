import * as React from 'react';
import { Redirect as RouterRedirect } from 'react-router-dom';
import { withRouteData } from 'react-static';

function Redirect({ redirect }) {
  return <RouterRedirect to={redirect} />;
}

export default withRouteData(Redirect);
