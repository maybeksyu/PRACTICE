import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isShown: !prevState.isShown
    }));
  }

  render() {
    const buttonText = this.state.isShown ? 'Hide' : 'Show';
    
    return (
      <div className="App">
        <button 
          className="toggle-button" 
          onClick={this.handleClick}
        >
          {buttonText}
        </button>
      </div>
    );
  }
}

export default App;