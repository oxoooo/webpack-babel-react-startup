import React, { Component } from 'react';
import classnames from 'classnames';

import styles from './App.scss';

export default class App extends Component {

  render() {
    return (
      <div>Hello,
        <span className={classnames(styles.style1, styles.style2)}>world</span>
      </div>
    );
  }

}
