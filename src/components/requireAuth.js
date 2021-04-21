import React, {Component} from "react";
import {connect} from 'react-redux';

const requireAuth =  (ChildComponent) => {
  class ComposedComponent extends Component {
    // component just got rendered.
    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
        console.log('this.props.auth', this.props.auth);
      if (!this.props.auth) {
        //console.log('I NEED TO LEAVE');
        this.props.history.push("/");
      }
    }
    render() {
      return <ChildComponent {...this.props}/>;
    }
  }

  function mapStatsToProps(state) {
      console.log('mapStatsToProps', state.auth.authenticated);
    return {
      auth: state.auth.authenticated,
    };
  }

  return connect(mapStatsToProps)(ComposedComponent);
};

export default requireAuth;
