import React, { Component } from 'react';
import { connect } from 'react-redux';

import demoActions from '../actions/demo';

@connect(mapStateToProps, mapDispatchToProps)
export default class Label extends Component {

  render() {
    return (
      <div>The text is: {this.props.text}</div>
    );
  }

}

function mapStateToProps(store, props) {
  return {
    text: store.demo.text,
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}
