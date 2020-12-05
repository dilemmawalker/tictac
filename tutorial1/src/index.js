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
      { props.val}
    </button>
  );
}

class Board extends React.Component{
constructor(props){
super(props)
this.state={
  squares: Array(9).fill('-'),
  xnext:true
};
}
handleClick(i){
  const squares=this.state.squares.slice();
  squares[i]=this.state.xnext?'x':'o';
  this.setState({squares:squares,
    xnext:!this.state.xnext
  });
}
renderSquare(i){
  return (<Square val={this.state.squares[i]} 
          onClick={()=>{this.handleClick(i)}} />
  );
}
render(){
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
        {this.renderSquare(5)}<br></br>
      </div>
      <div>
      {this.renderSquare (6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}<br></br>
      </div>
    </div>
  );
}
}

ReactDOM.render(
  <Board/>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
