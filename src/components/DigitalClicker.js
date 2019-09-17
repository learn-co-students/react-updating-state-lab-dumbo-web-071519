// Code DigitalClicker Component Here
import React from 'react';
export default class DigitalClicker extends React.Component{
    constructor(){
        super();
        this.state ={
            timesClicked: 0
        }
    }
    addClick =()=>{
        this.setState({
            timesClicked: this.state.timesClicked + 1
        })
    }

    render( ){
        return (
            <button value="Times Clicked" onClick={this.addClick}>Times Clicked  {this.state.timesClicked}</button>

        )
    }

}
