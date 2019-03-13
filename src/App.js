import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TestComp from './component/TestComp'
import ListStudents from './component/ListStudents';
// import userList from './component/userList';

class App extends React.Component {
  
  state = {
    studentList: [1,2,3],
    isLoading: true,
    errors: null,
  };

//isLoading allows for a iconlike an hour glass to be displayed while the app is initialising

  componentDidMount() {
    console.log("I mounted")
    // fetch("http://localhost:58600/api/Students/")
    // .then(data => console.log("got data", data))
    // .then(parsed => JSON.parse(parsed))
    // .then(logging => console.log(logging))

    this.fetchThing()
  }

  // TODO: 

  // Next 1) Add a new component for UserLists
  //      2) show a list of the users in this component
  //      3) Split this List component to handle many users (Users is a new componnet)
  


  fetchThing() {
    // Where are we fetching data from
    fetch(`http://localhost:58600/api/Students/`)
      // We get the API response then receive data in JSON...
      .then(response => response.json())
      // Normally would use a store like redux
      // being this example demo - simpler to it do this way.. 
      .then(data => {
        console.log("were going to set state  before ", data)
        this.setState({
          studentList: data,
          isLoading: false,
        })
        console.log("were going to set state  after ", data)

      }
      )
      
      //.then(sorted => this.fixRelationships(sorted))
      // finally data should look good - so set the state.

      // Catch any unknowns (errors) and update loading status
      .catch(error => this.setState({ error, isLoading: false }));

  }


  render() {
    return (
      <div className="App">
        <header className="App-header" >
          <img src={logo} className="App-logo" alt="logo" />

          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <TestComp message="banana"></TestComp>
          <TestComp message="Khalid"></TestComp>
          <TestComp message="Fred"></TestComp>
          <ListStudents item={this.state.studentList}></ListStudents>


          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;


  // class ProductsList extends React.Component {  
  // constructor() {  
  //     super();  
  //     this.state = {  
  //         ProductData: []  
  //     }  
  // }  

//   componentDidMount() {  
//       fetch("http://localhost:58600/api/Students").then(response => {  
//           //console.log(response.data);  
//           this.setState({  
//               ProductData: response.data  
//           });  
//       });  
//   }  

//   render() {  

//       return (  
//           <section>  
//               <h1>Products List</h1>  
//               <div>  
//                   <table>  
//                       <thead><tr><th>EMPID</th><th>OpCoemailend</th><th>firstName</th><th>lastName</th><th>email</th><th>level</th><th>managerID</th>
//                       <th>emailRelationship</th></tr></thead>  
//                       <tbody>  
//                           {  
//                               this.state.ProductData.map((p, index) => {  
//                                   return <tr key={index}><td>{p.ProductId}</td><td> {p.ProductName}</td><td>{p.ProductCategory}</td><td>{p.ProductPrice}</td></tr>;  
//                               })  
//                           }  
//                       </tbody>  
//                   </table>  
//               </div>  


//           </section>  
//       )  
//   }  
 
// }

//  render( 
//   <ProductsList />,  
//   document.getElementById('myContainer')); 
