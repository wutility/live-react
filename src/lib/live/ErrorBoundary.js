import React from 'react';

export default function ErrorBoundary (Element, callback) {
  return class ErrorB extends React.Component {

    state = { hasError: false, error: null };

    static getDerivedStateFromError = error => {
      callback(error)
      return { hasError: true };
    };

    componentDidCatch = (error) => {
      this.setState({ error, hasError: error ? true : false });
    };

    render () {
      try {
        return typeof Element === 'function' ? <Element /> : Element;
      } catch (err) {
        return <>{'' + err.message}</>;
      }
    }
  }
}
