import React,{Component} from 'react';
import '../componment/common.css'
import money from '../img/money.png'

export default class SuperScore extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="content-box1">
            <div className="superscore">
                <div className="score-box">
                    <div className="score-img">
                        <img src={money}/>
                    </div>
                    <div className="score-title">本教学周期薪酬</div>
                    <div className="score-jifen">
                        {this.props.grades.gscore}
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
