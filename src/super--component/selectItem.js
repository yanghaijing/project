import React,{Component} from 'react';
import './super.css'
export default class SelectItem extends Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props);
        return(
            <div>
                <ul className="selectItem1" onClick={()=>this.props.onLink(this.props.index)}>
                    {
                        this.props.grades.gname
                    }

                </ul>
            </div>
        )
    }
}