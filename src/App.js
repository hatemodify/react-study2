import React from "react";

const players = [
  {
    name: "ldk",
    score: 50,
    id: 1
  },
  {
    name: "a",
    score: 50,
    id: 2
  },
  {
    name: "b",
    score: 60,
    id: 3
  },
  {
    name: "c",
    score: 70,
    id: 4
  }
];

const Header = props => {
  console.log(props);
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players : {props.totalPlayers}</span>
    </header>
  );
};

const Player = props => (
  <div className="player">
    <span className="player-name">
      <button
        className="remove-player"
        onClick={() => props.removePlayer(props.id)}
      >
        x
      </button>
      {props.name}
    </span>
    <Counter />
  </div>
);

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    console.log(props);
  }

  state = {
    score: 0
  };

  increment = () => {
    //state 변경방법
    //this.state.score +=1
    // merge 됨 기존속성 유지
    //비동기 처리
    this.setState(prevState => ({
      score: prevState.score + 1
    }));
  };
  decrement = () => {
    console.log(this);
    this.setState(prevState => ({
      score: prevState.score - 1
    }));
  };

  changeScore = delta => {
    this.setState(prevState => ({
      score: prevState.score + delta
    }));
  };

  render() {
    return (
      <div className="counter">
        <button
          className="counter-action decrement"
          onClick={() => this.changeScore(-1)}
        >
          -
        </button>
        <span className="counter-score">{this.state.score}</span>
        <button
          className="counter-action increment"
          onClick={() => this.changeScore(1)}
        >
          +
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    players: [
      {
        name: "ldk",
        id: 1
      },
      {
        name: "a",
        id: 2
      },
      {
        name: "b",
        id: 3
      },
      {
        name: "c",
        id: 4
      }
    ]
  };

  // 1. player 삭제 콜백 펑션,
  handleRemovePlayer = id => {
    console.log(id);

    this.setState(prevState => ({
      players: prevState.players.filter(item => item.id !== id)
    }));
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="my scoreboard" totalPlayers={11} />
        {this.state.players.map(player => (
          <Player
            name={player.name}
            key={player.id}
            removePlayer={this.handleRemovePlayer}
            id={player.id}
          />
        ))}
      </div>
    );
  }
}

export default App;
