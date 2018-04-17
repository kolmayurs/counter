import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchData, addToList, removeFromList,addInList,subInList, increment, decrement} from '../actions/reduxActions'

function mapStateToProps(state){
  return{
    data: state.fetchData.data,
    fetching: state.fetchData.fetching,
    listCounter: state.list,
    value: state.counter 
  }
}

function mapDispatchToProps(dispatch){
  return{
    ...bindActionCreators({fetchData,addToList,removeFromList,addInList,subInList, increment, decrement},dispatch)
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.addCounter=this.addCounter.bind(this);
    this.removeCounter=this.removeCounter.bind(this);
    this.addInList=this.addInList.bind(this);
    this.subInList=this.subInList.bind(this);
  }
  componentDidMount(){

    this.props.fetchData();
  }
  addCounter(){
    this.props.addToList();
  }
  removeCounter(i){
    this.props.removeFromList(i);
  }
  addInList(i){
    this.props.addInList(i);
  }
  subInList(i){
    this.props.subInList(i);
  }
  render() {
    console.log('List Array : ' + this.props.listCounter);
    if(this.props.fetching){
      return(<h1>Loading...</h1>)
    }
    return (
      <div className="App">
      {this.props.listCounter.map((items, i) =>  
              <div key={i}>
              <h1>Counter: {this.props.listCounter[i]}</h1>
            <button onClick={this.addInList.bind(this,i)}>+</button><button onClick={this.subInList.bind(this,i)}>-</button>
            </div>
            )}
      <br /><br />
      <button onClick={this.addCounter.bind(this)}>Add Counter</button><button onClick={this.removeCounter.bind(this,this.props.listCounter[this.props.listCounter.length-1])}>Remove Counter</button>
      {
        this.props.data.map((items,i) =>
            <h5 key={'movies_' + i}>{items.title}</h5>
          )
      }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
