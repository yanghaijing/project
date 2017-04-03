import React, {Component, PropTypes} from 'react';
import '../Login-js/login.css';
export default class inputItem extends Component{
    render(){
        if(this.props.color=='yellow'){
            return (
                <button className="button-item" onClick={this.props.LoginClick}>登陆</button>
            )
        }else{
            return(
                <input type="text" className="input-item" defaultValue={this.props.name} placeholder={this.props.prompt}/>
            )
        }
    }
}