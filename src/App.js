import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';


const API = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
class App extends React.Component {
    state = {
      quotes: [
        {
          "quote":"Strive not to be a success, but rather to be of value.",
          "author":"Albert Einstein"
        }
      ],
      index: 0
    }
    componentDidMount(){
      fetch(API).then(res =>res.json()).then(res =>{
        this.setState({
          quotes: res.quotes
        }, this.getRandomIndex)
      })
    }

    getRandomIndex = ()=>{
      const {quotes} = this.state
      if(quotes.length > 0){
        const index = Math.floor(Math.random() * quotes.length)
        this.setState({
          index
        })
      }
    }
  render(){
    const {quotes, index} = this.state;
    const onequote = quotes[index]
    const tweeturl =`https://twitter.com/intent/tweet?text=${onequote.quote} - ${onequote.author}`
    return (
      <div className="App">
        <div className="Quote-box">
          {
          onequote && (
              <div>
                <p><i className="fa fa-quote-left"></i>{onequote.quote}</p>
                <cite className="Text-right">-{onequote.author}</cite>
              </div>
            )
          
          }
          <div className="btn-div">
            <button className="btn">
            <a href= {tweeturl} target="_blank" ><i className="fa fa-twitter"> </i>twitter</a>
            </button>
            <button className="btn" onClick = {this.getRandomIndex}><i className="fa fa-random"></i>Get Quote</button>
          </div>
        </div>
      </div>
    );
  }
 
}

export default App;
