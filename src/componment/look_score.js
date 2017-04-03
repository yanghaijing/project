/**
 * Created by Administrator on 2017/3/21.
 */
import React,{Component} from 'react';
import './common.css';
import money from '../img/money.png'

export default class LookScore extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div className="student-message">
                    <div className="student-name">
                        {
                            this.props.student.sname
                        }
                    </div>
                    <div className="student-about">
                        <div className="student-number">学号：{this.props.student.sno}</div>
                        <div className="student-number">市场部：{this.props.student.market}</div>
                        <div className="student-number">入学日期：{this.props.student.sno}</div>
                        <div className="student-number">学制：{this.props.student.term}</div>
                    </div>
                </div>
                <div className="student-message-score">
                    <div className="student-message-score-title">
                        <img src={money}/>
                        本教学周期薪酬
                    </div>
                    <div className="student-message-score-jifen">
                    ￥{this.props.score}
                    </div>
                    </div>
            </div>
        )
    }
}