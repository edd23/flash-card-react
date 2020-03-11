import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton.jsx';

class App extends Component {
  constructor(props){
    super(props);

    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [
        {id: 1, title: "English 🇺🇸", text: "Español 🇲🇽"},
        {id: 2, title: "Food 🍔", text: "Comida 🌮"},
        {id: 3, title: "Sleep 😴", text: "Dormir 😴"},
        {id: 4, title: "Walk 🚶🏻‍♂️", text: "Caminar 🚶🏻‍♂️"},
        {id: 5, title: "Study 👨🏻‍💻", text: "Estudiar 👨🏻‍💻"},
        {id: 6, title: "Movie 🎬", text: "Pelicula 🎬"},
        {id: 7, title: "FootBall 🏈", text: "Futbol ⚽️"},
      ],
      currentCard: {}
    }
  }

  addCard = q => {
    var newCard = { ...q, id: Math.floor(Math.random() * 1000000) };
    this.setState({
      cards: [newCard, ...this.state.cards]
    });
  };

  deleteCard = id => {
    const { cards } = this.state;
    const newCards = cards.filter(card => card.id !== id);
    this.setState({
      cards: newCards
    });
  };


  componentWillMount(){
    const currentCards = this.state.cards;

    this.setState({
      cards: currentCards,
      currentCards: this.getRandomCard(currentCards)
    })
  }

  getRandomCard(currentCards){
    var card = currentCards[Math.floor(Math.random() * currentCards.length)]
    return(card);
  }

  updateCard(){
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }

  render() {
    return(
      <div className="App">
        <div className="cardRow">
        <Card title={this.state.currentCard.title} 
              text={this.state.currentCard.text} 
              />
        </div>
        <div className="buttonRow">
        <DrawButton drawCard={this.updateCard}/>
        </div>
      </div>
    );
  }
}

export default App;
