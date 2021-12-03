import React from 'react';

export default function LiveErrorBoundary (Element, callback) {
  return class ErrorB extends React.Component {

    state = { hasError: false, error: null };

    static getDerivedStateFromError = error => {
      callback(error)
      return { hasError: true };
    };

    componentDidCatch = (error) => {
      this.setState({ error, hasError: error });
    };

    render () {
      return typeof Element === 'function' ? <Element /> : Element;
    }
  }
}