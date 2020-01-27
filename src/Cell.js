import React, { Component } from 'react';
import { throws } from 'assert';

export default class Cell extends Component {

    constructor(props){
        super()
        this.state = {
            color: props.value
        }
    }

    update = () => {
        this.setState({
        color: '#333'
    })
    }

    render(){
        return(
        <div onClick={this.update} className='cell' style={{backgroundColor:this.state.color}}> 
        </div>
        )
    }



}



// // ===========
// render() {
//     return (
//       <div onClick={this.increment}>
//         {this.state.count}
//       </div>
//     )
//   }