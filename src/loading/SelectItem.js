import React, {Component,PropTypes} from 'react';
import '../Login-js/login.css';
export default class inputItem extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <select type="text" className="select-item">
                {
                    this.props.prompt.map((val,index)=>
                            <option value={index} key={val}>{val}</option>
                    )
                }
            </select>
        )
    }
}