import React from 'react';
import { Route,Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const RouteWithLayout = props => {
  const { layout: Layout, component: Component,pageTitle, ...rest } = props;
  let {authUser} = useSelector(state => state.userState);
  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout pageTitle={pageTitle}>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string,
  pageName: PropTypes.string,
};

export default RouteWithLayout;
