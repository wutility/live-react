import React from 'react';

export default function LiveErrorBoundary (Element:any, callback:any) {
  return class ErrorB extends React.Component {

    state = { hasError: false, error: null };

    static getDerivedStateFromError = (error:any) => {
      callback(error)
      return { hasError: true };
    };

    componentDidCatch = (error:any) => {
      this.setState({ error, hasError: error });
    };

    render () {
      return typeof Element === 'function' ? <Element /> : Element;
    }
  }
}
