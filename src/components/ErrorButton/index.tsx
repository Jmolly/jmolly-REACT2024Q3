import { Component } from 'react';

class ErrorButton extends Component {
  state = { isError: false };

  handleThrowError = () => {
    this.setState({ isError: true });
  };


    if (this.state.isError) {
      throw new Error('Cath me if you can');
    }

    return <button onClick={this.handleThrowError}>Throw Error</button>;
  }
}

export default ErrorButton;
