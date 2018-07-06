import React, { Component } from 'react';


class Questions extends Component {
 render() {
   return (<div>
     <h4>{this.props.content}</h4>
              <span>
                <input className="element radio"/>
              <label>{this.props.options[0].option1}</label>
              <label>{this.props.options[0].option2}</label>
              <label>{this.props.options[0].option3}</label>
              </span>
           </div> )
 }
}

export default Questions;