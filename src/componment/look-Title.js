import React,{Component} from 'react';
import './common.css'
import record from '../img/record.png'
export default class LookTitle extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="title" style={{backgroundColor:this.props.color}}>
                <div className="title-img-box">
                    <img src={record}/>
                </div>
                <div className="title-text-box">
                    {
                        this.props.name
                    }
                </div>
                <div className="title-text1-box">
                    {
                        this.props.name1
                    }
                </div>
            </div>
        )
    }
}

