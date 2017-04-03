import React,{Component} from 'react';
import './common.css'
export default class SalaryReduce extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="reduceItem" onClick={()=>this.props.showMask(this.props.reward)}>
                <div className="reduceItem-score">
                    {
                        this.props.reward.score
                    }
                </div>
                <div className="reduceItem-title">
                    {
                        this.props.reward.name
                    }
                </div>
            </div>

        )
    }
}

