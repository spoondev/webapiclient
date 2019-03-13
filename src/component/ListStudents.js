import React, { Component } from 'react';

class ListStudents extends Component {
    render() {
        const {item} = this.props

        const htmlList = item.map( i =>  i.email )
        console.log(htmlList)
        console.log(item)
        return (
            <div>
               <h2>I am a list</h2> 
               <ul>
               { htmlList }
               </ul>
            </div>
        );
    }
}

export default ListStudents;