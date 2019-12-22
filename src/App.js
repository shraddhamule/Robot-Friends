import React from 'react';
import Card from './Component/Card/card.js';
import {Cardlist} from './Component/Cardlist/cardlist.js';
import './App.css';


  
class App extends React.Component {
  constructor(){
    super()
    this.state={
    				users:[],
    				searchField:""
    			}
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(respose=>respose.json())
      .then(data=>this.setState({users:data},console.log(this.state.users)));


  }
  render()
  {
  		
    const filteredRobot=this.state.users.filter(users => 
    	{
    			return users.name.toLowerCase().includes(this.state.searchField)
    	});
                // console.log(this.state.users)
                 //console.log(filteredRobot)
 	 return(

   			 <div className="App">
   			 	<h1 id="title">ROBO FRIENDS</h1>
    		 	<input type="text" placeholder=" Search Robots" onChange={(e)=>this.setState({searchField:e.target.value})}/>
      		 	<Cardlist users = {filteredRobot} />
 			 </div>
 			 )
	}
}


export default App;
