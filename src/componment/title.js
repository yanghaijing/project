import React,{Component} from 'react';
import './common.css'
export default class Title extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="title" style={{backgroundColor:this.props.color,color:this.props.color1}}>
                <div className="title-img-box">
                    <img src={this.props.img}/>
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
