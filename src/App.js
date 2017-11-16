import React, { Component } from 'react';
import './App.css';
import ValidationComponent from "./components/ValidationComponent";
import CharComponent from "./components/CharComponent";

class App extends Component {

    state={
      userInput:''
    };
    onChangeHandler=(event)=>{
        this.setState({userInput:event.target.value});
    };

    deleteCharHandler=(index)=>{
        const text=this.state.userInput.split('');
        text.splice(index, 1);
        const updatedText=text.join('');
        this.setState({userInput: updatedText});
    };


  render() {
      const charList=this.state.userInput.split('').map((char, i)=>{
          return <CharComponent
              key={i}
              character={char}
              clicked={this.deleteCharHandler.bind(this,i)}/>
      });
    return (
      <div className="App">
        <input type="text"
               onChange={this.onChangeHandler.bind(this)}
               value={this.state.userInput} />
          <p>Text: {this.state.userInput}</p>
          <ValidationComponent userInputLength={this.state.userInput.length}/>
          {charList}
      </div>
    );
  }
}

export default App;
