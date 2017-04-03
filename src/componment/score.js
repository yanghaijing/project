import React,{Component} from 'react';
import './common.css'
import money from '../img/money.png'

export default class Score extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="score">
                <div className="score-box">
                    <div className="score-img">
                        <img src={money}/>
                    </div>
                <div className="score-title">本教学周期薪酬</div>
                <div className="score-jifen">
                {
                    this.props.score
                }
                <div className="look" onClick={this.props.click}>
                    <div className="look-inner">查看详情</div>
                </div>
                </div>
                </div>
            </div>
        )
    }
}