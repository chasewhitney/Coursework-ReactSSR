import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {

  class ComposedComponent extends Component {
    componentDidMount() {
      if(!this.props.auth){
        console.log('Please log in!')
        this.props.history.push('/');
      }
    }
    render() {
      return (
        <ChildComponent {...this.props} />
      )
    }
  };

  function mapStateToProps({ auth }){
    return { auth };
  }

  return connect(mapStateToProps)(ComposedComponent);
};
