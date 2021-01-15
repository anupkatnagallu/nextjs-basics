import styles from '../styles/Home.module.css';

import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';

export default class IndexPage extends Component {
  static getInitialProps(context) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ name: 'Awesome App' })
      }, 1000);
    })
    return promise;
  }
  render() {
    return (
      <div>
        <h1>The main page of {this.props.name}</h1>
        <p>Go to <Link href='/auth'><a>Auth</a></Link></p>
        <button onClick={() => Router.push('/auth')}>Go to Auth</button>
      </div>
    );
  }

}
