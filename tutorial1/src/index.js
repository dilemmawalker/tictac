import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

function Square(props){
  return(
    <button class="Square" onClick={
      props.onClick
    }>
      { props.val}//
    </button>
  );
}

class Board extends React.Component{
// constructor(props){
// super(props)
// this.state={
//   squares: Array(9).fill(null),
//   xnext:true,
// };
// }

// handleClick(i){
//   const squares=this.state.squares.slice();
//   if (calculateWinner(squares) || squares[i]) {
//     return;
//   }
//   squares[i]=this.state.xnext?'x':'o';
//   this.setState({squares:squares,
//     xnext:!this.state.xnext,
//   });
// }
renderSquare(i){
  return (<Square val={this.props.squares[i]} 
          onClick={()=>{this.props.onClick(i)}} />
  );
}
render(){
  // const winner = calculateWinner(this.state.squares);
  //   let status;
  //   if (winner) {
  //     status = 'Winner: ' + winner;
  //   } else {
  //     status = 'Next player: ' + (this.state.xnext ? 'X' : 'O');
  //   }
  return(
    <div>
      <div>
        {this.renderSquare (0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
      </div>
      <div>
      {this.renderSquare (3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
      </div>
      <div>
      {this.renderSquare (6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
      </div>
    </div>
  );
}
}

function calculateWinner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Game extends React.Component{
  constructor(props){
    super(props)
    this.state={
      histroy:[{
        squares: Array(9).fill(null),
      }],
      xnext: true
    };
  }

  handleClick(i){
    const history = this.state.history.slice(0,this.state.stepno+1);
    const current = history[this.state.stepno];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]){
      return;
    }
    squares[i]=this.state.xnext?'x':'o';

    this.setState({
      history:history.concat([{squares:squares}]),
      xnext:!this.state.xnext,
      stepno:history.length
    });
  }

  jump(step){
    this.setState({
      stepno:step,
      xnext:(step%2)===0
    });
  }

  render(){
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);

    const moves=history.map((user,id)=>{
      const desc=id?"go to move"+id:"go to start";
      return(
        <li key={id}>
            <button onClick={()=> this.jump(id)}>{desc}</button>
        </li>
      )
    });

    let status;
    if(winner==='x' || winner==='o'){
      status="winner"+  winner;
    }
    else{
      status="next call"+ this.state.xnext?'x':'o';
    }
    return(
      <div>
        <Board 
        squares= {current.squares}
        onClick={(i)=>this.handleClick(i)} />
        {status}
      </div>
    );
  }
}


ReactDOM.render(
  <Game/>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
