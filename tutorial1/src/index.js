import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// class ShoppingList extends React.Component{
//   render(){
//     return(
//       <div className="shopping">
//         <ul>
//           <li>insta</li>
//           <li>whatsapp</li>
//           <li>fb</li>
//         </ul>
//       </div>
//     );
//   }
// }

class Square extends React.Component{
  // constructor(props){
  //   super(props);
  //   this.state={
  //     val: null
  //   }
  // }
  
  render(props){

    let aa=props.map((user,id)=>{
      return (
        
        <button 
         val={'x'}
         onClick={
          ()=>{
            this.setState=({val:'o'})
          }
        }></button>
      );
    })

    // return(
    //   <button class="square" onClick={
    //     ()=>{
    //       this.setState({
    //         val:'x'
    //       })
    //     }
    //   } >
    //   {this.state.val}
    //   </button>
    // );

    return(
      {aa}
    )
  }
}

class Board extends React.Component{
  render(){
    let ar=[0,1,2,3,4];
      let arr=[];
    ar.map((user,id)=>{
     return arr.push(ar[id]);
    }
    );

   
      return <Square val={arr}/>
      
   

    // return (
    //   <div>
    // <Square val={0} />
    // {/* <Square val={i+1} />
    // <Square val={i+2} />
    // <Square val={i+3} /> */}
    // </div>
    // );
    // return(
    //   <div>
    //     {aa}
    //   </div>
    // );
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
