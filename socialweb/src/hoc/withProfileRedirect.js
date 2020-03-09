import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

let mapStateToPropsForRedirect = state => ({
  isAuth: state.auth.isAuth,
  id: state.auth.id
});

export const withProfileRedirect = Component => {
  class RedirectComponent extends React.Component {
    render() {
      if (this.props.isAuth)
        return <Redirect to={`/profile/${this.props.id}`} />;
      return <Component {...this.props} />;
    }
  }
  let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );

  return ConnectedRedirectComponent;
};
