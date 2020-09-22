import React, { Component } from 'react';

import style from '@/publicui/errorBoundary/style.scss';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { isError: true };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log(error, info);
  }

  render() {
    // if (this.state.isError) {
    if (this.state.hasError) {
      return (
        <div
          className={style.test}
        />
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
