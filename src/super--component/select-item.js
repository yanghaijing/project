import React,{Component} from 'react';
import '../componment/common.css'
export default class SuperSelectItem extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props);
        return(
            <div>
                <ul className="selectItem1" style={{backgroundColor:this.props.color,color:this.props.color1}}>
                    {this.props.content}
                </ul>
            </div>
        )
    }
}